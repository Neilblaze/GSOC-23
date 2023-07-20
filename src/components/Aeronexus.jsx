import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands/hands";
import { Camera } from "@mediapipe/camera_utils/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils/drawing_utils";
import "@mediapipe/control_utils/control_utils";

import { putGesture, putFingLock, putInitialze } from "../redux/gesture/gesture.ops";
import allGesture from "../utils/allGesture";

function Aeronexus({ putGesture, putFingLock, putInitialze }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.1.1617147326/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6,
    });

    const cnvs = canvasRef.current;
    const ctx = cnvs.getContext("2d");

    const onResults = (res) => {
      putInitialze();
      ctx.clearRect(0, 0, cnvs.width, cnvs.height);
      ctx.drawImage(res.image, 0, 0, cnvs.width, cnvs.height);

      if (res.multiHandLandmarks) {
        for (const landmarks of res.multiHandLandmarks) {
          const gesture = allGesture(landmarks);
          putGesture(gesture);
          putFingLock(landmarks);

          drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 5 });
          drawLandmarks(ctx, landmarks, { color: "#FF0000", lineWidth: 2 });
        }
      }
    };

    hands.onResults(onResults);

    const vidElm = document.createElement("video");

    const camera = new Camera(vidElm, {
      onFrame: async () => {
        await hands.send({ image: vidElm });
      },
      width: 1280,
      height: 720,
    });

    camera.start();
  }, [putGesture, putFingLock, putInitialze]);

  useEffect(() => {
    const setCanvasSize = () => {
      canvasRef.current.height = window.innerHeight;
      canvasRef.current.width = window.innerWidth;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
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
