import { todaySchedule } from '../_data';

export default function TodaySchedule() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:col-span-2">
      <h2 className="mb-4 font-bold text-gray-900">오늘의 진료 일정</h2>
      <div className="space-y-3">
        {todaySchedule.map((item) => (
          <div
            key={item.time}
            className="flex items-center gap-4 rounded-xl bg-gray-50 p-3 transition-colors hover:bg-blue-50"
          >
            <span className="w-12 shrink-0 font-mono text-sm text-gray-500">
              {item.time}
            </span>
            <span className="flex-1 font-semibold text-gray-900">
              {item.patient}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                item.type === '초진'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {item.type}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                item.status === '진료중'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
