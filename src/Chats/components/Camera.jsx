import React, { useRef, useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";

function CameraButton({ className = "" }) {
  const [stream, setStream] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showError, setShowError] = useState(false);
  const videoRef = useRef(null);

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
      });
      setStream(mediaStream);
      setShowPreview(true);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
    } catch {
      setShowError(true);
    }
  };

  const closeAll = () => {
    if (stream) stream.getTracks().forEach((t) => t.stop());
    setStream(null);
    setShowPreview(false);
    setShowError(false);
  };

  useEffect(() => {
    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, [stream]);

  return (
    <>
      <FaCamera onClick={openCamera} className={`cursor-pointer ${className}`} />

      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-[90vw] max-w-sm rounded-xl bg-gray-900 p-4 flex flex-col items-center">
            <video
              ref={videoRef}
              className="w-full aspect-video rounded-lg object-cover"
              playsInline
            />
            <button
              onClick={closeAll}
              className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {showError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-[90vw] max-w-sm rounded-xl bg-white px-6 py-8 text-center shadow-lg">
            <p className="mb-6 text-lg font-semibold text-black">
              This device has no camera function.
            </p>
            <button
              onClick={closeAll}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CameraButton;