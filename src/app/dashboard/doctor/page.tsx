'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const todaySchedule = [
  { time: '09:30', patient: '이○○', type: '재진', status: '진료중' },
  { time: '10:20', patient: '박○○', type: '재진', status: '대기' },
  { time: '10:40', patient: '최○○', type: '초진', status: '대기' },
  { time: '11:20', patient: '정○○', type: '재진', status: '대기' },
  { time: '16:20', patient: '박○○', type: '초진', status: '예약' },
];

type Risk = 'high' | 'mid' | 'low';
interface SurgeryItem {
  time: string;
  patient: string;
  procedure: string;
  risk: Risk;
  detail: {
    age: string;
    or: string;
    anesthesia: string;
    riskFactors: string[];
    notes: string;
  };
}

// 위험군: 'high' = 고위험군(빨강), 'mid' = 중위험군(주황), 'low' = 저위험군(초록)
const weekSurgeries: {
  date: string;
  day: string;
  today?: boolean;
  items: SurgeryItem[];
}[] = [
  {
    date: '3/23',
    day: '월',
    items: [],
  },
  {
    date: '3/24',
    day: '화',
    items: [
      {
        time: '10:00',
        patient: '박○○',
        procedure: '척추관협착증 수술',
        risk: 'low',
        detail: {
          age: '48세 (남)',
          or: '수술실 1호',
          anesthesia: '척추마취',
          riskFactors: ['흡연'],
          notes: '초발. 보존적 치료 3개월 후 보행 장애 악화로 수술 결정.',
        },
      },
    ],
  },
  {
    date: '3/25',
    day: '수',
    today: true,
    items: [
      {
        time: '09:30',
        patient: '최○○',
        procedure: '요추 내시경 감압술',
        risk: 'high',
        detail: {
          age: '68세 (여)',
          or: '수술실 1호',
          anesthesia: '전신마취',
          riskFactors: ['고혈압', '심혈관 질환', '고령'],
          notes:
            '재발 케이스. 심혈관내과 협진 완료. 항혈소판제 5일 전 중단 확인.',
        },
      },
      {
        time: '13:00',
        patient: '정○○',
        procedure: '척추측만증 교정술',
        risk: 'mid',
        detail: {
          age: '19세 (남)',
          or: '수술실 2호',
          anesthesia: '전신마취',
          riskFactors: ['없음'],
          notes:
            'Cobb 각도 42도. 성장 완료 후 수술 결정. 수혈 동의서 확인 완료.',
        },
      },
    ],
  },
  { date: '3/26', day: '목', items: [] },
  {
    date: '3/27',
    day: '금',
    items: [
      {
        time: '11:00',
        patient: '강○○',
        procedure: '요추 디스크 수술',
        risk: 'low',
        detail: {
          age: '35세 (남)',
          or: '수술실 1호',
          anesthesia: '척추마취',
          riskFactors: ['없음'],
          notes: '초발 급성 추간판탈출증 (L4-L5). 보존적 치료 6주 후 수술.',
        },
      },
    ],
  },
  {
    date: '3/28',
    day: '토',
    items: [
      {
        time: '09:00',
        patient: '김○○',
        procedure: '요추 내시경 감압술',
        risk: 'high',
        detail: {
          age: '72세 (남)',
          or: '수술실 1호',
          anesthesia: '전신마취',
          riskFactors: ['고혈압', '당뇨', '흡연'],
          notes:
            '재발 케이스 (2022년 1차 수술). 항고혈압제 복용 중, 마취과 협진 완료.',
        },
      },
      {
        time: '14:00',
        patient: '이○○',
        procedure: '경추 디스크 제거술',
        risk: 'mid',
        detail: {
          age: '55세 (여)',
          or: '수술실 2호',
          anesthesia: '전신마취',
          riskFactors: ['심혈관 질환', '비만'],
          notes:
            '6개월 비수술 치료 후 호전 없어 수술 결정. 심혈관내과 협진 완료.',
        },
      },
    ],
  },
  { date: '3/29', day: '일', items: [] },
];

const riskStyle = {
  high: { bar: 'bg-red-500', badge: 'bg-red-100 text-red-700' },
  mid: { bar: 'bg-amber-400', badge: 'bg-amber-100 text-amber-700' },
  low: { bar: 'bg-emerald-400', badge: 'bg-emerald-100 text-emerald-700' },
};

type RehabStatus = 'good' | 'warn' | 'bad';
interface RehabVisit {
  date: string;
  done: boolean;
}
interface RehabPatient {
  name: string;
  age: string;
  diagnosis: string;
  prescribed: number;
  completed: number;
  lastVisit: string;
  status: RehabStatus;
  visits: RehabVisit[];
  memo: string;
}

const rehabPatients: RehabPatient[] = [
  {
    name: '이○○',
    age: '45세 (남)',
    diagnosis: '요추 추간판탈출증 수술 후 재활',
    prescribed: 12,
    completed: 11,
    lastVisit: '2026-03-25',
    status: 'good',
    visits: [
      { date: '03/04', done: true },
      { date: '03/11', done: true },
      { date: '03/18', done: true },
      { date: '03/25', done: true },
    ],
    memo: '재활 적극적으로 임하고 있음. 증상 호전 중.',
  },
  {
    name: '박○○',
    age: '52세 (여)',
    diagnosis: '척추관협착증 수술 후 재활',
    prescribed: 10,
    completed: 7,
    lastVisit: '2026-03-15',
    status: 'warn',
    visits: [
      { date: '03/04', done: true },
      { date: '03/11', done: false },
      { date: '03/18', done: true },
      { date: '03/25', done: false },
    ],
    memo: '불규칙한 방문. 직장 스케줄 이유로 2회 결석.',
  },
  {
    name: '최○○',
    age: '68세 (여)',
    diagnosis: '요추 내시경 감압술 후 재활',
    prescribed: 16,
    completed: 4,
    lastVisit: '2026-03-01',
    status: 'bad',
    visits: [
      { date: '03/04', done: false },
      { date: '03/11', done: false },
      { date: '03/18', done: false },
      { date: '03/25', done: false },
    ],
    memo: '최근 3주간 미방문. 보호자 연락 권고.',
  },
  {
    name: '정○○',
    age: '19세 (남)',
    diagnosis: '척추측만증 교정술 후 재활',
    prescribed: 20,
    completed: 8,
    lastVisit: '2026-03-22',
    status: 'warn',
    visits: [
      { date: '03/04', done: true },
      { date: '03/11', done: false },
      { date: '03/18', done: true },
      { date: '03/25', done: false },
    ],
    memo: '학업 일정으로 간헐적 결석. 방문 시 성실히 임함.',
  },
  {
    name: '강○○',
    age: '35세 (남)',
    diagnosis: '요추 디스크 수술 후 재활',
    prescribed: 8,
    completed: 8,
    lastVisit: '2026-03-24',
    status: 'good',
    visits: [
      { date: '03/04', done: true },
      { date: '03/11', done: true },
      { date: '03/18', done: true },
      { date: '03/25', done: true },
    ],
    memo: '전 회차 출석. 회복 경과 우수.',
  },
  {
    name: '김○○',
    age: '72세 (남)',
    diagnosis: '만성 요통 물리치료',
    prescribed: 14,
    completed: 2,
    lastVisit: '2026-02-20',
    status: 'bad',
    visits: [
      { date: '03/04', done: false },
      { date: '03/11', done: false },
      { date: '03/18', done: false },
      { date: '03/25', done: false },
    ],
    memo: '장기 미방문. 이동 불편 사유. 직접 연락 필요.',
  },
];

const rehabStyle: Record<
  RehabStatus,
  { badge: string; bar: string; label: string }
> = {
  good: {
    badge: 'bg-emerald-100 text-emerald-700',
    bar: 'bg-emerald-400',
    label: '양호',
  },
  warn: {
    badge: 'bg-amber-100 text-amber-700',
    bar: 'bg-amber-400',
    label: '주의',
  },
  bad: { badge: 'bg-red-100 text-red-600', bar: 'bg-red-500', label: '불량' },
};

const stats = [
  { label: '오늘 예약', value: '4명' },
  { label: '대기 환자', value: '3명' },
  { label: '이번 주', value: '19명' },
  { label: '이번 달', value: '37명' },
];

export default function DoctorDashboard() {
  const router = useRouter();
  const [selectedSurgery, setSelectedSurgery] = useState<SurgeryItem | null>(
    null
  );
  const [showRehab, setShowRehab] = useState(false);
  const [selectedRehab, setSelectedRehab] = useState<RehabPatient | null>(null);

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

        <div className="grid gap-6 md:grid-cols-3">
          {/* 오늘의 진료 일정 */}
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

          {/* 수술 일정 (주간) */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
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
                    {day.items.length === 0 ? (
                      <p className="mt-2 text-center text-xs text-gray-200">
                        —
                      </p>
                    ) : (
                      day.items.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedSurgery(item)}
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
                      <span className="ml-auto text-xs text-gray-300">
                        수술 없음
                      </span>
                    )}
                  </div>
                  {day.items.length > 0 && (
                    <div className="space-y-1.5">
                      {day.items.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedSurgery(item)}
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

          {/* 빠른 메뉴 */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-4 font-bold text-gray-900">빠른 메뉴</h2>
              <div className="space-y-2">
                {[
                  {
                    label: '환자 재활 현황',
                    icon: '📋',
                    action: () => setShowRehab(true),
                  },
                  {
                    label: '오늘의 식단',
                    icon: '🔬',
                    link: 'https://dining.postech.ac.kr/menu/',
                  },
                  // { label: '예약 관리?? 여기도 뭐넣지', icon: '📅' },
                ].map((menu) => (
                  <button
                    key={menu.label}
                    onClick={() => {
                      if (menu.link) window.open(menu.link, '_blank');
                      if (menu.action) menu.action();
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span>{menu.icon}</span>
                    {menu.label}
                    <span className="ml-auto text-gray-300">›</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 환자 재활 현황 모달 */}
      {showRehab && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
          <div className="flex max-h-[92vh] w-full flex-col rounded-t-3xl bg-white shadow-xl sm:max-w-lg sm:rounded-2xl">
            <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 pt-5 pb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">환자 재활 현황</h2>
                <p className="mt-0.5 text-xs text-gray-400">담당 환자 재활 치료 방문 현황</p>
              </div>
              <button
                onClick={() => { setShowRehab(false); setSelectedRehab(null); }}
                className="flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {selectedRehab ? (
              <div className="flex flex-col overflow-y-auto">
                <button
                  onClick={() => setSelectedRehab(null)}
                  className="flex items-center gap-1 px-6 pt-4 pb-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  ← 목록으로
                </button>
                <div className="px-6 pb-6">
                  <div className={`mb-4 rounded-2xl border-2 p-5 ${
                    selectedRehab.status === 'bad' ? 'border-red-200 bg-red-50' :
                    selectedRehab.status === 'warn' ? 'border-amber-200 bg-amber-50' :
                    'border-emerald-200 bg-emerald-50'
                  }`}>
                    <div className="mb-2 flex items-center gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${rehabStyle[selectedRehab.status].badge}`}>
                        {rehabStyle[selectedRehab.status].label}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedRehab.name}</h3>
                    <p className="mt-0.5 text-sm text-gray-500">{selectedRehab.age} · {selectedRehab.diagnosis}</p>
                  </div>

                  {/* 출석률 */}
                  <div className="mb-4 rounded-xl border border-gray-100 bg-white p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs font-semibold text-gray-500">재활 출석률</p>
                      <p className="text-sm font-bold text-gray-800">
                        {selectedRehab.completed} / {selectedRehab.prescribed}회
                        <span className="ml-1 text-xs font-normal text-gray-400">
                          ({Math.round(selectedRehab.completed / selectedRehab.prescribed * 100)}%)
                        </span>
                      </p>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${rehabStyle[selectedRehab.status].bar}`}
                        style={{ width: `${Math.round(selectedRehab.completed / selectedRehab.prescribed * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* 최근 4주 출석 */}
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold text-gray-500">최근 4주 방문 기록</p>
                    <div className="flex gap-2">
                      {selectedRehab.visits.map((v) => (
                        <div key={v.date} className="flex flex-1 flex-col items-center gap-1">
                          <div className={`flex h-9 w-full items-center justify-center rounded-lg text-sm font-bold ${
                            v.done ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-500'
                          }`}>
                            {v.done ? '✓' : '✕'}
                          </div>
                          <p className="text-[10px] text-gray-400">{v.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 메모 */}
                  <div className="mb-4 flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <div>
                      <p className="mb-0.5 text-xs font-semibold text-gray-400">최근 방문일</p>
                      <p className="text-sm font-medium text-gray-800">{selectedRehab.lastVisit}</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
                    <p className="mb-1 text-xs font-semibold text-amber-700">담당의 메모</p>
                    <p className="text-xs leading-relaxed text-amber-800">{selectedRehab.memo}</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* 요약 배지 */}
                <div className="flex shrink-0 gap-3 px-6 pt-4 pb-2">
                  {(['good', 'warn', 'bad'] as RehabStatus[]).map((s) => {
                    const count = rehabPatients.filter((p) => p.status === s).length;
                    return (
                      <span key={s} className={`rounded-full px-3 py-1 text-xs font-semibold ${rehabStyle[s].badge}`}>
                        {rehabStyle[s].label} {count}명
                      </span>
                    );
                  })}
                </div>

                <div className="space-y-2 overflow-y-auto px-6 py-2">
                  {rehabPatients.map((p) => {
                    const rate = Math.round(p.completed / p.prescribed * 100);
                    return (
                      <button
                        key={p.name}
                        onClick={() => setSelectedRehab(p)}
                        className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 text-left transition-all hover:border-blue-200 hover:bg-blue-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="mb-1 flex items-center gap-2">
                              <p className="font-bold text-gray-900">{p.name}</p>
                              <span className="text-xs text-gray-400">{p.age}</span>
                              <span className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-semibold ${rehabStyle[p.status].badge}`}>
                                {rehabStyle[p.status].label}
                              </span>
                            </div>
                            <p className="mb-2 text-xs text-gray-500 truncate">{p.diagnosis}</p>
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                                <div
                                  className={`h-full rounded-full ${rehabStyle[p.status].bar}`}
                                  style={{ width: `${rate}%` }}
                                />
                              </div>
                              <span className={`shrink-0 text-xs font-semibold ${
                                p.status === 'bad' ? 'text-red-500' :
                                p.status === 'warn' ? 'text-amber-600' : 'text-emerald-600'
                              }`}>
                                {rate}%
                              </span>
                            </div>
                            <p className="mt-1 text-[10px] text-gray-400">
                              {p.completed}/{p.prescribed}회 완료 · 마지막 방문 {p.lastVisit}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="shrink-0 px-6 pt-2 pb-5">
                  <button
                    onClick={() => setShowRehab(false)}
                    className="w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                  >
                    닫기
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 수술 상세 모달 */}
      {selectedSurgery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            {/* 헤더 */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${riskStyle[selectedSurgery.risk].badge}`}
                >
                  {selectedSurgery.risk === 'high'
                    ? '고위험군'
                    : selectedSurgery.risk === 'mid'
                      ? '중위험군'
                      : '저위험군'}
                </span>
                <h2 className="mt-2 text-lg font-bold text-gray-900">
                  {selectedSurgery.patient}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedSurgery.procedure}
                </p>
              </div>
              <button
                onClick={() => setSelectedSurgery(null)}
                className="mt-1 text-xl leading-none text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* 기본 정보 */}
            <div className="mb-4 space-y-2 rounded-xl bg-gray-50 p-4">
              {[
                { label: '연령 / 성별', value: selectedSurgery.detail.age },
                { label: '수술 시간', value: selectedSurgery.time },
                { label: '수술실', value: selectedSurgery.detail.or },
                {
                  label: '마취 방법',
                  value: selectedSurgery.detail.anesthesia,
                },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{label}</span>
                  <span className="text-sm font-medium text-gray-800">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* 위험 요인 */}
            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold text-gray-500">
                위험 요인
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedSurgery.detail.riskFactors.map((f) => (
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

            {/* 비고 */}
            <div className="mb-5 rounded-xl border border-amber-100 bg-amber-50 p-3">
              <p className="mb-1 text-xs font-semibold text-amber-700">
                수술 메모
              </p>
              <p className="text-xs leading-relaxed text-amber-800">
                {selectedSurgery.detail.notes}
              </p>
            </div>

            <button
              onClick={() => setSelectedSurgery(null)}
              className="w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
