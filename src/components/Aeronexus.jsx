import React, { useRef, useEffect } from 'react';
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import { connect } from 'react-redux';
import { putGesture, putFingLock, putInitialze } from '../redux/gesture/gesture.ops';
import allGesture from '../utils/allGesture';

function Aeronexus({ putGesture, putFingLock, putInitialze }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const drawLandmarksAndConnectors = (landmarks, ctx) => {

      // Draw connectors
      const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4], // Thumb
        [0, 5], [5, 6], [6, 7], [7, 8], // Index finger
        [5, 9], [9, 10], [10, 11], [11, 12], // Middle finger
        [9, 13], [13, 14], [14, 15], [15, 16], // Ring finger
        [13, 17], [17, 0], [17, 18], [18, 19], [19, 20], // Little finger
      ];

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 4;
      for (const connection of connections) {
        const [index1, index2] = connection;
        ctx.beginPath();
        ctx.moveTo(landmarks[index1].x * canvasRef.current.width, landmarks[index1].y * canvasRef.current.height);
        ctx.lineTo(landmarks[index2].x * canvasRef.current.width, landmarks[index2].y * canvasRef.current.height);
        ctx.stroke();
      }

      // Draw landmarks
      ctx.fillStyle = 'red';
      for (const landmark of landmarks) {
        ctx.beginPath();
        ctx.arc(landmark.x * canvasRef.current.width, landmark.y * canvasRef.current.height, 7, 0, 2 * Math.PI);
        ctx.fill();
      }
    };

    const loadModelAndStartDetection = async () => {
      const vision = await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm');
      const handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
          delegate: 'GPU',
        },
        runningMode: 'IMAGE' || 'VIDEO',
        numHands: 1,
        minHandDetectionConfidence: 0.6,
        minHandPresenceConfidence: 0.6,
      });

      const cnvs = canvasRef.current;
      const ctx = cnvs.getContext('2d');
      const vidElm = document.createElement('video'); // Move vidElm to the outer scope

      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
          vidElm.srcObject = stream;
          await vidElm.play();

          const detectLandmarks = async () => {
            try {
              const results = await handLandmarker.detect(vidElm);
              const landmarks = results?.landmarks;

              // Clear canvas before drawing
              ctx.clearRect(0, 0, cnvs.width, cnvs.height);

              if (landmarks && landmarks.length > 0) {
                // Draw video frame
                ctx.drawImage(vidElm, 0, 0, cnvs.width, cnvs.height);
                // Draw landmarks and connectors
                drawLandmarksAndConnectors(landmarks[0], ctx);

                putGesture(allGesture(landmarks[0]));
                putFingLock(landmarks[0]);
              } else {
                // If hand landmarks are not detected, still draw the video frame
                ctx.drawImage(vidElm, 0, 0, cnvs.width, cnvs.height);
              }
            } catch (error) {
              console.error('Error detecting landmarks: ', error);
            }

            requestAnimationFrame(detectLandmarks);
          };

          detectLandmarks();
        } catch (error) {
          console.error('Error accessing the camera: ', error);
        }
      };

      startCamera();
    };

    loadModelAndStartDetection();
  }, [putGesture, putFingLock, putInitialze]);

  useEffect(() => {
    const setCanvasSize = () => {
      canvasRef.current.height = window.innerHeight;
      canvasRef.current.width = window.innerWidth;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="absolute top-0 filter filter-grayscale-80 opacity-10">
      <canvas className="transform scale-x-minus-1" ref={canvasRef} />
    </div>
  );
}

const mapDispatchToProps = {
  putGesture,
  putFingLock,
  putInitialze,
};

export default connect(null, mapDispatchToProps)(Aeronexus);
