import Image from 'next/image';
import Link from 'next/link';
import DiabetesDietToggle from './_components/DiabetesDietToggle';

export default function ClinicsPage() {
  return (
    <div>
      {/* 헤더 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-200 text-sm tracking-wide uppercase mb-2">Special Clinics</p>
          <h1 className="text-3xl md:text-4xl font-bold">전문 클리닉</h1>
          <p className="mt-3 text-blue-100 max-w-lg mx-auto">
            만성 질환부터 생활 습관 개선까지, 전문 의료진이 맞춤형으로 관리합니다.
          </p>
        </div>
      </section>

      {/* 클리닉 한눈에 보기 */}
      <section className="bg-white py-12 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
              척추 질환은 당뇨가 있으면 재발 확률이{' '}
              <strong className="text-amber-600">4배 이상</strong>,{' '}
              흡연자는 <strong className="text-red-500">3배 이상</strong> 높아집니다.
              비만도 척추 재발에 영향을 미칩니다.
              <span className="text-gray-400 text-xs mt-2 block">
                P병원은 척추 치료와 함께 근본 원인을 관리하는 전문 클리닉을 운영합니다.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { href: '#diabetes', icon: '🩸', label: '당뇨 클리닉', borderColor: 'border-amber-200 hover:border-amber-400', iconBg: 'bg-amber-50' },
              { href: '#obesity',  icon: '⚖️', label: '비만 클리닉', borderColor: 'border-green-200 hover:border-green-400', iconBg: 'bg-green-50' },
              { href: '#smoking',  icon: '🚭', label: '금연 클리닉', borderColor: 'border-red-200 hover:border-red-400',   iconBg: 'bg-red-50' },
            ].map((clinic) => (
              <a
                key={clinic.label}
                href={clinic.href}
                className={`flex flex-col items-center text-center rounded-2xl border-2 ${clinic.borderColor} p-3 sm:p-5 transition-all hover:shadow-md`}
              >
                <span
                  className={`w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl text-2xl sm:text-3xl mb-2 sm:mb-3 shrink-0 ${clinic.iconBg}`}
                >
                  {clinic.icon}
                </span>
                <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                  {clinic.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 당뇨 클리닉 */}
      <section id="diabetes" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-xl shrink-0">
              🩸
            </span>
            <div>
              <p className="text-amber-600 text-xs font-semibold tracking-wide uppercase">
                Diabetes Clinic
              </p>
              <h2 className="text-2xl font-bold text-gray-900">당뇨 클리닉</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                당뇨병은 꾸준한 관리가 핵심입니다. P병원 당뇨 클리닉은 혈당 조절부터 합병증 예방,
                식이 관리까지 환자 개인에 맞는 종합적인 관리 프로그램을 제공합니다.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
                  <h3 className="font-bold text-amber-800 mb-2">당뇨 전용 입원 식단</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    입원 중인 당뇨 환자에게는 일반식 대신{' '}
                    <strong>당뇨 전용 식단</strong>을 제공합니다. 영양사가 혈당 부하를 고려해
                    설계한 식단으로, 입원 기간에도 혈당을 안정적으로 유지할 수 있습니다.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <h3 className="font-bold text-gray-800 mb-1">주요 진료 내용</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    {[
                      '혈당 모니터링 및 약물 조절',
                      '당화혈색소(HbA1c) 정기 검사',
                      '합병증(망막·신장·신경) 예방 관리',
                      '저혈당 응급 대처 교육',
                      '개인 맞춤 식이·운동 상담',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-amber-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              <Image
                src="/meal.png"
                alt="당뇨 클리닉 안내"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="bg-amber-50 p-4">
                <p className="text-center text-xs font-medium text-amber-700">
                  당뇨 환자 입원 시 전용 식단 제공 — 별도 신청 없이 자동 적용됩니다.
                </p>
              </div>
            </div>
          </div>
          <DiabetesDietToggle />
        </div>
      </section>

      {/* 비만 클리닉 */}
      <section id="obesity" className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-xl shrink-0">
              ⚖️
            </span>
            <div>
              <p className="text-green-600 text-xs font-semibold tracking-wide uppercase">
                Obesity Clinic
              </p>
              <h2 className="text-2xl font-bold text-gray-900">비만 클리닉</h2>
            </div>
          </div>

          <p className="mb-8 max-w-2xl leading-relaxed text-gray-600">
            비만은 당뇨·고혈압·관절 질환 등 다양한 질환의 원인이 됩니다. 의학적 근거를 바탕으로
            체중 감량과 건강한 체중 유지를 함께 도와드립니다.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                💉
              </div>
              <h3 className="mb-2 font-bold text-gray-900">위고비 (Wegovy)</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                GLP-1 수용체 작용제 계열의 주 1회 피하주사 비만 치료제입니다. 식욕 억제와 체중
                감량 효과가 임상에서 검증되어 있으며, 의사 처방 후 병원에서 구매 가능합니다.
              </p>
              <span className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                원내 처방·판매
              </span>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                💊
              </div>
              <h3 className="mb-2 font-bold text-gray-900">마운자로 (Mounjaro)</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                GIP·GLP-1 이중 작용제로 혈당 조절과 체중 감량 효과를 동시에 기대할 수 있습니다.
                특히 당뇨를 동반한 비만 환자에게 적합하며, 의사 진료 후 처방받으실 수 있습니다.
              </p>
              <span className="mt-3 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                원내 처방·판매
              </span>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:col-span-2 md:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                🏋️
              </div>
              <h3 className="mb-2 font-bold text-gray-900">운동 제휴 프로그램</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                약물 치료와 병행하는 운동 습관이 장기적인 체중 유지에 핵심입니다. 제휴 피트니스
                센터와 연계하여 의료진 권고에 맞춘 맞춤 운동 프로그램을 안내해 드립니다.
              </p>
              <span className="mt-3 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                제휴 센터 안내
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            <strong>안내:</strong> 비만 치료제는 반드시 의사 진료 후 처방이 필요합니다. 부작용
            여부 및 본인 적합성을 먼저 상담받으세요.
          </div>
        </div>
      </section>

      {/* 금연 클리닉 */}
      <section id="smoking" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-xl shrink-0">
              🚭
            </span>
            <div>
              <p className="text-red-500 text-xs font-semibold tracking-wide uppercase">
                Smoking Cessation
              </p>
              <h2 className="text-2xl font-bold text-gray-900">금연 클리닉</h2>
            </div>
          </div>

          <p className="mb-8 max-w-2xl leading-relaxed text-gray-600">
            금연은 혼자 하기 어렵습니다. P병원과 지역 보건소가 함께 도와드립니다. 병원의 의학적
            지원과 보건소의 무료 프로그램을 병행하면 성공률이 크게 높아집니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-red-900">
                <span>🏥</span> P병원 금연 서비스
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  { icon: '🩹', text: '니코틴 패치 처방 및 제공' },
                  { icon: '💬', text: '금연 상담 (진료 예약 후 진행)' },
                  { icon: '💊', text: '금연 보조 약물 처방 (바레니클린 등)' },
                  { icon: '📋', text: '흡연력 및 건강 상태 평가' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="shrink-0 text-base">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-gray-900">
                <span>🏛️</span> 포항시 보건소 금연 클리닉
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                보건소 금연 클리닉은 <strong>무료</strong>로 이용 가능하며, 금연 보조제·상담·등록
                관리 등 체계적인 지원을 받을 수 있습니다. 병원 치료와 병행하시면 더욱 효과적입니다.
              </p>
              <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4">
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {[
                    '금연 보조제 무료 지원 (니코틴 패치·껌 등)',
                    '1:1 금연 상담 및 6개월 등록 관리',
                    '금연 성공 시 소정의 인센티브 제공',
                    '전화·방문 상담 모두 가능',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-emerald-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="https://www.pohang.go.kr/health/contents.do?mid=0306020000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-800 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
              >
                포항시 보건소 금연 클리닉 바로가기
                <span className="text-xs text-gray-400">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-14 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">클리닉 상담 예약</h2>
          <p className="mb-7 max-w-md mx-auto text-blue-100">
            어떤 클리닉이 필요한지 잘 모르시겠다면 먼저 전화로 문의해 주세요. 친절하게 안내해
            드립니다.
          </p>
          <Link
            href="/location"
            className="inline-block rounded-full bg-white px-8 py-3 font-bold text-blue-800 shadow-md transition-colors hover:bg-blue-50"
          >
            연락처 확인하기
          </Link>
        </div>
      </section>
    </div>
  );
}
