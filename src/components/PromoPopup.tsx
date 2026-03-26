'use client';

import { useState } from 'react';
import Image from 'next/image';

// 원본 비율 유지, 200px 너비 기준으로 높이 계산
const POPUPS = [
  { src: '/pop-up.png',       alt: '마운자로·위고비 처방 안내', sessionKey: 'popup_popUp',      w: 200, h: 289 },
  { src: '/smoke-clinic.png', alt: '금연 클리닉',               sessionKey: 'popup_smoke',      w: 200, h: 187 },
  { src: '/student-promo.png',alt: '학생 프로모션',             sessionKey: 'popup_student',    w: 200, h: 271 },
  { src: '/summer-promo.png', alt: '여름 할인 프로모션',        sessionKey: 'popup_summer',     w: 200, h: 246 },
  { src: '/worker-promo.png', alt: '직장인 프로모션',           sessionKey: 'popup_worker',     w: 200, h: 283 },
] as const;

// 각 카드 배치 순서 (index 0 = 맨 뒤, index 4 = 맨 앞)
// offset: 12px씩 앞으로 이동
const OFFSET = 12;
const MAX_CARD_H = 289 + 42; // pop-up 이미지 높이 + footer 높이
const CONTAINER_W = 200 + OFFSET * (POPUPS.length - 1); // 248
const CONTAINER_H = MAX_CARD_H + OFFSET * (POPUPS.length - 1); // 379

function PopupCard({
  src,
  alt,
  sessionKey,
  displayW,
  displayH,
  onClose,
  style,
}: {
  src: string;
  alt: string;
  sessionKey: string;
  displayW: number;
  displayH: number;
  onClose: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <div className="absolute bg-white shadow-2xl" style={{ width: displayW, ...style }}>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-sm text-white transition-colors hover:bg-black/60"
        aria-label="닫기"
      >
        ✕
      </button>
      <Image src={src} alt={alt} width={displayW} height={displayH} style={{ display: 'block', width: '100%', height: 'auto' }} />
      <div className="px-3 py-2.5">
        <button
          onClick={() => {
            sessionStorage.setItem(sessionKey, '1');
            onClose();
          }}
          className="w-full py-0.5 text-xs text-gray-400 transition-colors hover:text-gray-600"
        >
          오늘 하루 동안 보지 않기
        </button>
      </div>
    </div>
  );
}

export default function PromoPopup() {
  const [open, setOpen] = useState<boolean[]>(() =>
    POPUPS.map((p) => {
      if (typeof window === 'undefined') return true;
      return sessionStorage.getItem(p.sessionKey) !== '1';
    })
  );

  const anyOpen = open.some(Boolean);
  if (!anyOpen) return null;

  const close = (i: number) =>
    setOpen((prev) => prev.map((v, idx) => (idx === i ? false : v)));

  const closeAll = () => setOpen(POPUPS.map(() => false));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/55" onClick={closeAll} />
      <div className="relative" style={{ width: CONTAINER_W, height: CONTAINER_H }}>
        {POPUPS.map((p, i) => {
          if (!open[i]) return null;
          // 뒤에서 앞 순서: i=0이 맨 뒤, i=4가 맨 앞
          const reverseI = POPUPS.length - 1 - i;
          return (
            <PopupCard
              key={p.src}
              src={p.src}
              alt={p.alt}
              sessionKey={p.sessionKey}
              displayW={p.w}
              displayH={p.h}
              onClose={() => close(i)}
              style={{
                top: reverseI * OFFSET,
                left: reverseI * OFFSET,
                zIndex: i + 1,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
