const doctors = [
  {
    name: '한원석',
    title: '원장',
    specialty: '척추 내시경 수술, 척추관협착증',
    career: [
      '○○대학교 의과대학 졸업',
      '○○대학교병원 정형외과 전공의',
      '척추 전문의 자격 취득',
      '대한척추외과학회 정회원',
    ],
    placeholder: true,
  },
  {
    name: '송홍준',
    title: '부원장',
    specialty: '디스크, 척추측만증, 최소침습수술',
    career: [
      '○○대학교 의과대학 졸업',
      '○○대학병원 정형외과 전공의',
      '미국 척추 전문 연수',
      '대한정형외과학회 정회원',
    ],
    placeholder: true,
  },
  {
    name: '차연주',
    title: '진료 과장',
    specialty: '비수술 통증 치료, 재활의학',
    career: [
      '○○대학교 의과대학 졸업',
      '통증의학과 전문의',
      '척추 재활 전문 연수',
      '대한통증학회 정회원',
    ],
    placeholder: true,
  },
];

export default function DoctorsPage() {
  return (
    <div>
      {/* 헤더 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-200 text-sm tracking-widest uppercase mb-2">
            Medical Team
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">의료진 소개</h1>
          <p className="mt-3 text-blue-100">
            척추 전문 의료진이 최선을 다해 진료합니다.
          </p>
        </div>
      </section>

      {/* 의료진 목록 */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {doctors.map((doc, idx) => (
              <div
                key={doc.name}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6"
              >
                {/* 사진 플레이스홀더 */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-5xl">
                    👨‍⚕️
                  </div>
                  <p className="mt-2 text-xs text-gray-400"></p>
                </div>

                {/* 정보 */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h2 className="text-xl font-bold text-gray-900">
                      {doc.name}
                    </h2>
                    <span className="text-blue-600 text-sm font-medium">
                      {doc.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    전문분야: {doc.specialty}
                  </p>

                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    학력 및 경력
                  </h3>
                  <ul className="space-y-1">
                    {doc.career.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* {doc.placeholder && (
                    <p className="mt-3 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 inline-block">
                      * 의료진 정보 제공 시 업데이트 예정
                    </p>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진료 안내 배너 */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            진료 예약 및 문의
          </h2>
          <p className="text-blue-700 text-sm mb-5">
            전화 또는 방문을 통해 전문의 상담을 받으실 수 있습니다.
          </p>
          <a
            href="/location"
            className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
          >
            연락처 보기
          </a>
        </div>
      </section>
    </div>
  );
}
