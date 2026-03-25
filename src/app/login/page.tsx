"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type LoginType = "doctor" | "patient";

export default function LoginPage() {
  const router = useRouter();
  const [loginType, setLoginType] = useState<LoginType>("patient");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // 프론트 시연용: 아이디/비밀번호 무관하게 해당 대시보드로 이동
    if (loginType === "doctor") {
      router.push("/dashboard/doctor");
    } else {
      router.push("/dashboard/patient");
    }
  }

  return (
    <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-blue-800 font-bold text-2xl">척추전문병원</span>
          </Link>
          <p className="text-gray-500 text-sm mt-1">로그인</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* 로그인 타입 선택 */}
          <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
            <button
              type="button"
              onClick={() => setLoginType("patient")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                loginType === "patient"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              환자 로그인
            </button>
            <button
              type="button"
              onClick={() => setLoginType("doctor")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                loginType === "doctor"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              의료진 로그인
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {loginType === "doctor" ? "의료진 ID" : "환자 ID"}
              </label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder={loginType === "doctor" ? "의료진 ID 입력" : "환자 ID 입력"}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호 입력"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition-colors mt-2"
            >
              {loginType === "doctor" ? "의료진으로 로그인" : "환자로 로그인"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              {loginType === "doctor"
                ? "의료진 계정은 병원 관리자에게 문의하세요."
                : "계정이 없으신가요? 원무과에 문의하세요."}
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-400 hover:text-blue-600 transition-colors">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
