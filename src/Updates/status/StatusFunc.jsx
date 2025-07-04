import { useState } from "react";
import { myStatusData } from "./myStatusData";

function StatusRing({ count, size = 56, stroke = 4, color = "#25D366" }) {
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  if (count <= 0) return null;
  if (count === 1)
    return (
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
    );
  const gap = stroke * 2;
  const seg = (C - gap * count) / count;
  const dash = Array(count)
    .fill(`${seg} ${gap}`)
    .join(" ");
  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={dash}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

function Viewer({ files, idx, setIdx }) {
  const f = files[idx];
  const obj =
    typeof f === "string"
      ? { type: f.endsWith(".mp4") ? "video" : "image", src: f }
      : f;
  const next = () => setIdx((i) => (i + 1) % files.length);
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
  const [idx, setIdx] = useState(-1);
  const files = myStatusData.files;
  const hasStatus = files.length > 0;
  const open = () => hasStatus && setIdx(0);
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Status</h2>
      <div className="flex items-center mt-2">
        <button
          onClick={open}
          className={`${hasStatus ? "" : "pointer-events-none opacity-60"}`}
        >
          <div className="relative">
            <img
              src={myStatusData.avatarSrc}
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
            {hasStatus && (
              <div className="absolute inset-0 flex items-center justify-center">
                <StatusRing count={files.length} />
              </div>
            )}
          </div>
        </button>
      </div>
      {idx >= 0 && <Viewer files={files} idx={idx} setIdx={setIdx} />}
    </div>
  );
}