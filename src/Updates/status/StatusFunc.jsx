import { useState, useEffect } from "react";
import { myStatusData } from "./myStatusData";

function StatusRing({
  count,
  seen = 0,
  size = 56,
  stroke = 4,
  color = "#25D366",
  seenColor = "#808080",
}) {
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  if (count <= 0) return null;

  const gap = stroke * 2;
  const seg = (C - gap * count) / count;
  const dash = `${seg} ${C - seg}`;

  return (
    <svg width={size} height={size}>
      {Array.from({ length: count }).map((_, i) => (
        <circle
          key={i}
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={i < seen ? seenColor : color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={dash}
          transform={`rotate(${(360 / count) * i - 90} ${size / 2} ${size / 2})`}
        />
      ))}
    </svg>
  );
}

function Viewer({ files, idx, setIdx, markSeen }) {
  const f = files[idx];
  const obj =
    typeof f === "string"
      ? { type: f.endsWith(".mp4") ? "video" : "image", src: f }
      : f;

  useEffect(() => {
    if (idx >= 0) markSeen(idx);
  }, [idx, markSeen]);

  const next = () => {
    if (idx + 1 < files.length) setIdx(idx + 1);
    else setIdx(-1); 
  };

  const close = (e) => {
    e.stopPropagation();
    setIdx(-1);
  };

  return (
    <div
      onClick={next}
      className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50"
    >
      {obj.type === "image" ? (
        <img src={obj.src} className="max-h-[80vh] rounded" />
      ) : (
        <video src={obj.src} controls autoPlay className="max-h-[80vh] rounded" />
      )}
      <div className="flex mt-4 space-x-1 w-60">
        {files.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 ${i <= idx ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
      <button
        onClick={close}
        className="absolute top-4 right-4 text-white text-3xl leading-none"
      >
        ×
      </button>
    </div>
  );
}

export default function StatusFunc() {
  const files = myStatusData.files;
  const [idx, setIdx] = useState(-1);
  const [seen, setSeen] = useState(0);

  const markSeen = (i) => {
    setSeen((s) => (i + 1 > s ? i + 1 : s));
  };

  const open = () => {
    if (files.length === 0) return;
    if (seen >= files.length) setIdx(0); 
    else setIdx(seen); 
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Status</h2>
      <div className="flex items-center mt-2">
        <button
          onClick={open}
          className={files.length ? "" : "pointer-events-none opacity-60"}
        >
          <div className="relative">
            <img
              src={myStatusData.avatarSrc}
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
            {files.length > 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <StatusRing count={files.length} seen={seen} />
              </div>
            )}
          </div>
        </button>
      </div>
      {idx >= 0 && (
        <Viewer
          files={files}
          idx={idx}
          setIdx={setIdx}
          markSeen={markSeen}
        />
      )}
    </div>
  );
}