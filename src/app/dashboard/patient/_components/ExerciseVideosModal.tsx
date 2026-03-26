import { exerciseVideos, categoryColors } from '../_data';

export default function ExerciseVideosModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
      <div className="flex max-h-[90vh] w-full flex-col rounded-t-3xl bg-white shadow-xl sm:max-w-lg sm:rounded-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 pt-5 pb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              척추 건강 운동영상
            </h2>
            <p className="mt-0.5 text-xs text-gray-400">
              P 병원 의사들이 엄선한 스트레칭 · 재활 운동
            </p>
            <p className="mt-0.5 text-xs text-gray-400">매달 초 업데이트</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4 overflow-y-auto px-6 py-4">
          {exerciseVideos.map((v, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div
                className={`h-18 w-28 shrink-0 rounded-xl bg-gradient-to-br ${v.thumb} relative flex items-center justify-center overflow-hidden`}
                style={{ height: '4.5rem' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                  <div className="ml-1 h-0 w-0 border-t-[7px] border-b-[7px] border-l-[14px] border-t-transparent border-b-transparent border-l-white" />
                </div>
                <span className="absolute right-1.5 bottom-1 rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  {v.duration}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryColors[v.category]}`}
                >
                  {v.category}
                </span>
                <p className="mt-1 text-sm leading-tight font-bold text-gray-900">
                  {v.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="shrink-0 px-6 pt-2 pb-5">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
