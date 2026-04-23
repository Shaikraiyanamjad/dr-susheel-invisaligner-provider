'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const [percent, setPercent] = useState(50);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    let next = ((clientX - rect.left) / rect.width) * 100;
    next = Math.max(0, Math.min(100, next));

    setPercent(next);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] eyebrow">
            Transformation Results
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[#101828]">
            See The Difference Precision Makes
          </h2>

          <p className="mt-4 text-gray-500">
            Real patient results — drag to compare before & after.
          </p>
        </div>

        {/* SLIDER */}
        <div className="flex justify-center">
          <div
            ref={containerRef}
            className="relative w-full max-w-[800px] aspect-[16/9] overflow-hidden rounded-2xl select-none touch-none"
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {/* AFTER IMAGE (BASE LAYER) */}
            <Image
              src="/after.webp"
              alt="After"
              fill
              className="object-cover"
              priority
            />

            {/* BEFORE IMAGE (CLIPPED) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${percent}%` }}
            >
              <Image
                src="/before.webp"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            {/* DIVIDER LINE */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#6DBFAA]"
              style={{
                left: `${percent}%`,
                transform: 'translateX(-50%)',
              }}
            />

            {/* DRAG HANDLE */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30"
              style={{ left: `${percent}%` }}
            >
              <div
                onPointerDown={handlePointerDown}
                className="w-11 h-11 rounded-full bg-white border-2 border-[#6DBFAA] shadow-lg flex items-center justify-center cursor-ew-resize active:scale-95 transition"
              >
                <span className="text-[#6DBFAA] text-sm font-medium">
                  ↔
                </span>
              </div>
            </div>

            {/* LABELS */}
            <div className="absolute bottom-4 left-4">
              <span className="text-white text-xs px-3 py-1 rounded-full bg-black/60 uppercase">
                Before
              </span>
            </div>

            <div className="absolute bottom-4 right-4">
              <span className="text-white text-xs px-3 py-1 rounded-full bg-[#6DBFAA]/90 uppercase">
                After
              </span>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-gray-500">
          Drag the slider to compare
        </p>
      </div>
    </section>
  );
}