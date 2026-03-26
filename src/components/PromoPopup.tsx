'use client';

import { useState } from 'react';
import Image from 'next/image';

const PROMO_KEY = 'promoPopupDismissed';
const IMAGE_KEY = 'imagePopupDismissed';

function PopupCard({
  src,
  alt,
  sessionKey,
  onClose,
  className = '',
}: {
  src: string;
  alt: string;
  sessionKey: string;
  onClose: () => void;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-white shadow-2xl ${className}`}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-sm text-white transition-colors hover:bg-black/60"
        aria-label="닫기"
      >
        ✕
      </button>
      <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
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
  const [promoOpen, setPromoOpen] = useState(() => {
    if (typeof window === 'undefined') return true;
    return sessionStorage.getItem(PROMO_KEY) !== '1';
  });
  const [imageOpen, setImageOpen] = useState(() => {
    if (typeof window === 'undefined') return true;
    return sessionStorage.getItem(IMAGE_KEY) !== '1';
  });

  if (!promoOpen && !imageOpen) return null;

  const both = promoOpen && imageOpen;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/55"
        onClick={() => {
          setPromoOpen(false);
          setImageOpen(false);
        }}
      />

      {both ? (
        /* 두 팝업 겹침 배치 — 가로 190/250px, 세로: 카드높이 + 16px 오프셋 */
        <div
          className="relative w-[198px] sm:w-[258px]"
          style={{ height: 'calc(190px * 4 / 3 + 58px + 16px)' }}
        >
          {/* summer-promo — 뒤, 16px 아래 + 8px 오른쪽 */}
          <div className="absolute top-10 left-15 z-10 w-[190px] opacity-90 sm:w-[250px]">
            <PopupCard
              src="/summer-promo.png"
              alt="여름 할인 프로모션"
              sessionKey={PROMO_KEY}
              onClose={() => setPromoOpen(false)}
            />
          </div>
          {/* maunjaro — 앞, 16px 위 (top:0) */}
          <div className="absolute top-0 left-0 z-20 w-[190px] sm:w-[250px]">
            <PopupCard
              src="/pop-up.png"
              alt="마운자로·위고비 처방 안내"
              sessionKey={IMAGE_KEY}
              onClose={() => setImageOpen(false)}
            />
          </div>
        </div>
      ) : (
        /* 하나만 남은 경우 — 단독 표시 */
        <div className="relative w-[230px] sm:w-[280px]">
          {promoOpen && (
            <PopupCard
              src="/summer-promo.png"
              alt="여름 할인 프로모션"
              sessionKey={PROMO_KEY}
              onClose={() => setPromoOpen(false)}
            />
          )}
          {imageOpen && (
            <PopupCard
              src="/pop-up.png"
              alt="마운자로·위고비 처방 안내"
              sessionKey={IMAGE_KEY}
              onClose={() => setImageOpen(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
