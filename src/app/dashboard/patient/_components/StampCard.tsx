import { TOTAL_STAMPS, STAMPED } from '../_data';

export default function StampCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="font-bold text-gray-900">방문 도장 카드</h2>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
          {STAMPED} / {TOTAL_STAMPS}
        </span>
      </div>
      <p className="mb-5 text-xs text-gray-400">
        10개 모으면 특별 선물을 드립니다 🎁
      </p>

      <div className="mb-5 grid grid-cols-5 gap-3">
        {Array.from({ length: TOTAL_STAMPS }).map((_, i) => {
          const stamped = i < STAMPED;
          return (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-xl border-2 transition-all ${
                stamped
                  ? 'border-red-300 bg-red-50 shadow-sm'
                  : 'border-dashed border-gray-300 bg-gray-50'
              }`}
            >
              {stamped ? (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="text-red-500 opacity-85"
                >
                  <circle
                    cx="15"
                    cy="15"
                    r="13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="15"
                    cy="15"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="15"
                    y1="8"
                    x2="15"
                    y2="22"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="15"
                    x2="22"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="15" cy="15" r="2" fill="currentColor" />
                </svg>
              ) : (
                <span className="text-xs font-medium text-gray-300">
                  {i + 1}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="14"
              height="14"
              rx="2"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
            <rect x="5" y="5" width="8" height="8" rx="1" fill="#1d4ed8" />
            <rect
              x="20"
              y="2"
              width="14"
              height="14"
              rx="2"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
            <rect x="23" y="5" width="8" height="8" rx="1" fill="#1d4ed8" />
            <rect
              x="2"
              y="20"
              width="14"
              height="14"
              rx="2"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
            <rect x="5" y="23" width="8" height="8" rx="1" fill="#1d4ed8" />
            <rect x="20" y="20" width="4" height="4" fill="#1d4ed8" />
            <rect x="26" y="20" width="4" height="4" fill="#1d4ed8" />
            <rect x="20" y="26" width="4" height="4" fill="#1d4ed8" />
            <rect x="26" y="26" width="4" height="4" fill="#1d4ed8" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">
            병원 방문 시 도장 적립
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
            접수 데스크에서 QR코드를 인식하면
            <br />
            방문 도장이 자동으로 적립됩니다.
          </p>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-gray-400">
        도장 10개 완성 시 원무과에서 상품을 수령하세요
      </p>
    </div>
  );
}
