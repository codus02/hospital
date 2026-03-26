import { SurgeryItem, riskStyle } from '../_data';

export default function SurgeryDetailModal({
  item,
  onClose,
}: {
  item: SurgeryItem;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${riskStyle[item.risk].badge}`}
            >
              {item.risk === 'high'
                ? '고위험군'
                : item.risk === 'mid'
                  ? '중위험군'
                  : '저위험군'}
            </span>
            <h2 className="mt-2 text-lg font-bold text-gray-900">
              {item.patient}
            </h2>
            <p className="text-sm text-gray-500">{item.procedure}</p>
          </div>
          <button
            onClick={onClose}
            className="mt-1 text-xl leading-none text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="mb-4 space-y-2 rounded-xl bg-gray-50 p-4">
          {[
            { label: '연령 / 성별', value: item.detail.age },
            { label: '수술 시간', value: item.time },
            { label: '수술실', value: item.detail.or },
            { label: '마취 방법', value: item.detail.anesthesia },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{label}</span>
              <span className="text-sm font-medium text-gray-800">{value}</span>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold text-gray-500">위험 요인</p>
          <div className="flex flex-wrap gap-2">
            {item.detail.riskFactors.map((f) => (
              <span
                key={f}
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  f === '없음'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-5 rounded-xl border border-amber-100 bg-amber-50 p-3">
          <p className="mb-1 text-xs font-semibold text-amber-700">수술 메모</p>
          <p className="text-xs leading-relaxed text-amber-800">
            {item.detail.notes}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
