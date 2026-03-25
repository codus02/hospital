import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 병원 정보 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">P병원</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              환자 중심의 척추 전문 정형외과<br />
              최고의 의료진과 최신 장비로<br />
              정확한 진단과 치료를 제공합니다.
            </p>
          </div>

          {/* 빠른 메뉴 */}
          <div>
            <h3 className="text-white font-semibold mb-3">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">병원 소개</Link></li>
              <li><Link href="/doctors" className="hover:text-white transition-colors">의료진 소개</Link></li>
              <li><Link href="/location" className="hover:text-white transition-colors">오시는 길</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">로그인</Link></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-white font-semibold mb-3">연락처</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>전화: 051-xxxx-xxxx</li>
              <li>주소: 경북 포항시 남구 지곡로127번길 65</li>
              <li>월~금 09:00~18:00 / 토 09:00~13:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          © 2025 P병원. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
