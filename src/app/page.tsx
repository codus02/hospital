import Link from "next/link";
import PromoPopup from "@/components/PromoPopup";

const stats = [
  { value: "15년+", label: "진료 경력" },
  { value: "3명", label: "척추 전문의" },
  { value: "8,000+", label: "연간 진료 환자" },
  { value: "98%", label: "환자 만족도" },
];

const values = [
  {
    icon: "🏥",
    color: "bg-blue-100",
    title: "환자 중심 진료",
    desc: "환자의 입장에서 생각하고, 최선의 치료 방법을 함께 찾아갑니다.",
  },
  {
    icon: "🔬",
    color: "bg-indigo-100",
    title: "정확한 진단",
    desc: "최신 영상 장비와 풍부한 임상 경험으로 정확한 진단을 제공합니다.",
  },
  {
    icon: "💙",
    color: "bg-sky-100",
    title: "신뢰와 소통",
    desc: "충분한 설명과 상담으로 환자와 의료진이 함께 치료 방향을 결정합니다.",
  },
  {
    icon: "⚕️",
    color: "bg-teal-100",
    title: "전문 척추 치료",
    desc: "척추 질환 전문 의료진이 비수술·수술 치료 전 과정을 책임집니다.",
  },
];

const quickLinks = [
  { href: "/doctors", label: "의료진 소개", icon: "👨‍⚕️", color: "bg-blue-50 group-hover:bg-blue-100" },
  { href: "/about", label: "병원 소개", icon: "🏨", color: "bg-indigo-50 group-hover:bg-indigo-100" },
  { href: "/location", label: "오시는 길", icon: "📍", color: "bg-sky-50 group-hover:bg-sky-100" },
  { href: "/login", label: "로그인", icon: "🔐", color: "bg-teal-50 group-hover:bg-teal-100" },
];

const specialties = [
  { icon: "🦴", name: "디스크(추간판탈출증)" },
  { icon: "🔩", name: "척추관협착증" },
  { icon: "↩️", name: "척추측만증" },
  { icon: "🤕", name: "목 디스크" },
  { icon: "💥", name: "척추압박골절" },
  { icon: "😣", name: "만성 요통" },
];

export default function HomePage() {
  return (
    <div>
      <PromoPopup />

      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white overflow-hidden">
        {/* 장식 원 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-blue-100 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border border-white/20">
            척추 전문 정형외과
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">P병원</h1>
          <p className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-white">
            척추 통증, 더 이상 참지 마세요
          </p>
          <p className="text-blue-100 text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            전문 의료진과 최신 장비로 정확히 진단하고,<br />
            당신에게 맞는 치료를 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/location"
              className="bg-white text-blue-800 font-bold px-7 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              오시는 길 보기
            </Link>
            <Link
              href="/doctors"
              className="border-2 border-white/70 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              의료진 만나기
            </Link>
          </div>

          {/* 신뢰 지표 */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-2 py-3 border border-white/15">
                <p className="text-lg md:text-xl font-extrabold text-white">{s.value}</p>
                <p className="text-blue-200 text-[10px] md:text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 빠른 링크 */}
      <section className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-4 divide-x divide-gray-100">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center py-5 hover:bg-gray-50 transition-colors group"
              >
                <span className={`text-2xl mb-2 w-11 h-11 flex items-center justify-center rounded-full transition-colors ${link.color}`}>
                  {link.icon}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 병원 가치관 */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">Our Values</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">저희 병원이 추구하는 가치</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className={`text-3xl mb-3 w-14 h-14 flex items-center justify-center rounded-2xl mx-auto ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 진료 분야 */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">Specialties</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">주요 진료 분야</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specialties.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl px-4 py-4 border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <span className="text-xl shrink-0">{item.icon}</span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 제휴 혜택 띠 배너 */}
      <section className="bg-indigo-600 py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-white text-indigo-600 text-xs font-bold px-2.5 py-1 rounded-full shrink-0">NEW</span>
            <p className="text-white text-sm font-medium">직장인 점심 진료 · P대생 20% 할인 · 써브웨이 30% 제휴 할인 운영 중</p>
          </div>
          <Link
            href="/partners"
            className="shrink-0 text-xs font-semibold text-indigo-100 hover:text-white border border-indigo-400 hover:border-white px-4 py-2 rounded-full transition-colors"
          >
            혜택 보러 가기 →
          </Link>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-3">Contact Us</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">지금 바로 상담 받으세요</h2>
          <p className="text-blue-100 mb-7 max-w-md mx-auto">전화 한 통으로 척추 전문가와 연결됩니다.<br />빠르고 친절하게 안내해 드립니다.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/location"
              className="inline-block bg-white text-blue-800 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-md"
            >
              연락처 확인하기
            </Link>
            <Link
              href="/self-check"
              className="inline-block border-2 border-white/70 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              자가진단 해보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
