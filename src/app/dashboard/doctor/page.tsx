"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const todaySchedule = [
  { time: "09:00", patient: "김○○", type: "초진", status: "대기" },
  { time: "09:30", patient: "이○○", type: "재진", status: "진료중" },
  { time: "10:00", patient: "박○○", type: "재진", status: "대기" },
  { time: "10:30", patient: "최○○", type: "초진", status: "대기" },
  { time: "11:00", patient: "정○○", type: "재진", status: "대기" },
];

const stats = [
  { label: "오늘 예약", value: "12명" },
  { label: "대기 환자", value: "4명" },
  { label: "이번 주", value: "47명" },
  { label: "이번 달", value: "183명" },
];

export default function DoctorDashboard() {
  const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 대시보드 헤더 */}
      <div className="bg-blue-800 text-white px-4 py-5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-blue-200 text-xs mb-0.5">의료진 포털</p>
            <h1 className="text-lg font-bold">홍길동 원장님, 안녕하세요</h1>
          </div>
          <button
            onClick={() => router.push("/")}
            className="text-sm text-blue-200 hover:text-white border border-blue-600 px-3 py-1.5 rounded-lg"
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* 통계 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="text-2xl font-bold text-blue-700">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 오늘의 진료 일정 */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 mb-4">오늘의 진료 일정</h2>
            <div className="space-y-3">
              {todaySchedule.map((item) => (
                <div
                  key={item.time}
                  className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  <span className="text-sm font-mono text-gray-500 w-12 shrink-0">{item.time}</span>
                  <span className="font-semibold text-gray-900 flex-1">{item.patient}</span>
                  <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-0.5">{item.type}</span>
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 font-medium ${
                      item.status === "진료중"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 빠른 메뉴 */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">빠른 메뉴</h2>
              <div className="space-y-2">
                {[
                  { label: "환자 조회", icon: "🔍" },
                  { label: "처방전 작성", icon: "📋" },
                  { label: "검사 결과 확인", icon: "🔬" },
                  { label: "예약 관리", icon: "📅" },
                ].map((menu) => (
                  <button
                    key={menu.label}
                    className="w-full flex items-center gap-3 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-xl px-3 py-2.5 transition-colors"
                  >
                    <span>{menu.icon}</span>
                    {menu.label}
                    <span className="ml-auto text-gray-300">›</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1">개발 안내</p>
              <p className="text-xs text-amber-600">
                현재 시연용 화면입니다.<br />
                실제 기능은 백엔드 연동 후 구현 예정입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
