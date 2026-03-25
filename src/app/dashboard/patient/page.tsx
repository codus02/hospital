'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const appointments = [
  {
    date: '2026-03-31',
    time: '10:30',
    doctor: '한원석 원장',
    dept: '척추외과',
    status: '예약확정',
  },
  {
    date: '2025-03-18',
    time: '09:00',
    doctor: '송홍준 부원장',
    dept: '척추외과',
    status: '진료완료',
  },
  {
    date: '2025-02-25',
    time: '14:00',
    doctor: '차연주 과장',
    dept: '통증의학과',
    status: '진료완료',
  },
];

const prescriptions = [
  {
    date: '2025-03-18',
    name: '소염진통제',
    doctor: '송홍준 부원장',
    days: '7일치',
  },
  {
    date: '2025-02-25',
    name: '신경안정제 외 2종',
    doctor: '차연주 과장',
    days: '14일치',
  },
];

const partners = [
  {
    name: '써브웨이 포항남부디티점',
    category: '음식',
    address: '경북 포항시 북구 새천년대로 526',
    benefit: '지정 메뉴 30% 할인',
    details: '로스트치킨 · 참치 · 베지 · 로티세리 바비큐 치킨',
  },
  {
    name: '포항공과대학교 POSPLEX',
    category: '피트니스',
    address: '경북 포항시 남구 지곡로127번길 30',
    benefit: '헬스 · 필라테스 · 수영 10% 할인',
    details: '회원권 구매 시 병원 환자증 지참 필수',
  },
  {
    name: '추후 선정 예정',
    category: '',
    address: '',
    benefit: '',
    details: '',
    placeholder: true,
  },
  {
    name: '추후 선정 예정',
    category: '',
    address: '',
    benefit: '',
    details: '',
    placeholder: true,
  },
];

const TOTAL_STAMPS = 10;
const STAMPED = 4;

function StampCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="font-bold text-gray-900">방문 도장 카드</h2>
        <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2.5 py-1 rounded-full">
          {STAMPED} / {TOTAL_STAMPS}
        </span>
      </div>
      <p className="text-xs text-gray-400 mb-5">
        10개 모으면 특별 선물을 드립니다 🎁
      </p>

      {/* 도장 그리드 */}
      <div className="grid grid-cols-5 gap-3 mb-5">
        {Array.from({ length: TOTAL_STAMPS }).map((_, i) => {
          const stamped = i < STAMPED;
          return (
            <div
              key={i}
              className={`aspect-square rounded-xl flex items-center justify-center border-2 transition-all ${
                stamped
                  ? 'border-blue-500 bg-blue-500 shadow-sm'
                  : 'border-dashed border-gray-300 bg-gray-50'
              }`}
            >
              {stamped ? (
                <span className="text-white text-xl select-none">✚</span>
              ) : (
                <span className="text-gray-300 text-xs font-medium">
                  {i + 1}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* QR 안내 */}
      <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
        {/* QR 아이콘 */}
        <div className="shrink-0 w-14 h-14 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="14"
              height="14"
              rx="2"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
            <rect x="5" y="5" width="8" height="8" rx="1" fill="#1d4ed8" />
            <rect
              x="20"
              y="2"
              width="14"
              height="14"
              rx="2"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
            <rect x="23" y="5" width="8" height="8" rx="1" fill="#1d4ed8" />
            <rect
              x="2"
              y="20"
              width="14"
              height="14"
              rx="2"
              stroke="#1d4ed8"
              strokeWidth="2.2"
            />
            <rect x="5" y="23" width="8" height="8" rx="1" fill="#1d4ed8" />
            <rect x="20" y="20" width="4" height="4" fill="#1d4ed8" />
            <rect x="26" y="20" width="4" height="4" fill="#1d4ed8" />
            <rect x="20" y="26" width="4" height="4" fill="#1d4ed8" />
            <rect x="26" y="26" width="4" height="4" fill="#1d4ed8" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">
            병원 방문 시 도장 적립
          </p>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
            접수 데스크에서 QR코드를 인식하면
            <br />
            방문 도장이 자동으로 적립됩니다.
          </p>
        </div>
      </div>

      <p className="text-xs text-center text-gray-400 mt-3">
        도장 10개 완성 시 원무과에서 상품을 수령하세요
      </p>
    </div>
  );
}

export default function PatientDashboard() {
  const router = useRouter();
  const [expandedPartners, setExpandedPartners] = useState<Set<number>>(new Set());
  const [showMyInfo, setShowMyInfo] = useState(false);
  const [showCallScreen, setShowCallScreen] = useState(false);
  const [showMedicalRecords, setShowMedicalRecords] = useState(false);

  useEffect(() => {
    if (showCallScreen) {
      const t = setTimeout(() => setShowCallScreen(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showCallScreen]);

  function togglePartner(idx: number) {
    setExpandedPartners((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }

  const upcomingAppts = appointments.filter((a) => a.status === '예약확정');
  const pastAppts = appointments.filter((a) => a.status !== '예약확정');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 대시보드 헤더 */}
      <div className="bg-blue-800 text-white px-4 py-5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-blue-200 text-xs mb-0.5">환자 포털</p>
            <h1 className="text-lg font-bold">김환자님, 안녕하세요</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMyInfo(true)}
              className="text-sm text-blue-200 hover:text-white border border-blue-600 px-3 py-1.5 rounded-lg"
            >
              내 정보
            </button>
            <button
              onClick={() => router.push('/')}
              className="text-sm text-blue-200 hover:text-white border border-blue-600 px-3 py-1.5 rounded-lg"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* 다음 예약 */}
        <div className="bg-blue-700 text-white rounded-2xl p-6">
          <p className="text-blue-200 text-xs mb-1">다음 예약</p>
          <h2 className="text-xl font-bold mb-1">2026년 3월 31일 (화) 10:30</h2>
          <p className="text-blue-100 text-sm">한원석 원장 · 척추외과</p>
          <div className="mt-4 flex gap-2">
            <button className="bg-white text-blue-700 text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-50">
              예약 확인
            </button>
            <button className="border border-blue-400 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-600">
              취소/변경 문의
            </button>
          </div>
        </div>

        {/* 도장 카드 */}
        <StampCard />

        <div className="grid md:grid-cols-2 gap-6">
          {/* 예약 내역 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 mb-4">다가오는 진료</h2>
            <div className="space-y-3">
              {upcomingAppts.map((a, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gray-50"
                >
                  <div className="text-center shrink-0 w-12">
                    <div className="text-xs text-gray-500">
                      {a.date.slice(5)}
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {a.time}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      {a.doctor}
                    </p>
                    <p className="text-xs text-gray-500">{a.dept}</p>
                  </div>
                  <span className="text-xs rounded-full px-2 py-0.5 font-medium shrink-0 bg-blue-100 text-blue-700">
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
                    <p className="text-sm font-semibold text-gray-800">
                      {p.name}
                    </p>
                    <span className="text-xs text-blue-600 font-medium">
                      {p.days}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {p.date} · {p.doctor}
                  </p>
                </div>
              ))}
            </div>

            {/* <div className="mt-4 bg-amber-50 rounded-xl border border-amber-200 p-3">
              <p className="text-xs text-amber-600">
                * 시연용 데이터입니다. 실제 처방 정보는 병원에서 확인하세요.
              </p>
            </div> */}
          </div>
        </div>

        {/* 빠른 메뉴 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-900 mb-4">서비스</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => setShowCallScreen(true)}
              className="flex flex-col items-center gap-2 py-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-gray-700"
            >
              <span className="text-2xl">📅</span>
              <span className="text-xs font-medium">예약하기</span>
            </button>
            <button
              onClick={() => setShowMedicalRecords(true)}
              className="flex flex-col items-center gap-2 py-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-gray-700"
            >
              <span className="text-2xl">📋</span>
              <span className="text-xs font-medium">진료기록</span>
            </button>
            <button
              className="flex flex-col items-center gap-2 py-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-gray-700"
            >
              <span className="text-2xl">🎥</span>
              <span className="text-xs font-medium">운동영상</span>
            </button>
            <button
              className="flex flex-col items-center gap-2 py-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-gray-700"
            >
              <span className="text-2xl">🏃</span>
              <span className="text-xs font-medium">원격 운동</span>
            </button>
          </div>
        </div>
        {/* 제휴업체 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-900 mb-1">제휴업체 혜택</h2>
          <p className="text-xs text-gray-400 mb-4">
            P병원 환자에게 제공되는 특별 할인 혜택입니다.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {partners.map((p, idx) => (
              <div key={idx}>
                <button
                  onClick={() => !p.placeholder && togglePartner(idx)}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-all ${
                    p.placeholder
                      ? 'border-dashed border-gray-200 bg-gray-50 cursor-default'
                      : expandedPartners.has(idx)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 bg-gray-50'
                  }`}
                >
                  {p.placeholder ? (
                    <div className="flex flex-col items-center justify-center py-3 text-gray-300">
                      <span className="text-2xl mb-1">+</span>
                      <span className="text-xs">업체 선정 예정</span>
                    </div>
                  ) : (
                    <div>
                      {p.category && (
                        <span className="text-xs bg-blue-100 text-blue-600 font-semibold px-2 py-0.5 rounded-full mb-2 inline-block">
                          {p.category}
                        </span>
                      )}
                      <p className="text-sm font-bold text-gray-800 leading-tight">
                        {p.name}
                      </p>
                      <p className="text-xs text-blue-600 font-semibold mt-1">
                        {p.benefit}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        {expandedPartners.has(idx) ? '▲ 접기' : '▼ 자세히'}
                      </p>
                    </div>
                  )}
                </button>

                {expandedPartners.has(idx) && !p.placeholder && (
                  <div className="mt-2 rounded-xl bg-gray-50 border bg-gray-50 p-4 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-0.5">
                        주소
                      </p>
                      <p className="text-xs text-gray-700">{p.address}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-0.5">
                        적용 항목
                      </p>
                      <p className="text-xs text-gray-700">{p.details}</p>
                    </div>
                    <p className="text-xs text-amber-600 bg-amber-50 border border-amber-100 rounded-lg px-3 py-1.5">
                      * 병원 회원카드 지참 필수 *
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 전화 연결 화면 */}
      {showCallScreen && (
        <div className="fixed inset-0 bg-blue-950 flex flex-col items-center justify-center z-50">
          <div className="text-white text-center">
            <div className="text-7xl mb-6 animate-pulse">📞</div>
            <p className="text-3xl font-extrabold mb-2">P병원</p>
            <p className="text-blue-300 text-lg mb-1">연결 중...</p>
            <p className="text-blue-400 text-sm">051-xxxx-xxxx</p>
          </div>
        </div>
      )}

      {/* 내 정보 모달 */}
      {showMyInfo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-bold text-gray-900 text-lg">내 정보</h2>
              <button
                onClick={() => setShowMyInfo(false)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ✕
              </button>
            </div>
            <div className="space-y-1">
              {[
                { label: '이름', value: '김환자' },
                { label: '생년월일', value: '2000년 0월 00일' },
                { label: '성별', value: '여성' },
                { label: '연락처', value: '010-xxxx-xxxx' },
                { label: '등록일', value: '2024년 8월 20일' },
                { label: '담당의', value: '한원석 원장 (척추외과)' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-2.5 border-b border-gray-100">
                  <span className="text-xs text-gray-400 w-20 shrink-0">{label}</span>
                  <span className="text-sm font-medium text-gray-800 text-right">{value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowMyInfo(false)}
              className="mt-5 w-full py-3 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* 진료기록 모달 */}
      {showMedicalRecords && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-bold text-gray-900 text-lg">지난 진료기록</h2>
              <button
                onClick={() => setShowMedicalRecords(false)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              {pastAppts.map((a, idx) => (
                <div key={idx} className="rounded-xl border border-gray-200 p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-sm font-bold text-gray-800">{a.date}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{a.doctor} · {a.dept} · {a.time}</p>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{a.status}</span>
                  </div>
                  {idx === 0 && (
                    <div className="space-y-2">
                      <div><p className="text-xs font-semibold text-gray-500 mb-0.5">진단명</p><p className="text-sm text-gray-800">요추 추간판탈출증 (L4-L5)</p></div>
                      <div><p className="text-xs font-semibold text-gray-500 mb-0.5">처방</p><p className="text-sm text-gray-800">소염진통제 7일 · 물리치료 6회</p></div>
                      <div><p className="text-xs font-semibold text-gray-500 mb-0.5">처방약</p><p className="text-sm text-gray-800">소염진통제 (7일치)</p></div>
                      <div><p className="text-xs font-semibold text-gray-500 mb-0.5">의사 메모</p><p className="text-sm text-gray-800">2주 후 경과 관찰 재진 권유. 무거운 물건 들기 자제.</p></div>
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="space-y-2">
                      <div><p className="text-xs font-semibold text-gray-500 mb-0.5">진단명</p><p className="text-sm text-gray-800">만성 요통 (근육 긴장성)</p></div>
                      <div><p className="text-xs font-semibold text-gray-500 mb-0.5">처방</p><p className="text-sm text-gray-800">온열치료 4회 · 도수치료 2회</p></div>
                      <div><p className="text-xs font-semibold text-gray-500 mb-0.5">처방약</p><p className="text-sm text-gray-800">신경안정제 · 근이완제 · 위장약 (14일치)</p></div>
                      <div><p className="text-xs font-semibold text-gray-500 mb-0.5">의사 메모</p><p className="text-sm text-gray-800">일상적인 스트레칭 및 코어 근력 운동 권유. 장시간 앉은 자세 주의.</p></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowMedicalRecords(false)}
              className="mt-5 w-full py-3 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
