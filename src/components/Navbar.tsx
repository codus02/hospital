"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "병원 소개" },
  { href: "/doctors", label: "의료진" },
  { href: "/location", label: "오시는 길" },
  { href: "/self-check", label: "자가진단하기" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-baseline gap-1 leading-tight">
            <span className="text-blue-800 font-extrabold text-2xl tracking-tight">P병원</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === link.href ? "text-blue-700 border-b-2 border-blue-700 pb-0.5" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="ml-2 bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-800 transition-colors"
            >
              로그인
            </Link>
          </nav>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-gray-600 transition-all" />
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-gray-50 ${
                pathname === link.href ? "text-blue-700" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 text-center bg-blue-700 text-white text-sm font-medium py-2.5 rounded-full"
          >
            로그인
          </Link>
        </div>
      )}
    </header>
  );
}
