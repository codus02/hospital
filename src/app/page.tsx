import Link from 'next/link';
import PromoPopup from '@/components/PromoPopup';

const stats = [
  { value: '15년+', label: '진료 경력' },
  { value: '3명', label: '척추 전문의' },
  { value: '8,000+', label: '연간 진료 환자' },
  { value: '98%', label: '환자 만족도' },
];

const values = [
  {
    icon: '🏥',
    color: 'bg-blue-100',
    title: '환자 중심 진료',
    desc: '환자의 입장에서 생각하고, 최선의 치료 방법을 함께 찾아갑니다.',
  },
  {
    icon: '🔬',
    color: 'bg-indigo-100',
    title: '정확한 진단',
    desc: '최신 영상 장비와 풍부한 임상 경험으로 정확한 진단을 제공합니다.',
  },
  {
    icon: '💙',
    color: 'bg-sky-100',
    title: '신뢰와 소통',
    desc: '충분한 설명과 상담으로 환자와 의료진이 함께 치료 방향을 결정합니다.',
  },
  {
    icon: '⚕️',
    color: 'bg-teal-100',
    title: '전문 척추 치료',
    desc: '척추 질환 전문 의료진이 비수술·수술 치료 전 과정을 책임집니다.',
  },
];

const quickLinks = [
  {
    href: '/doctors',
    label: '의료진 소개',
    icon: '👨‍⚕️',
    color: 'bg-blue-50 group-hover:bg-blue-100',
  },
  {
    href: '/about',
    label: '병원 소개',
    icon: '🏨',
    color: 'bg-indigo-50 group-hover:bg-indigo-100',
  },
  {
    href: '/location',
    label: '오시는 길',
    icon: '📍',
    color: 'bg-sky-50 group-hover:bg-sky-100',
  },
  {
    href: '/partners',
    label: '제휴 업체 소개',
    icon: '🤝',
    color: 'bg-teal-50 group-hover:bg-teal-100',
  },
];

const specialties = [
  { icon: '🦴', name: '디스크(추간판탈출증)' },
  { icon: '🔩', name: '척추관협착증' },
  { icon: '↩️', name: '척추측만증' },
  { icon: '🤕', name: '목 디스크' },
  { icon: '💥', name: '척추압박골절' },
  { icon: '😣', name: '만성 요통' },
];

export default function HomePage() {
  return (
    <div>
      <PromoPopup />

      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white">
        {/* 장식 원 */}
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/4 translate-y-1/2 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-100 uppercase backdrop-blur-sm">
            척추 전문 정형외과
          </span>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            P병원
          </h1>
          <p className="mb-4 text-2xl leading-tight font-bold text-white md:text-3xl">
            척추 통증, 더 이상 참지 마세요
          </p>
          <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-blue-100 md:text-lg">
            전문 의료진과 최신 장비로 정확히 진단하고,
            <br />
            당신에게 맞는 치료를 제공합니다.
          </p>
          <div className="mb-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/location"
              className="rounded-full bg-white px-7 py-3 font-bold text-blue-800 shadow-lg transition-colors hover:bg-blue-50"
            >
              오시는 길 보기
            </Link>
            <Link
              href="/doctors"
              className="rounded-full border-2 border-white/70 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              의료진 만나기
            </Link>
          </div>

          {/* 신뢰 지표 */}
          <div className="mx-auto grid max-w-xl grid-cols-4 gap-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/15 bg-white/10 px-2 py-3 backdrop-blur-sm"
              >
                <p className="text-lg font-extrabold text-white md:text-xl">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[10px] text-blue-200 md:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 빠른 링크 */}
      <section className="bg-white shadow-md">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-4 divide-x divide-gray-100">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center py-5 transition-colors hover:bg-gray-50"
              >
                <span
                  className={`mb-2 flex h-11 w-11 items-center justify-center rounded-full text-2xl transition-colors ${link.color}`}
                >
                  {link.icon}
                </span>
                <span className="text-xs font-medium text-gray-700 transition-colors group-hover:text-blue-700 md:text-sm">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 병원 가치관 */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Our Values
            </p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              우리 병원이 추구하는 가치
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${v.color}`}
                >
                  {v.icon}
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{v.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 진료 분야 */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Specialties
            </p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              주요 진료 분야
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {specialties.map((item) => (
              <div
                key={item.name}
                className="group flex items-center gap-3 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-4 transition-all hover:border-blue-300 hover:shadow-sm"
              >
                <span className="shrink-0 text-xl">{item.icon}</span>
                <span className="text-sm font-medium text-gray-800 transition-colors group-hover:text-blue-700">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 제휴 혜택 띠 배너 */}
      <section className="bg-indigo-600 px-4 py-5">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-indigo-600">
              NEW
            </span>
            <p className="text-sm font-medium text-white">
              직장인 점심 진료 · P대생 20% 할인 · 써브웨이 30% 제휴 할인 운영 중
            </p>
          </div>
          <Link
            href="/partners"
            className="shrink-0 rounded-full border border-indigo-400 px-4 py-2 text-xs font-semibold text-indigo-100 transition-colors hover:border-white hover:text-white"
          >
            혜택 보러 가기 →
          </Link>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-blue-200 uppercase">
            Contact Us
          </p>
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            지금 바로 상담 받으세요
          </h2>
          <p className="mx-auto mb-7 max-w-md text-blue-100">
            전화 한 통으로 척추 전문가와 연결됩니다.
            <br />
            빠르고 친절하게 안내해 드립니다.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/location"
              className="inline-block rounded-full bg-white px-8 py-3 font-bold text-blue-800 shadow-md transition-colors hover:bg-blue-50"
            >
              연락처 확인하기
            </Link>
            <Link
              href="/self-check"
              className="inline-block rounded-full border-2 border-white/70 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              자가진단 해보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
