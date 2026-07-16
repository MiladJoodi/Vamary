"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-xl bg-surface-2 select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label="Before and after comparison"
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, 560px"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 560px"
        />
      </div>
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-[10px] font-medium text-ink shadow-md">
          ◂▸
        </div>
      </div>
      <span className="absolute top-3 left-3 rounded-md bg-ink/70 px-2 py-0.5 text-[10px] text-white">
        Before
      </span>
      <span className="absolute top-3 right-3 rounded-md bg-ink/70 px-2 py-0.5 text-[10px] text-white">
        After
      </span>
    </div>
  );
}
