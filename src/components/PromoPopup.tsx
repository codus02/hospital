"use client";

import { useState } from "react";

export default function PromoPopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpen(false)}
      />

      {/* 팝업 카드 */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
        {/* 닫기 버튼 */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 text-sm transition-colors z-10"
          aria-label="닫기"
        >
          ✕
        </button>

        {/* 상단 배너 색상 영역 */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-500 px-6 pt-8 pb-6 text-white text-center">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-1">August Special</p>
          <h2 className="text-2xl font-extrabold mb-1">8월 특별 할인</h2>
          <p className="text-blue-100 text-sm">프로모션 안내</p>
        </div>

        {/* 내용 */}
        <div className="px-6 py-5">
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold shrink-0">•</span>
              <span><strong>도수치료</strong> 10% 할인 (8월 한 달간)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold shrink-0">•</span>
              <span><strong>척추 정밀검사(MRI)</strong> 패키지 특가</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold shrink-0">•</span>
              <span><strong>초진 상담</strong> 무료 (사전 예약 필수)</span>
            </li>
          </ul>

          <p className="mt-4 text-xs text-gray-400 text-center">
            * 자세한 내용은 전화 또는 방문 문의 바랍니다.
          </p>

          <button
            onClick={() => setOpen(false)}
            className="mt-4 w-full bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition-colors text-sm"
          >
            확인했습니다
          </button>
        </div>
      </div>
    </div>
  );
}
