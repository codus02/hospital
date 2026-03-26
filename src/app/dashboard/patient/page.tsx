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

const exerciseVideos = [
  {
    title: '허리 디스크 완화 스트레칭',
    desc: '하루 10분, 요추 부담을 줄이는 기본 스트레칭',
    duration: '10:24',
    category: '스트레칭',
    thumb: 'from-blue-400 to-blue-600',
  },
  {
    title: '척추 코어 강화 운동',
    desc: '복근과 허리 근육을 동시에 강화하는 루틴',
    duration: '15:38',
    category: '근력',
    thumb: 'from-emerald-400 to-emerald-600',
  },
  {
    title: '목 디스크 예방 스트레칭',
    desc: '경추 긴장 완화를 위한 부드러운 목 운동',
    duration: '08:15',
    category: '스트레칭',
    thumb: 'from-purple-400 to-purple-600',
  },
  {
    title: '척추측만증 교정 운동',
    desc: '좌우 균형을 맞추는 교정 동작 모음',
    duration: '12:50',
    category: '교정',
    thumb: 'from-amber-400 to-orange-500',
  },
  {
    title: '앉아서 하는 허리 스트레칭',
    desc: '사무직 직장인을 위한 의자 위 척추 관리',
    duration: '07:02',
    category: '스트레칭',
    thumb: 'from-sky-400 to-cyan-500',
  },
  {
    title: '척추 압박 골절 후 재활 운동',
    desc: '골절 회복기 단계별 안전한 재활 동작',
    duration: '18:45',
    category: '재활',
    thumb: 'from-rose-400 to-pink-600',
  },
  {
    title: '골반 교정 & 허리 균형 운동',
    desc: '골반 틀어짐 교정으로 만성 요통 예방',
    duration: '11:30',
    category: '교정',
    thumb: 'from-indigo-400 to-violet-500',
  },
  {
    title: '수면 전 척추 이완 스트레칭',
    desc: '잠들기 전 5분, 하루 척추 피로 풀기',
    duration: '05:20',
    category: '스트레칭',
    thumb: 'from-teal-400 to-teal-600',
  },
];

const categoryColors: Record<string, string> = {
  스트레칭: 'bg-blue-100 text-blue-600',
  근력: 'bg-emerald-100 text-emerald-600',
  교정: 'bg-amber-100 text-amber-700',
  재활: 'bg-rose-100 text-rose-600',
};

type RemoteSession = {
  id: number;
  date: string;
  day: string;
  time: string;
  title: string;
  instructor: string;
  instructorRole: string;
  category: string;
  duration: string;
  level: string;
  desc: string;
  equipment: string;
  current: number;
  max: number;
};

const remoteSchedules: RemoteSession[] = [
  {
    id: 1,
    date: '2026-03-27',
    day: '목',
    time: '09:00',
    title: '아침 허리 스트레칭',
    instructor: '박지연',
    instructorRole: '물리치료사',
    category: '스트레칭',
    duration: '30분',
    level: '초급',
    desc: '하루를 부드럽게 시작하는 요추 스트레칭입니다. 침대에서 일어나기 전 할 수 있는 동작부터 서서 하는 동작까지, 무리 없이 진행합니다.',
    equipment: '요가 매트 (없어도 가능)',
    current: 6,
    max: 10,
  },
  {
    id: 2,
    date: '2026-03-28',
    day: '금',
    time: '12:30',
    title: '점심 코어 강화 운동',
    instructor: '이민준',
    instructorRole: '운동처방사',
    category: '근력',
    duration: '25분',
    level: '중급',
    desc: '짧은 점심 시간을 활용한 코어 집중 운동입니다. 복근·허리 근육을 균형 있게 강화해 척추를 지지하는 근력을 키웁니다.',
    equipment: '요가 매트',
    current: 8,
    max: 10,
  },
  {
    id: 3,
    date: '2026-03-31',
    day: '월',
    time: '10:00',
    title: '척추측만증 교정 체조',
    instructor: '박지연',
    instructorRole: '물리치료사',
    category: '교정',
    duration: '40분',
    level: '초급',
    desc: '좌우 불균형을 개선하는 교정 동작 위주의 수업입니다. 척추측만증 진단을 받은 분들께 특히 권장합니다.',
    equipment: '폼롤러 (없어도 가능)',
    current: 4,
    max: 8,
  },
  {
    id: 4,
    date: '2026-04-01',
    day: '화',
    time: '19:00',
    title: '저녁 전신 이완 스트레칭',
    instructor: '정수아',
    instructorRole: '재활 운동사',
    category: '스트레칭',
    duration: '35분',
    level: '초급',
    desc: '하루 쌓인 척추 피로를 풀어주는 저녁 이완 프로그램입니다. 잠들기 전 루틴으로 활용하기 좋습니다.',
    equipment: '없음',
    current: 5,
    max: 12,
  },
  {
    id: 5,
    date: '2026-04-02',
    day: '수',
    time: '11:00',
    title: '압박골절 후 재활 운동',
    instructor: '이민준',
    instructorRole: '운동처방사',
    category: '재활',
    duration: '45분',
    level: '초급',
    desc: '척추 압박골절 회복기 환자를 위한 단계별 재활 운동입니다. 의료진과 협의된 안전한 동작으로만 구성되어 있습니다.',
    equipment: '의자, 요가 매트',
    current: 3,
    max: 6,
  },
];

const TOTAL_STAMPS = 10;
const STAMPED = 4;

function StampCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* 헤더 */}
      <div className="mb-1 flex items-center justify-between">
        <h2 className="font-bold text-gray-900">방문 도장 카드</h2>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
          {STAMPED} / {TOTAL_STAMPS}
        </span>
      </div>
      <p className="mb-5 text-xs text-gray-400">
        10개 모으면 특별 선물을 드립니다 🎁
      </p>

      {/* 도장 그리드 */}
      <div className="mb-5 grid grid-cols-5 gap-3">
        {Array.from({ length: TOTAL_STAMPS }).map((_, i) => {
          const stamped = i < STAMPED;
          return (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-xl border-2 transition-all ${
                stamped
                  ? 'border-red-300 bg-red-50 shadow-sm'
                  : 'border-dashed border-gray-300 bg-gray-50'
              }`}
            >
              {stamped ? (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="text-red-500 opacity-85"
                >
                  <circle
                    cx="15"
                    cy="15"
                    r="13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="15"
                    cy="15"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="15"
                    y1="8"
                    x2="15"
                    y2="22"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="15"
                    x2="22"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="15" cy="15" r="2" fill="currentColor" />
                </svg>
              ) : (
                <span className="text-xs font-medium text-gray-300">
                  {i + 1}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* QR 안내 */}
      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
        {/* QR 아이콘 */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white">
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
          <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
            접수 데스크에서 QR코드를 인식하면
            <br />
            방문 도장이 자동으로 적립됩니다.
          </p>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-gray-400">
        도장 10개 완성 시 원무과에서 상품을 수령하세요
      </p>
    </div>
  );
}

export default function PatientDashboard() {
  const router = useRouter();
  const [showMyInfo, setShowMyInfo] = useState(false);
  const [showCallScreen, setShowCallScreen] = useState(false);
  const [showMedicalRecords, setShowMedicalRecords] = useState(false);
  const [showExerciseVideos, setShowExerciseVideos] = useState(false);
  const [showRemoteSchedule, setShowRemoteSchedule] = useState(false);
  const [selectedSession, setSelectedSession] = useState<RemoteSession | null>(
    null
  );
  const [registeredSessions, setRegisteredSessions] = useState<number[]>([]);
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false);

  useEffect(() => {
    if (showCallScreen) {
      const t = setTimeout(() => setShowCallScreen(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showCallScreen]);

  const upcomingAppts = appointments.filter((a) => a.status === '예약확정');
  const pastAppts = appointments.filter((a) => a.status !== '예약확정');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 대시보드 헤더 */}
      <div className="bg-blue-800 px-4 py-5 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <p className="mb-0.5 text-xs text-blue-200">환자 포털</p>
            <h1 className="text-lg font-bold">김환자님, 안녕하세요</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMyInfo(true)}
              className="rounded-lg border border-blue-600 px-3 py-1.5 text-sm text-blue-200 hover:text-white"
            >
              내 정보
            </button>
            <button
              onClick={() => router.push('/')}
              className="rounded-lg border border-blue-600 px-3 py-1.5 text-sm text-blue-200 hover:text-white"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        {/* 다음 예약 */}
        <div className="rounded-2xl bg-blue-700 p-6 text-white">
          <p className="mb-1 text-xs text-blue-200">다음 예약</p>
          <h2 className="mb-1 text-xl font-bold">2026년 3월 31일 (화) 10:30</h2>
          <p className="text-sm text-blue-100">한원석 원장 · 척추외과</p>
          <div className="mt-4 flex gap-2">
            <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
              예약 확인
            </button>
            <button className="rounded-full border border-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
              취소/변경 문의
            </button>
          </div>
        </div>

        {/* 신청한 원격 운동 */}
        {registeredSessions.length > 0 && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-base">🏃</span>
              <h2 className="font-bold text-emerald-900">신청한 원격 운동</h2>
              <span className="ml-auto rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                {registeredSessions.length}건
              </span>
            </div>
            <div className="space-y-2">
              {remoteSchedules
                .filter((s) => registeredSessions.includes(s.id))
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
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-900 truncate">
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
        )}

        {/* 도장 카드 */}
        <StampCard />

        <div className="grid gap-6 md:grid-cols-2">
          {/* 예약 내역 */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-bold text-gray-900">다가오는 진료</h2>
            <div className="space-y-3">
              {upcomingAppts.map((a, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl bg-gray-50 p-3"
                >
                  <div className="w-12 shrink-0 text-center">
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
                  <span className="shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 처방전 내역 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-bold text-gray-900">처방 내역</h2>
            <div className="space-y-3">
              {prescriptions.map((p, idx) => (
                <div key={idx} className="rounded-xl bg-gray-50 p-3">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-semibold text-gray-800">
                      {p.name}
                    </p>
                    <span className="text-xs font-medium text-blue-600">
                      {p.days}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
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
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-bold text-gray-900">서비스</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <button
              onClick={() => setShowCallScreen(true)}
              className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 py-4 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              <span className="text-2xl">📅</span>
              <span className="text-xs font-medium">예약하기</span>
            </button>
            <button
              onClick={() => setShowMedicalRecords(true)}
              className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 py-4 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              <span className="text-2xl">📋</span>
              <span className="text-xs font-medium">진료기록</span>
            </button>
            <button
              onClick={() => setShowExerciseVideos(true)}
              className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 py-4 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              <span className="text-2xl">🎥</span>
              <span className="text-xs font-medium">운동영상</span>
            </button>
            <button
              onClick={() => setShowRemoteSchedule(true)}
              className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 py-4 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              <span className="text-2xl">🏃</span>
              <span className="text-xs font-medium">원격 운동</span>
            </button>
          </div>
        </div>
      </div>

      {/* 전화 연결 화면 */}
      {showCallScreen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-950">
          <div className="text-center text-white">
            <div className="mb-6 animate-pulse text-7xl">📞</div>
            <p className="mb-2 text-3xl font-extrabold">P병원</p>
            <p className="mb-1 text-lg text-blue-300">연결 중...</p>
            <p className="text-sm text-blue-400">051-xxxx-xxxx</p>
          </div>
        </div>
      )}

      {/* 내 정보 모달 */}
      {showMyInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">내 정보</h2>
              <button
                onClick={() => setShowMyInfo(false)}
                className="text-xl leading-none text-gray-400 hover:text-gray-600"
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
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-gray-100 py-2.5"
                >
                  <span className="w-20 shrink-0 text-xs text-gray-400">
                    {label}
                  </span>
                  <span className="text-right text-sm font-medium text-gray-800">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowMyInfo(false)}
              className="mt-5 w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* 운동영상 모달 */}
      {showExerciseVideos && (
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
                <p className="mt-0.5 text-xs text-gray-400">
                  매달 초 업데이트
                </p>
              </div>
              <button
                onClick={() => setShowExerciseVideos(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 overflow-y-auto px-6 py-4">
              {exerciseVideos.map((v, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* 썸네일 */}
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
                  {/* 정보 */}
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
                onClick={() => setShowExerciseVideos(false)}
                className="w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 신청 완료 토스트 */}
      {showRegistrationSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-3 rounded-2xl bg-gray-900/90 px-6 py-4 text-white shadow-2xl backdrop-blur-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-lg">
              ✓
            </span>
            <p className="text-sm font-semibold">참여 신청이 완료되었습니다</p>
          </div>
        </div>
      )}

      {/* 원격 운동 스케줄 모달 */}
      {showRemoteSchedule && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
          <div className="flex max-h-[92vh] w-full flex-col rounded-t-3xl bg-white shadow-xl sm:max-w-lg sm:rounded-2xl">
            <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 pt-5 pb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  원격 운동 스케줄
                </h2>
                <p className="mt-0.5 text-xs text-gray-400">
                  비대면 실시간 스트레칭 · 재활 클래스
                </p>
              </div>
              <button
                onClick={() => {
                  setShowRemoteSchedule(false);
                  setSelectedSession(null);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {selectedSession ? (
              <div className="flex flex-col overflow-y-auto">
                <button
                  onClick={() => setSelectedSession(null)}
                  className="flex items-center gap-1 px-6 pt-4 pb-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  ← 목록으로
                </button>
                <div className="px-6 pb-6">
                  <div className="mb-4 rounded-2xl bg-blue-50 p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[selectedSession.category]}`}
                      >
                        {selectedSession.category}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                        {selectedSession.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {selectedSession.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {selectedSession.date} ({selectedSession.day}) ·{' '}
                      {selectedSession.time} · {selectedSession.duration}
                    </p>
                  </div>
                  <div className="mb-4 flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl">
                      👩‍⚕️
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        {selectedSession.instructor}
                      </p>
                      <p className="text-xs text-gray-500">
                        {selectedSession.instructorRole}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                        수업 소개
                      </p>
                      <p className="leading-relaxed text-gray-700">
                        {selectedSession.desc}
                      </p>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                          준비물
                        </p>
                        <p className="text-gray-700">
                          {selectedSession.equipment}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                          참여 인원
                        </p>
                        <p className="text-gray-700">
                          {selectedSession.current} / {selectedSession.max}명
                        </p>
                      </div>
                    </div>
                  </div>
                  {registeredSessions.includes(selectedSession.id) ? (
                    <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 py-3 text-sm font-semibold text-emerald-700 border border-emerald-200">
                      ✓ 이미 신청한 수업입니다
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setRegisteredSessions((prev) => [
                          ...prev,
                          selectedSession.id,
                        ]);
                        setShowRegistrationSuccess(true);
                        setTimeout(() => {
                          setShowRegistrationSuccess(false);
                          setSelectedSession(null);
                        }, 1500);
                      }}
                      className="mt-6 w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                    >
                      참여 신청하기
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-3 overflow-y-auto px-6 py-4">
                  {remoteSchedules.map((session) => {
                    const isFull = session.current >= session.max;
                    return (
                      <button
                        key={session.id}
                        onClick={() => setSelectedSession(session)}
                        className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 text-left transition-all hover:border-blue-200 hover:bg-blue-50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex w-12 shrink-0 flex-col items-center rounded-xl border border-gray-100 bg-white py-2 shadow-sm">
                            <span className="text-[10px] font-semibold text-gray-400">
                              {session.date.slice(5).replace('-', '/')}
                            </span>
                            <span className="text-lg font-extrabold leading-tight text-blue-700">
                              {session.day}
                            </span>
                            <span className="text-xs font-medium text-gray-600">
                              {session.time}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex flex-wrap items-center gap-1.5">
                              <span
                                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryColors[session.category]}`}
                              >
                                {session.category}
                              </span>
                              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500">
                                {session.level}
                              </span>
                              {registeredSessions.includes(session.id) && (
                                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                                  예약완료
                                </span>
                              )}
                              {isFull && !registeredSessions.includes(session.id) && (
                                <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-500">
                                  마감
                                </span>
                              )}
                            </div>
                            <p className="text-sm font-bold text-gray-900">
                              {session.title}
                            </p>
                            <p className="mt-0.5 text-xs text-gray-500">
                              {session.instructor} {session.instructorRole} ·{' '}
                              {session.duration}
                            </p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p
                              className={`text-xs font-semibold ${isFull ? 'text-red-400' : 'text-emerald-600'}`}
                            >
                              {session.current}/{session.max}
                            </p>
                            <p className="text-[10px] text-gray-400">참여</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="shrink-0 px-6 pt-2 pb-5">
                  <button
                    onClick={() => setShowRemoteSchedule(false)}
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

      {/* 진료기록 모달 */}
      {showMedicalRecords && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">지난 진료기록</h2>
              <button
                onClick={() => setShowMedicalRecords(false)}
                className="text-xl leading-none text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              {pastAppts.map((a, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 p-4"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {a.date}
                      </p>
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
                        <p className="text-sm text-gray-800">
                          소염진통제 (7일치)
                        </p>
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
              onClick={() => setShowMedicalRecords(false)}
              className="mt-5 w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
