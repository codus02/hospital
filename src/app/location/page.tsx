const hours = [
  { day: "월~금", time: "09:00 ~ 18:00" },
  { day: "토요일", time: "09:00 ~ 13:00" },
  { day: "일·공휴일", time: "휴진" },
  { day: "점심시간", time: "13:00 ~ 14:00" },
];

const ADDRESS = "포항시 남구 지곡로127번길 65";
const PHONE = "051-xxxx-xxxx";
const EMAIL = "phospital@gmail.com";

export default function LocationPage() {
  return (
    <div>
      {/* 헤더 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-200 text-sm tracking-widest uppercase mb-2">Location & Contact</p>
          <h1 className="text-3xl md:text-4xl font-bold">오시는 길</h1>
          <p className="mt-3 text-blue-100">P병원 위치 및 연락처 안내입니다.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 연락처 정보 */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">연락처</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl shrink-0">📞</span>
                    <div>
                      <p className="text-sm text-gray-500">전화번호</p>
                      <a
                        href={`tel:${PHONE.replace(/-/g, "")}`}
                        className="font-bold text-gray-900 text-lg hover:text-blue-700 transition-colors"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl shrink-0">📧</span>
                    <div>
                      <p className="text-sm text-gray-500">이메일</p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="font-semibold text-gray-900 hover:text-blue-700 transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">주소</h2>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl shrink-0">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">{ADDRESS}</p>
                    <p className="text-sm text-gray-500 mt-1">P병원</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">진료 시간</h2>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">{h.day}</span>
                      <span className={`font-semibold ${h.time === "휴진" ? "text-red-500" : "text-gray-900"}`}>
                        <span className={`font-semibold ${h.time === "13:00 ~ 14:00" ? "text-red-500" : "text-gray-900"}`}></span>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 지도 */}
            <div className="flex flex-col gap-4">
              {/* 지도 iframe - 카카오맵 */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: "340px" }}>
                <iframe
                  src={`https://map.kakao.com/link/map/P병원,36.0012,129.3315`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="P병원 위치"
                />
              </div>

              {/* 지도 앱으로 열기 버튼 */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm py-3 rounded-xl transition-colors"
                >
                  <span>🗺️</span> 카카오맵으로 보기
                </a>
                <a
                  href={`https://map.naver.com/v5/search/${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
                >
                  <span>🗺️</span> 네이버맵으로 보기
                </a>
              </div>
            </div>
          </div>

          {/* 교통 안내 */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">교통 안내</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: "🚌", label: "버스", desc: "1,2,3,4 버스" },
                { icon: "🚗", label: "자가용·주차", desc: "당일 무료 주차 지원" },
                { icon: "🏥", label: "주변 랜드마크", desc: "포스코 공장" },
              ].map((t) => (
                <div key={t.label} className="flex items-start gap-3">
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.label}</p>
                    <p className="text-gray-500 text-sm">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
