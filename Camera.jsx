import React, { useRef, useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";

function CameraButton({ className = "", onSend = () => {} }) {
  const [stream, setStream] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showError, setShowError] = useState(false);
  const [shot, setShot] = useState(null);
  const [facing, setFacing] = useState("environment");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const openCamera = async () => {
    if (stream) stream.getTracks().forEach((t) => t.stop());
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: facing } },
        audio: false,
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
    setShot(null);
  };

  const capture = () => {
    const v = videoRef.current;
    const c = canvasRef.current;
    if (!v || !c) return;
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    c.getContext("2d").drawImage(v, 0, 0);
    c.toBlob((b) => setShot(b), "image/jpeg", 0.9);
  };

  const retake = () => setShot(null);

  const send = () => {
    if (shot) onSend(shot);
    closeAll();
  };

  const toggleFacing = () =>
    setFacing((f) => (f === "user" ? "environment" : "user"));

  useEffect(() => {
    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, [stream]);

  return (
    <>
      <FaCamera onClick={openCamera} className={`cursor-pointer ${className}`} />

      {showPreview && !shot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-[90vw] max-w-sm rounded-xl bg-gray-900 p-4 flex flex-col items-center">
            <video
              ref={videoRef}
              className="w-full aspect-video rounded-lg object-cover"
              playsInline
            />
            <div className="mt-4 flex gap-4">
              <button
                onClick={capture}
                className="h-14 w-14 rounded-full border-4 border-white"
              />
              <button
                onClick={toggleFacing}
                className="rounded-lg bg-gray-700 px-4 py-2 text-white"
              >
                ↻
              </button>
              <button
                onClick={closeAll}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreview && shot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-[90vw] max-w-sm rounded-xl bg-gray-900 p-4 flex flex-col items-center">
            <img
              src={URL.createObjectURL(shot)}
              alt="preview"
              className="w-full aspect-video rounded-lg object-contain"
            />
            <div className="mt-4 flex gap-4">
              <button
                onClick={retake}
                className="rounded-lg bg-gray-700 px-4 py-2 text-white"
              >
                Retake
              </button>
              <button
                onClick={send}
                className="rounded-lg bg-green-600 px-4 py-2 text-white"
              >
                Send
              </button>
            </div>
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

      <canvas ref={canvasRef} className="hidden" />
    </>
  );
}

export default CameraButton;