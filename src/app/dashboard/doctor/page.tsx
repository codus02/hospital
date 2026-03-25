'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const todaySchedule = [
  { time: '09:30', patient: '이○○', type: '재진', status: '진료중' },
  { time: '10:20', patient: '박○○', type: '재진', status: '대기' },
  { time: '10:40', patient: '최○○', type: '초진', status: '대기' },
  { time: '11:20', patient: '정○○', type: '재진', status: '대기' },
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
const weekSurgeries: { date: string; day: string; today?: boolean; items: SurgeryItem[] }[] = [
  {
    date: '3/23', day: '월',
    items: [
      {
        time: '09:00', patient: '김○○', procedure: '요추 내시경 감압술', risk: 'high',
        detail: {
          age: '72세 (남)', or: '수술실 1호', anesthesia: '전신마취',
          riskFactors: ['고혈압', '당뇨', '흡연'],
          notes: '재발 케이스 (2022년 1차 수술). 항고혈압제 복용 중, 마취과 협진 완료.',
        },
      },
      {
        time: '14:00', patient: '이○○', procedure: '경추 디스크 제거술', risk: 'mid',
        detail: {
          age: '55세 (여)', or: '수술실 2호', anesthesia: '전신마취',
          riskFactors: ['심혈관 질환', '비만'],
          notes: '6개월 비수술 치료 후 호전 없어 수술 결정. 심혈관내과 협진 완료.',
        },
      },
    ],
  },
  {
    date: '3/24', day: '화',
    items: [
      {
        time: '10:00', patient: '박○○', procedure: '척추관협착증 수술', risk: 'low',
        detail: {
          age: '48세 (남)', or: '수술실 1호', anesthesia: '척추마취',
          riskFactors: ['흡연'],
          notes: '초발. 보존적 치료 3개월 후 보행 장애 악화로 수술 결정.',
        },
      },
    ],
  },
  {
    date: '3/25', day: '수', today: true,
    items: [
      {
        time: '09:30', patient: '최○○', procedure: '요추 내시경 감압술', risk: 'high',
        detail: {
          age: '68세 (여)', or: '수술실 1호', anesthesia: '전신마취',
          riskFactors: ['고혈압', '심혈관 질환', '고령'],
          notes: '재발 케이스. 심혈관내과 협진 완료. 항혈소판제 5일 전 중단 확인.',
        },
      },
      {
        time: '13:00', patient: '정○○', procedure: '척추측만증 교정술', risk: 'mid',
        detail: {
          age: '19세 (남)', or: '수술실 2호', anesthesia: '전신마취',
          riskFactors: ['없음'],
          notes: 'Cobb 각도 42도. 성장 완료 후 수술 결정. 수혈 동의서 확인 완료.',
        },
      },
    ],
  },
  { date: '3/26', day: '목', items: [] },
  {
    date: '3/27', day: '금',
    items: [
      {
        time: '11:00', patient: '강○○', procedure: '요추 디스크 수술', risk: 'low',
        detail: {
          age: '35세 (남)', or: '수술실 1호', anesthesia: '척추마취',
          riskFactors: ['없음'],
          notes: '초발 급성 추간판탈출증 (L4-L5). 보존적 치료 6주 후 수술.',
        },
      },
    ],
  },
  { date: '3/28', day: '토', items: [] },
  { date: '3/29', day: '일', items: [] },
];

const riskStyle = {
  high: { bar: 'bg-red-500', badge: 'bg-red-100 text-red-700' },
  mid:  { bar: 'bg-amber-400', badge: 'bg-amber-100 text-amber-700'  },
  low:  { bar: 'bg-emerald-400', badge: 'bg-emerald-100 text-emerald-700' },
};

const stats = [
  { label: '오늘 예약', value: '4명' },
  { label: '대기 환자', value: '3명' },
  { label: '이번 주', value: '19명' },
  { label: '이번 달', value: '37명' },
];

export default function DoctorDashboard() {
  const router = useRouter();
  const [selectedSurgery, setSelectedSurgery] = useState<SurgeryItem | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 대시보드 헤더 */}
      <div className="bg-blue-800 text-white px-4 py-5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-blue-200 text-xs mb-0.5">의료진 포털</p>
            <h1 className="text-lg font-bold">한원석 원장님, 안녕하세요</h1>
          </div>
          <button
            onClick={() => router.push('/')}
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
            <div
              key={s.label}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center"
            >
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
                  <span className="text-sm font-mono text-gray-500 w-12 shrink-0">
                    {item.time}
                  </span>
                  <span className="font-semibold text-gray-900 flex-1">
                    {item.patient}
                  </span>
                  <span className={`text-xs rounded-full px-2 py-0.5 font-medium ${
                    item.type === '초진'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {item.type}
                  </span>
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 font-medium ${
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
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900">이번 주 수술 일정</h2>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" />고위험</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />중위험</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />저위험</span>
              </div>
            </div>

            {/* 데스크톱: 7열 그리드 */}
            <div className="hidden md:grid grid-cols-7 gap-1.5">
              {weekSurgeries.map((day) => (
                <div
                  key={day.date}
                  className={`rounded-xl p-2 min-h-[90px] flex flex-col ${
                    day.today ? 'bg-blue-50 border-2 border-blue-300' : 'bg-gray-50 border border-gray-100'
                  }`}
                >
                  <div className="text-center mb-2">
                    <div className={`text-xs font-semibold ${day.today ? 'text-blue-700' : 'text-gray-400'}`}>{day.day}</div>
                    <div className={`text-xs ${day.today ? 'text-blue-500 font-bold' : 'text-gray-400'}`}>{day.date}</div>
                  </div>
                  <div className="space-y-1 flex-1">
                    {day.items.length === 0 ? (
                      <p className="text-center text-gray-200 text-xs mt-2">—</p>
                    ) : (
                      day.items.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedSurgery(item)}
                          className={`w-full text-left rounded-lg px-1.5 py-1 border-l-2 hover:opacity-80 transition-opacity ${
                            item.risk === 'high' ? 'border-red-500 bg-red-50' :
                            item.risk === 'mid'  ? 'border-amber-400 bg-amber-50' :
                                                   'border-emerald-400 bg-emerald-50'
                          }`}
                        >
                          <p className="text-xs font-semibold text-gray-700 leading-tight">{item.patient}</p>
                          <p className="text-xs text-gray-400 leading-tight">{item.time}</p>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 모바일: 세로 리스트 */}
            <div className="md:hidden space-y-2">
              {weekSurgeries.map((day) => (
                <div
                  key={day.date}
                  className={`rounded-xl border px-4 py-3 ${
                    day.today ? 'bg-blue-50 border-blue-300 border-2' : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-sm font-bold w-6 ${day.today ? 'text-blue-700' : 'text-gray-500'}`}>{day.day}</span>
                    <span className={`text-xs ${day.today ? 'text-blue-500 font-semibold' : 'text-gray-400'}`}>{day.date}</span>
                    {day.today && <span className="text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full font-medium">오늘</span>}
                    {day.items.length === 0 && <span className="text-xs text-gray-300 ml-auto">수술 없음</span>}
                  </div>
                  {day.items.length > 0 && (
                    <div className="space-y-1.5">
                      {day.items.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedSurgery(item)}
                          className={`w-full text-left flex items-center gap-3 rounded-lg px-3 py-2 border-l-2 hover:opacity-80 transition-opacity ${
                            item.risk === 'high' ? 'border-red-500 bg-red-50' :
                            item.risk === 'mid'  ? 'border-amber-400 bg-amber-50' :
                                                   'border-emerald-400 bg-emerald-50'
                          }`}
                        >
                          <span className="text-xs font-mono text-gray-400 w-10 shrink-0">{item.time}</span>
                          <span className="text-sm font-semibold text-gray-800">{item.patient}</span>
                          <span className="text-xs text-gray-500 flex-1 truncate">{item.procedure}</span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${riskStyle[item.risk].badge}`}>
                            {item.risk === 'high' ? '고위험' : item.risk === 'mid' ? '중위험' : '저위험'}
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
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-4">빠른 메뉴</h2>
              <div className="space-y-2">
                {[
                  { label: '환자 재활 현황', icon: '📋' },
                  { label: '검사 결과 확인??여기 뭐넣지', icon: '🔬' },
                  { label: '예약 관리?? 여기도 뭐넣지', icon: '📅' },
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

            
          </div>
        </div>
      </div>

      {/* 수술 상세 모달 */}
      {selectedSurgery && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            {/* 헤더 */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${riskStyle[selectedSurgery.risk].badge}`}>
                  {selectedSurgery.risk === 'high' ? '고위험군' : selectedSurgery.risk === 'mid' ? '중위험군' : '저위험군'}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mt-2">{selectedSurgery.patient}</h2>
                <p className="text-sm text-gray-500">{selectedSurgery.procedure}</p>
              </div>
              <button onClick={() => setSelectedSurgery(null)} className="text-gray-400 hover:text-gray-600 text-xl leading-none mt-1">✕</button>
            </div>

            {/* 기본 정보 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-2">
              {[
                { label: '연령 / 성별', value: selectedSurgery.detail.age },
                { label: '수술 시간', value: selectedSurgery.time },
                { label: '수술실', value: selectedSurgery.detail.or },
                { label: '마취 방법', value: selectedSurgery.detail.anesthesia },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">{label}</span>
                  <span className="text-sm font-medium text-gray-800">{value}</span>
                </div>
              ))}
            </div>

            {/* 위험 요인 */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 mb-2">위험 요인</p>
              <div className="flex flex-wrap gap-2">
                {selectedSurgery.detail.riskFactors.map((f) => (
                  <span key={f} className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    f === '없음' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                  }`}>{f}</span>
                ))}
              </div>
            </div>

            {/* 비고 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-5">
              <p className="text-xs font-semibold text-amber-700 mb-1">수술 메모</p>
              <p className="text-xs text-amber-800 leading-relaxed">{selectedSurgery.detail.notes}</p>
            </div>

            <button
              onClick={() => setSelectedSurgery(null)}
              className="w-full py-3 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
