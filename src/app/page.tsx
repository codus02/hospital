import Link from "next/link";

const values = [
  {
    icon: "🏥",
    title: "환자 중심 진료",
    desc: "환자의 입장에서 생각하고, 최선의 치료 방법을 함께 찾아갑니다.",
  },
  {
    icon: "🔬",
    title: "정확한 진단",
    desc: "최신 영상 장비와 풍부한 임상 경험으로 정확한 진단을 제공합니다.",
  },
  {
    icon: "💙",
    title: "신뢰와 소통",
    desc: "충분한 설명과 상담으로 환자와 의료진이 함께 치료 방향을 결정합니다.",
  },
  {
    icon: "⚕️",
    title: "전문 척추 치료",
    desc: "척추 질환 전문 의료진이 비수술·수술 치료 전 과정을 책임집니다.",
  },
];

const quickLinks = [
  { href: "/doctors", label: "의료진 소개", icon: "👨‍⚕️" },
  { href: "/about", label: "병원 소개", icon: "🏨" },
  { href: "/location", label: "오시는 길", icon: "📍" },
  { href: "/login", label: "로그인", icon: "🔐" },
];

export default function HomePage() {
  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-3">P병원</h1>
          <p className="text-blue-200 text-sm font-medium tracking-widest uppercase mb-5">
            척추 전문 정형외과
          </p>
          <p className="text-2xl md:text-3xl font-bold leading-tight mb-5">
            척추 통증, 더 이상 참지 마세요
          </p>
          <p className="text-blue-100 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            전문 의료진과 최신 장비로 정확히 진단하고,<br />
            당신에게 맞는 치료를 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/location"
              className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              오시는 길 보기
            </Link>
            <Link
              href="/doctors"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-800 transition-colors"
            >
              의료진 만나기
            </Link>
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
                className="flex flex-col items-center py-5 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-2xl mb-1">{link.icon}</span>
                <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-blue-700">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
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
            {[
              "디스크(추간판탈출증)",
              "척추관협착증",
              "척추측만증",
              "목 디스크",
              "척추압박골절",
              "만성 요통",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-4 border border-blue-100"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="bg-blue-700 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">지금 바로 상담 받으세요</h2>
          <p className="text-blue-100 mb-6">전화 한 통으로 척추 전문가와 연결됩니다.</p>
          <Link
            href="/location"
            className="inline-block bg-white text-blue-800 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            연락처 확인하기
          </Link>
        </div>
      </section>
    </div>
  );
}
