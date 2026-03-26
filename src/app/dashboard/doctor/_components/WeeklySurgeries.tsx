import { weekSurgeries, riskStyle, SurgeryItem } from '../_data';

export default function WeeklySurgeries({
  onSelect,
}: {
  onSelect: (item: SurgeryItem) => void;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:col-span-2">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-bold text-gray-900">이번 주 수술 일정</h2>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            고위험
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
            중위험
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            저위험
          </span>
        </div>
      </div>

      <div className="mb-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm">⚠️</span>
        <div>
          <p className="text-xs font-bold text-amber-800">고위험 환자 수술 일정 주의</p>
          <p className="mt-0.5 text-xs leading-relaxed text-amber-700">고위험 환자는 하루 두 건 이상의 수술을 권하지 않습니다.</p>
        </div>
      </div>

      {/* 데스크톱: 7열 그리드 */}
      <div className="hidden grid-cols-7 gap-1.5 md:grid">
        {weekSurgeries.map((day) => (
          <div
            key={day.date}
            className={`flex min-h-[90px] flex-col rounded-xl p-2 ${
              day.today
                ? 'border-2 border-blue-300 bg-blue-50'
                : 'border border-gray-100 bg-gray-50'
            }`}
          >
            <div className="mb-2 text-center">
              <div
                className={`text-xs font-semibold ${day.today ? 'text-blue-700' : 'text-gray-400'}`}
              >
                {day.day}
              </div>
              <div
                className={`text-xs ${day.today ? 'font-bold text-blue-500' : 'text-gray-400'}`}
              >
                {day.date}
              </div>
            </div>
            <div className="flex-1 space-y-1">
              {day.items.length >= 3 && (
                <p className="rounded-lg bg-red-50 px-1.5 py-1 text-center text-[10px] leading-tight text-red-600">
                  ⚠️ 수술 과다<br />재스케줄링 권장
                </p>
              )}
              {day.items.length === 0 ? (
                <p className="mt-2 text-center text-xs text-gray-200">—</p>
              ) : (
                day.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => onSelect(item)}
                    className={`w-full rounded-lg border-l-2 px-1.5 py-1 text-left transition-opacity hover:opacity-80 ${
                      item.risk === 'high'
                        ? 'border-red-500 bg-red-50'
                        : item.risk === 'mid'
                          ? 'border-amber-400 bg-amber-50'
                          : 'border-emerald-400 bg-emerald-50'
                    }`}
                  >
                    <p className="text-xs leading-tight font-semibold text-gray-700">
                      {item.patient}
                    </p>
                    <p className="text-xs leading-tight text-gray-400">
                      {item.time}
                    </p>
                  </button>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 모바일: 세로 리스트 */}
      <div className="space-y-2 md:hidden">
        {weekSurgeries.map((day) => (
          <div
            key={day.date}
            className={`rounded-xl border px-4 py-3 ${
              day.today
                ? 'border-2 border-blue-300 bg-blue-50'
                : 'border-gray-100 bg-gray-50'
            }`}
          >
            <div className="mb-2 flex items-center gap-2">
              <span
                className={`w-6 text-sm font-bold ${day.today ? 'text-blue-700' : 'text-gray-500'}`}
              >
                {day.day}
              </span>
              <span
                className={`text-xs ${day.today ? 'font-semibold text-blue-500' : 'text-gray-400'}`}
              >
                {day.date}
              </span>
              {day.today && (
                <span className="rounded-full bg-blue-600 px-1.5 py-0.5 text-xs font-medium text-white">
                  오늘
                </span>
              )}
              {day.items.length === 0 && (
                <span className="ml-auto text-xs text-gray-300">수술 없음</span>
              )}
            </div>
            {day.items.length >= 3 && (
              <p className="mb-1.5 rounded-lg bg-red-50 px-3 py-1.5 text-xs text-red-600">
                ⚠️ 하루에 수술이 너무 많습니다. 재스케줄링을 권장합니다.
              </p>
            )}
            {day.items.length > 0 && (
              <div className="space-y-1.5">
                {day.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => onSelect(item)}
                    className={`flex w-full items-center gap-3 rounded-lg border-l-2 px-3 py-2 text-left transition-opacity hover:opacity-80 ${
                      item.risk === 'high'
                        ? 'border-red-500 bg-red-50'
                        : item.risk === 'mid'
                          ? 'border-amber-400 bg-amber-50'
                          : 'border-emerald-400 bg-emerald-50'
                    }`}
                  >
                    <span className="w-10 shrink-0 font-mono text-xs text-gray-400">
                      {item.time}
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      {item.patient}
                    </span>
                    <span className="flex-1 truncate text-xs text-gray-500">
                      {item.procedure}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${riskStyle[item.risk].badge}`}
                    >
                      {item.risk === 'high'
                        ? '고위험'
                        : item.risk === 'mid'
                          ? '중위험'
                          : '저위험'}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
