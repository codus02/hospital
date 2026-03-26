export const appointments = [
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

export const prescriptions = [
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

export const exerciseVideos = [
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

export const categoryColors: Record<string, string> = {
  스트레칭: 'bg-blue-100 text-blue-600',
  근력: 'bg-emerald-100 text-emerald-600',
  교정: 'bg-amber-100 text-amber-700',
  재활: 'bg-rose-100 text-rose-600',
};

export type RemoteSession = {
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

export const remoteSchedules: RemoteSession[] = [
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

export const TOTAL_STAMPS = 10;
export const STAMPED = 4;
