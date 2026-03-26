import { appointments } from '../_data';

export default function MedicalRecordsModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const pastAppts = appointments.filter((a) => a.status !== '예약확정');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">지난 진료기록</h2>
          <button
            onClick={onClose}
            className="text-xl leading-none text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4">
          {pastAppts.map((a, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 p-4">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-800">{a.date}</p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {a.doctor} · {a.dept} · {a.time}
                  </p>
                </div>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                  {a.status}
                </span>
              </div>
              {idx === 0 && (
                <div className="space-y-2">
                  <div>
                    <p className="mb-0.5 text-xs font-semibold text-gray-500">
                      진단명
                    </p>
                    <p className="text-sm text-gray-800">
                      요추 추간판탈출증 (L4-L5)
                    </p>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold text-gray-500">
                      처방
                    </p>
                    <p className="text-sm text-gray-800">
                      소염진통제 7일 · 물리치료 6회
                    </p>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold text-gray-500">
                      처방약
                    </p>
                    <p className="text-sm text-gray-800">소염진통제 (7일치)</p>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold text-gray-500">
                      의사 메모
                    </p>
                    <p className="text-sm text-gray-800">
                      2주 후 경과 관찰 재진 권유. 무거운 물건 들기 자제.
                    </p>
                  </div>
                </div>
              )}
              {idx === 1 && (
                <div className="space-y-2">
                  <div>
                    <p className="mb-0.5 text-xs font-semibold text-gray-500">
                      진단명
                    </p>
                    <p className="text-sm text-gray-800">
                      만성 요통 (근육 긴장성)
                    </p>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold text-gray-500">
                      처방
                    </p>
                    <p className="text-sm text-gray-800">
                      온열치료 4회 · 도수치료 2회
                    </p>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold text-gray-500">
                      처방약
                    </p>
                    <p className="text-sm text-gray-800">
                      신경안정제 · 근이완제 · 위장약 (14일치)
                    </p>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold text-gray-500">
                      의사 메모
                    </p>
                    <p className="text-sm text-gray-800">
                      일상적인 스트레칭 및 코어 근력 운동 권유. 장시간 앉은
                      자세 주의.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
