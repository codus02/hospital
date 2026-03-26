import { remoteSchedules } from '../_data';

export default function RegisteredSessions({ ids }: { ids: number[] }) {
  if (ids.length === 0) return null;

  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-base">🏃</span>
        <h2 className="font-bold text-emerald-900">신청한 원격 운동</h2>
        <span className="ml-auto rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
          {ids.length}건
        </span>
      </div>
      <div className="space-y-2">
        {remoteSchedules
          .filter((s) => ids.includes(s.id))
          .map((s) => (
            <div
              key={s.id}
              className="flex items-center gap-3 rounded-xl bg-white px-4 py-3"
            >
              <div className="text-center">
                <p className="text-[10px] font-semibold text-gray-400">
                  {s.date.slice(5).replace('-', '/')}
                </p>
                <p className="text-sm font-extrabold text-emerald-700">
                  {s.day}
                </p>
              </div>
              <div className="h-8 w-px bg-gray-100" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-gray-900">
                  {s.title}
                </p>
                <p className="text-xs text-gray-500">
                  {s.time} · {s.instructor} {s.instructorRole}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                예약완료
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
