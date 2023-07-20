import React, { useState, useEffect } from "react";
import DashboardUI from "./DashboardUI";

const Landing = () => {
  const [loaded, putInitialze] = useState(false);
  const [cameraPermissionAllowed, setCameraPermissionAllowed] = useState(false);

  useEffect(() => {
    const checkCameraPermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraPermissionAllowed(true);
      } catch (error) {
        console.error("Camera permission not allowed:", error);
        setCameraPermissionAllowed(false);
      }
    };

    checkCameraPermission();

    const timer = setTimeout(() => {
      putInitialze(true);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <div className="absolute top-0 flex flex-col items-center justify-center w-screen h-screen text-white bg-cover" style={{ backgroundImage: "url('/bg_wave.gif')" }}>
        <img className="w-1/3 pointer-events-none" src="/main_logo.png" alt="Logo" />
        <div className="mt-4 text-sm w-1/3 text-center text-green-400">Revolutionizing Contactless Interactions</div>
        <div className="mt-4 text-sm w-2/5 text-center text-gray-400">A Proof of Concept Demo Showcasing Touchless Interactions Leveraging Mediapipe's Hand Project. Requires a newer computer. Best experienced in well-lit environments. Ideal on larger screens.</div>
        {cameraPermissionAllowed ? (
          <div className="flex items-center mt-2 text-sm w-1/4">
            <div className="absolute top-6 right-28 p-4">Loading Model</div>
            <svg className="absolute top-6 right-24 animate-spin h-5 mt-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="green" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <div className="flex items-center mt-2 text-sm w-1/4">
            <div className="absolute top-6 right-28 p-4 text-red-400">Grant Camera Access</div>
            <div className="absolute top-10 right-24 pointer-events-none">
              <img src="/sumercamppulse.gif" alt="" style={{ width: 23, height: 23 }} />
            </div>
          </div>
        )}
        <div className="absolute top-2 left-2 p-4 pointer-events-none">
          <img src="/MP_logo.png" alt="" style={{ width: 180, height: 50 }} />
        </div>
        <div className="absolute bottom-0 w-screen text-center mb-4 text-gray-400 text-sm">We neither collect, store, nor send any data. The video is processed in your browser itself and is GDPR compliant.</div>
      </div>
    );
  } else {
    return <DashboardUI />;
  }
};

export default Landing;
