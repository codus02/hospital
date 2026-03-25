"use client";

import { useRouter } from "next/navigation";

const appointments = [
  { date: "2025-04-02", time: "10:30", doctor: "홍길동 원장", dept: "척추외과", status: "예약확정" },
  { date: "2025-03-18", time: "09:00", doctor: "김철수 부원장", dept: "척추외과", status: "진료완료" },
  { date: "2025-02-25", time: "14:00", doctor: "이영희 과장", dept: "통증의학과", status: "진료완료" },
];

const prescriptions = [
  { date: "2025-03-18", name: "소염진통제", doctor: "김철수 부원장", days: "7일치" },
  { date: "2025-02-25", name: "신경안정제 외 2종", doctor: "이영희 과장", days: "14일치" },
];

export default function PatientDashboard() {
  const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 대시보드 헤더 */}
      <div className="bg-blue-800 text-white px-4 py-5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-blue-200 text-xs mb-0.5">환자 포털</p>
            <h1 className="text-lg font-bold">김환자님, 안녕하세요</h1>
          </div>
          <button
            onClick={() => router.push("/")}
            className="text-sm text-blue-200 hover:text-white border border-blue-600 px-3 py-1.5 rounded-lg"
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* 다음 예약 */}
        <div className="bg-blue-700 text-white rounded-2xl p-6">
          <p className="text-blue-200 text-xs mb-1">다음 예약</p>
          <h2 className="text-xl font-bold mb-1">2025년 4월 2일 (수) 10:30</h2>
          <p className="text-blue-100 text-sm">홍길동 원장 · 척추외과</p>
          <div className="mt-4 flex gap-2">
            <button className="bg-white text-blue-700 text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-50">
              예약 확인
            </button>
            <button className="border border-blue-400 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-600">
              취소/변경 문의
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 예약 내역 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 mb-4">진료 예약 내역</h2>
            <div className="space-y-3">
              {appointments.map((a, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <div className="text-center shrink-0 w-12">
                    <div className="text-xs text-gray-500">{a.date.slice(5)}</div>
                    <div className="text-xs font-medium text-gray-700">{a.time}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{a.doctor}</p>
                    <p className="text-xs text-gray-500">{a.dept}</p>
                  </div>
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 font-medium shrink-0 ${
                      a.status === "예약확정"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 처방전 내역 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 mb-4">처방 내역</h2>
            <div className="space-y-3">
              {prescriptions.map((p, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-gray-50">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                    <span className="text-xs text-blue-600 font-medium">{p.days}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {p.date} · {p.doctor}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-amber-50 rounded-xl border border-amber-200 p-3">
              <p className="text-xs text-amber-600">
                * 시연용 데이터입니다. 실제 처방 정보는 병원에서 확인하세요.
              </p>
            </div>
          </div>
        </div>

        {/* 빠른 메뉴 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-900 mb-4">서비스</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "예약하기", icon: "📅" },
              { label: "진료기록", icon: "📋" },
              { label: "검사결과", icon: "🔬" },
              { label: "병원 연락", icon: "📞" },
            ].map((m) => (
              <button
                key={m.label}
                className="flex flex-col items-center gap-2 py-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-gray-700"
              >
                <span className="text-2xl">{m.icon}</span>
                <span className="text-xs font-medium">{m.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
