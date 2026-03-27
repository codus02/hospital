'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { stats, SurgeryItem } from './_data';
import TodaySchedule from './_components/TodaySchedule';
import WeeklySurgeries from './_components/WeeklySurgeries';
import SurgeryDetailModal from './_components/SurgeryDetailModal';
import RehabModal from './_components/RehabModal';

const quickMenus = [
  { label: '환자 재활 현황', icon: '📋', action: 'rehab' as const },
  {
    label: '오늘의 식단',
    icon: '🔬',
    link: 'https://dining.postech.ac.kr/menu/',
  },
];

export default function DoctorDashboard() {
  const router = useRouter();
  const [selectedSurgery, setSelectedSurgery] = useState<SurgeryItem | null>(
    null
  );
  const [showRehab, setShowRehab] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 대시보드 헤더 */}
      <div className="bg-blue-800 px-4 py-5 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <p className="mb-0.5 text-xs text-blue-200">의료진 포털</p>
            <h1 className="text-lg font-bold">한원석 원장님, 안녕하세요</h1>
          </div>
          <button
            onClick={() => router.push('/')}
            className="rounded-lg border border-blue-600 px-3 py-1.5 text-sm text-blue-200 hover:text-white"
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* 통계 카드 */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm"
            >
              <div className="text-2xl font-bold text-blue-700">{s.value}</div>
              <div className="mt-1 text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        <TodaySchedule />

        <WeeklySurgeries onSelect={setSelectedSurgery} />

        {/* 빠른 메뉴 */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-bold text-gray-900">빠른 메뉴</h2>
          <div className="flex gap-3">
            {quickMenus.map((menu) => (
              <button
                key={menu.label}
                onClick={() => {
                  if (menu.link) window.open(menu.link, '_blank');
                  if (menu.action === 'rehab') setShowRehab(true);
                }}
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700 border border-gray-100"
              >
                <span>{menu.icon}</span>
                {menu.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showRehab && <RehabModal onClose={() => setShowRehab(false)} />}
      {selectedSurgery && (
        <SurgeryDetailModal
          item={selectedSurgery}
          onClose={() => setSelectedSurgery(null)}
        />
      )}
    </div>
  );
}
