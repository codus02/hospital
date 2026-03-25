const history = [
  { year: "2010", event: "척추전문병원 개원" },
  { year: "2013", event: "척추 내시경 수술 도입" },
  { year: "2016", event: "로봇 수술 시스템 도입" },
  { year: "2019", event: "최신 MRI·CT 장비 도입" },
  { year: "2022", event: "비수술 통증 치료 센터 개설" },
  { year: "2025", event: "척추 재활 전문 센터 확장 개소" },
];

const facilities = [
  { name: "MRI", desc: "3.0T 고해상도 MRI" },
  { name: "CT", desc: "128채널 고속 CT" },
  { name: "수술실", desc: "최신 척추 전용 수술실 3실" },
  { name: "물리치료실", desc: "전문 재활 물리치료실" },
  { name: "통증치료실", desc: "비수술 통증 치료 전용 공간" },
  { name: "회복실", desc: "24시간 모니터링 회복실" },
];

export default function AboutPage() {
  return (
    <div>
      {/* 헤더 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-200 text-sm tracking-widest uppercase mb-2">About Us</p>
          <h1 className="text-3xl md:text-4xl font-bold">병원 소개</h1>
          <p className="mt-3 text-blue-100">환자를 최우선으로 생각하는 척추 전문 병원입니다.</p>
        </div>
      </section>

      {/* 병원 소개 */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                척추 분야 최고의 전문성으로<br />환자의 일상을 회복합니다
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                저희 병원은 2010년 개원 이래 척추 전문 정형외과로서 수많은 환자들의 건강을 책임져 왔습니다.
                디스크, 척추관협착증, 측만증 등 다양한 척추 질환을 비수술부터 수술까지 환자 맞춤형으로 치료합니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                정확한 진단을 바탕으로 최소 침습 수술과 재활 치료를 통해 환자가 빠르게 일상으로 돌아올 수 있도록
                최선을 다하고 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "10,000+", label: "누적 치료 환자" },
                { num: "15년+", label: "진료 경력" },
                { num: "5명", label: "전문의" },
                { num: "98%", label: "환자 만족도" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100"
                >
                  <div className="text-2xl font-bold text-blue-700">{stat.num}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 병원 가치관 */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">병원의 핵심 가치</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "환자 우선주의",
                desc: "모든 의사결정의 중심에는 항상 환자가 있습니다. 치료 계획부터 사후 관리까지 환자의 회복과 삶의 질 향상을 최우선으로 합니다.",
                color: "border-blue-400",
              },
              {
                title: "의학적 탁월성",
                desc: "지속적인 학습과 연구를 통해 최신 치료법을 도입하고, 높은 수준의 의료 서비스를 제공합니다.",
                color: "border-green-400",
              },
              {
                title: "투명한 소통",
                desc: "진단 결과와 치료 방법을 쉬운 언어로 충분히 설명하여 환자가 직접 치료 결정에 참여할 수 있도록 합니다.",
                color: "border-purple-400",
              },
            ].map((v) => (
              <div
                key={v.title}
                className={`bg-white rounded-2xl p-6 border-t-4 ${v.color} shadow-sm`}
              >
                <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">병원 연혁</h2>
          </div>
          <div className="relative border-l-2 border-blue-200 ml-6">
            {history.map((h) => (
              <div key={h.year} className="mb-8 ml-6">
                <div className="absolute -left-2.5 w-5 h-5 rounded-full bg-blue-600 border-2 border-white" />
                <span className="text-blue-700 font-bold text-sm">{h.year}</span>
                <p className="text-gray-700 mt-1">{h.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시설 */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">주요 시설 및 장비</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilities.map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-blue-700 mb-1">{f.name}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
