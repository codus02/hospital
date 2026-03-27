export type Risk = 'high' | 'mid' | 'low';

export interface SurgeryItem {
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

export type RehabStatus = 'good' | 'warn' | 'bad';

export interface RehabVisit {
  date: string;
  done: boolean;
}

export interface RehabPatient {
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

export const todaySchedule = [
  { time: '09:30', patient: '이대박', type: '재진', status: '진료중' },
  { time: '10:20', patient: '박찬호', type: '재진', status: '대기' },
  { time: '10:40', patient: '최사람', type: '초진', status: '대기' },
  { time: '11:20', patient: '정환자', type: '재진', status: '대기' },
  { time: '16:20', patient: '박나라', type: '초진', status: '예약' },
];

export const weekSurgeries: {
  date: string;
  day: string;
  today?: boolean;
  items: SurgeryItem[];
}[] = [
  { date: '3/23', day: '월', items: [] },
  {
    date: '3/24',
    day: '화',
    items: [
      {
        time: '10:00',
        patient: '박사람',
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
    items: [
      {
        time: '09:30',
        patient: '최환자',
        procedure: '요추 내시경 감압술',
        risk: 'high',
        detail: {
          age: '68세 (여)',
          or: '수술실 1호',
          anesthesia: '전신마취',
          riskFactors: ['고혈압', '심혈관 질환', '고령'],
          notes: '재발 케이스. 심혈관내과 협진 완료. 항혈소판제 5일 전 중단 확인.',
        },
      },
      {
        time: '13:00',
        patient: '정대한',
        procedure: '척추측만증 교정술',
        risk: 'mid',
        detail: {
          age: '19세 (남)',
          or: '수술실 2호',
          anesthesia: '전신마취',
          riskFactors: ['없음'],
          notes: 'Cobb 각도 42도. 성장 완료 후 수술 결정. 수혈 동의서 확인 완료.',
        },
      },
    ],
  },
  { date: '3/26', day: '목', items: [
    {
        time: '09:00',
        patient: '김대한',
        procedure: '요추 내시경 감압술',
        risk: 'high',
        detail: {
          age: '72세 (남)',
          or: '수술실 1호',
          anesthesia: '전신마취',
          riskFactors: ['고혈압', '당뇨', '흡연'],
          notes: '재발 케이스 (2022년 1차 수술). 항고혈압제 복용 중, 마취과 협진 완료.',
        },
      },
  ] },
  {
    date: '3/27',
    day: '금',
    today: true,
    items: [
      {
        time: '11:00',
        patient: '강나라',
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
      {
        time: '13:30',
        patient: '윤사람',
        procedure: '요추 디스크 수술',
        risk: 'low',
        detail: {
          age: '41세 (남)',
          or: '수술실 1호',
          anesthesia: '척추마취',
          riskFactors: ['없음'],
          notes: '급성 추간판탈출증 (L5-S1). 보존적 치료 4주 후 증상 악화로 수술 결정.',
        },
      },
      {
        time: '15:30',
        patient: '오환자',
        procedure: '경추 디스크 제거술',
        risk: 'mid',
        detail: {
          age: '50세 (여)',
          or: '수술실 2호',
          anesthesia: '전신마취',
          riskFactors: ['고혈압'],
          notes: '경추 5-6번 추간판탈출증. 상지 방사통 6개월 지속 후 수술.',
        },
      },
    ],
  },
  {
    date: '3/28',
    day: '토',
    items: [
      
      {
        time: '14:00',
        patient: '이환자',
        procedure: '경추 디스크 제거술',
        risk: 'mid',
        detail: {
          age: '55세 (여)',
          or: '수술실 2호',
          anesthesia: '전신마취',
          riskFactors: ['심혈관 질환', '비만'],
          notes: '6개월 비수술 치료 후 호전 없어 수술 결정. 심혈관내과 협진 완료.',
        },
      },
    ],
  },
  { date: '3/29', day: '일', items: [] },
];

export const riskStyle: Record<Risk, { bar: string; badge: string }> = {
  high: { bar: 'bg-red-500', badge: 'bg-red-100 text-red-700' },
  mid: { bar: 'bg-amber-400', badge: 'bg-amber-100 text-amber-700' },
  low: { bar: 'bg-emerald-400', badge: 'bg-emerald-100 text-emerald-700' },
};

export const rehabPatients: RehabPatient[] = [
  {
    name: '이환자',
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
    name: '박대박',
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
    name: '김나라',
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
    name: '정환자',
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
    name: '강대한',
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
    name: '김노인',
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

export const rehabStyle: Record<
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

export const stats = [
  { label: '오늘 예약', value: '4명' },
  { label: '대기 환자', value: '3명' },
  { label: '이번 주', value: '19명' },
  { label: '이번 달', value: '37명' },
];
