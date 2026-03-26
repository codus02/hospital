const businessPartners = [
  {
    name: '써브웨이 포항남부디티점',
    category: '음식',
    icon: '🥖',
    address: '경북 포항시 북구 새천년대로 526',
    benefit: '지정 메뉴 30% 할인',
    details: '로스트치킨 · 참치 · 베지 · 로티세리 바비큐 치킨',
    note: '병원 환자증 지참 필수',
    hours: '월~금 08:00 – 21:00 / 주말 09:00 – 20:00',
    color: 'bg-green-50 border-green-200',
    badge: 'bg-green-100 text-green-700',
  },
  {
    name: '포항공과대학교 POSPLEX',
    category: '피트니스',
    icon: '🏊',
    address: '경북 포항시 남구 지곡로127번길 30',
    benefit: '헬스 · 필라테스 · 수영 10% 할인',
    details: '회원권 구매 시 할인 적용 (월회원 이상)',
    note: '병원 환자증 지참 필수',
    hours: '월~금 06:00 – 22:00 / 주말 08:00 – 18:00',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
  },
];

const hospitalBenefits = [
  {
    icon: '🕛',
    title: '직장인 점심 진료',
    subtitle: '점심시간 특별 진료 운영',
    desc: '바쁜 직장인을 위해 점심 시간대 진료를 운영합니다. 별도 예약 없이 방문 가능하며, 대기 시간을 최소화하기 위해 사전 예약을 권장합니다.',
    highlight: '12:00 – 13:30',
    tag: '예약 권장',
    color: 'bg-amber-50 border-amber-200',
    tagColor: 'bg-amber-100 text-amber-700',
    days: '월  · 수  · 금',
  },
  {
    icon: '🎓',
    title: 'P대학교 재학생 할인',
    subtitle: '재학생 진료비 20% 할인',
    desc: 'P대학교 재학생은 진료비 20% 할인 혜택을 받으실 수 있습니다. 방문 시 재학생 학생증을 지참해 주세요. 수술 및 특수 검사는 할인 대상에서 제외됩니다.',
    highlight: '진료비 20% 할인',
    tag: '학생증 필수',
    color: 'bg-indigo-50 border-indigo-200',
    tagColor: 'bg-indigo-100 text-indigo-700',
    days: '평일 진료 시간 전체',
  },
  {

    icon: '🦾',
    title: 'P공장, P구단 근로자 대상 보조기구 브랜드 제휴',
    subtitle: '척추 보조기 · 목 보조기 · 허리 지지대 전 제품',
    desc: 'P 공장, P 구단 근로자는 척추 보조기 · 목 보조기 · 허리 지지대 전 제품목에 대해 1회씩 5% 할인 가격으로 구매가 가능합니다. 병원 운영 시간에 원무과에서 구매가 가능합니다. 사원증을 가져와주세요.',
    highlight: '5% 할인',
    tag: '사원증 필수',
    color: 'bg-purple-50 border-purple-200',
    tagColor: 'bg-purple-100 text-purple-700',
    days: '병원 운영시간에 원무과에서 구매 가능',
  },
];

export default function PartnersPage() {
  return (
    <div>
      {/* 헤더 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-2 text-sm tracking-widest text-blue-200 uppercase">
            Benefits &amp; Partners
          </p>
          <h1 className="text-3xl font-bold md:text-4xl">제휴 혜택 안내</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
            P병원 환자와 지역 주민을 위한 특별 혜택을 소개합니다.
          </p>
        </div>
      </section>

      {/* 병원 특별 혜택 */}
      <section className="bg-gray-50 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Hospital Benefits
            </p>
            <h2 className="text-2xl font-bold text-gray-900">병원 특별 혜택</h2>
            <p className="mt-1 text-sm text-gray-500">
              P병원이 직접 제공하는 진료 혜택입니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {hospitalBenefits.map((b) => (
              <div
                key={b.title}
                className={`rounded-2xl border-2 ${b.color} p-6`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-4xl">{b.icon}</div>
                  <div className="flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {b.title}
                      </h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${b.tagColor}`}
                      >
                        {b.tag}
                      </span>
                    </div>
                    <p className="mb-3 text-sm font-semibold text-gray-600">
                      {b.subtitle}
                    </p>
                    <div className="mb-3 inline-block rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
                      <p className="text-xl font-extrabold text-blue-700">
                        {b.highlight}
                      </p>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-gray-600">
                      {b.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold">적용 요일</span>
                      <span>{b.days}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 제휴업체 */}
      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Partner Businesses
            </p>
            <h2 className="text-2xl font-bold text-gray-900">제휴업체 할인</h2>
            <p className="mt-1 text-sm text-gray-500">
              병원 환자증 지참 시 아래 혜택을 받으실 수 있습니다.
            </p>
          </div>
          <div className="space-y-5">
            {businessPartners.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border-2 ${p.color} p-6`}
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                  {/* 아이콘 & 이름 */}
                  <div className="flex shrink-0 items-center gap-3 md:w-36 md:flex-col md:items-start md:gap-2">
                    <div className="text-5xl">{p.icon}</div>
                    <div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${p.badge}`}
                      >
                        {p.category}
                      </span>
                      <p className="mt-1 text-base leading-snug font-bold text-gray-900">
                        {p.name}
                      </p>
                    </div>
                  </div>

                  {/* 구분선 */}
                  <div className="hidden w-px self-stretch bg-gray-200 md:block" />

                  {/* 상세 정보 */}
                  <div className="grid flex-1 gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                        할인 혜택
                      </p>
                      <p className="text-sm font-bold text-blue-700">
                        {p.benefit}
                      </p>
                      <p className="mt-0.5 text-sm text-gray-600">
                        {p.details}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                        주소
                      </p>
                      <p className="text-sm text-gray-700">{p.address}</p>
                      <p className="mt-3 mb-1 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                        운영시간
                      </p>
                      <p className="text-sm text-gray-700">{p.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-white/70 pt-4">
                  <p className="inline-block rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 text-xs text-amber-700">
                    ※ {p.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 추가 혜택 예정 배너 */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-2 text-sm text-blue-400">
            더 많은 혜택이 준비 중입니다
          </p>
          <h2 className="mb-2 text-xl font-bold text-blue-900">
            새로운 제휴업체 모집 중
          </h2>
          <p className="mx-auto mb-5 max-w-md text-sm text-blue-700">
            지역 내 우수 업체와의 제휴를 지속적으로 확대하고 있습니다.
            <br />
            문의는 병원 원무과로 연락해 주세요.
          </p>
          <a
            href="/location"
            className="inline-block rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
          >
            연락처 보기
          </a>
        </div>
      </section>
    </div>
  );
}
