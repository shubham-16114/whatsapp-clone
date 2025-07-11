import React, { useRef, useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";

export default function CameraButton({ onSend = () => {}, className = "" }) {
  const [manual, setManual] = useState(false);
  const [stream, setStream] = useState(null);
  const [shot, setShot] = useState(null);
  const [noCamera, setNoCamera] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const stop = (s) => s && s.getTracks().forEach((t) => t.stop());

  const trigger = () => setManual(true);

  useEffect(() => {
    if (manual && !stream) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: { ideal: "environment" } } })
        .then((s) => {
          setStream(s);
          const v = videoRef.current;
          if (v) {
            v.srcObject = s;
            v.onloadedmetadata = () => v.play().catch(() => {});
          }
        })
        .catch(() => {
          setManual(false);
          setNoCamera(true);
        });
    }
  }, [manual, stream]);

  useEffect(() => () => stop(stream), [stream]);

  const close = () => {
    stop(stream);
    setStream(null);
    setManual(false);
    setShot(null);
  };

  const capture = () => {
    const v = videoRef.current,
      c = canvasRef.current;
    if (!v || !c) return;
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    c.getContext("2d").drawImage(v, 0, 0);
    c.toBlob((b) => setShot(b), "image/jpeg", 0.9);
  };

  const send = () => {
    if (shot) onSend(shot);
    close();
  };

  return (
    <>
      <FaCamera onClick={trigger} className={`cursor-pointer ${className}`} />

      {manual && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
          {!shot ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 w-full flex justify-center gap-8">
                <button
                  onClick={capture}
                  className="h-16 w-16 rounded-full border-4 border-white"
                />
                <button
                  onClick={close}
                  className="px-6 py-3 bg-blue-600 rounded text-white"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <img
                src={URL.createObjectURL(shot)}
                alt=""
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-10 w-full flex justify-center gap-8">
                <button
                  onClick={() => setShot(null)}
                  className="px-6 py-3 bg-gray-700 rounded text-white"
                >
                  Retake
                </button>
                <button
                  onClick={send}
                  className="px-6 py-3 bg-green-600 rounded text-white"
                >
                  Send
                </button>
              </div>
            </>
          )}
          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}

      {noCamera && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <p className="mb-4 text-gray-800 text-center">
              Your device does not have a camera
            </p>
            <button
              onClick={() => setNoCamera(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}