"use client";

import { useState } from "react";
import Link from "next/link";

type Answer = "yes" | "no" | null;
type Occupation = "construction" | "athlete" | "self-employed" | "office" | "other" | null;

interface Answers {
  smoking: Answer;
  diabetes: Answer;
  cardiovascular: Answer;
  occupation: Occupation;
}

function calcScore(answers: Answers): number {
  let score = 0;
  if (answers.smoking === "yes") score += 2;
  if (answers.diabetes === "yes") score += 2;
  if (answers.cardiovascular === "yes") score += 1;
  if (
    answers.occupation === "construction" ||
    answers.occupation === "athlete" ||
    answers.occupation === "self-employed" ||
    answers.occupation === "office"
  )
    score += 2;
  return score;
}

function getRiskLevel(score: number): {
  label: string;
  color: string;
  bg: string;
  border: string;
  desc: string;
} {
  if (score >= 5)
    return {
      label: "고위험군",
      color: "text-red-700",
      bg: "bg-red-50",
      border: "border-red-300",
      desc: "척추 관련 위험 요인이 높습니다. 전문 의료진과의 상담이 권장됩니다.",
    };
  if (score >= 3)
    return {
      label: "주의군",
      color: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-300",
      desc: "일부 위험 요인이 있습니다. 정기적인 검진을 통해 척추 건강을 확인해 보세요.",
    };
  return {
    label: "저위험군",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-300",
    desc: "현재 위험 요인이 낮습니다. 꾸준한 운동과 올바른 자세로 척추 건강을 유지하세요.",
  };
}

const occupationOptions: { value: Occupation; label: string }[] = [
  { value: "construction", label: "건설업" },
  { value: "athlete", label: "운동선수" },
  { value: "self-employed", label: "자영업" },
  { value: "office", label: "사무직" },
  { value: "other", label: "기타" },
];

export default function SelfCheckPage() {
  const [answers, setAnswers] = useState<Answers>({
    smoking: null,
    diabetes: null,
    cardiovascular: null,
    occupation: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const allAnswered =
    answers.smoking !== null &&
    answers.diabetes !== null &&
    answers.cardiovascular !== null &&
    answers.occupation !== null;

  function handleSubmit() {
    if (allAnswered) setSubmitted(true);
  }

  function handleReset() {
    setAnswers({ smoking: null, diabetes: null, cardiovascular: null, occupation: null });
    setSubmitted(false);
  }

  const score = calcScore(answers);
  const risk = getRiskLevel(score);

  return (
    <div>
      {/* 헤더 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-200 text-sm tracking-widest uppercase mb-2">Self Check</p>
          <h1 className="text-3xl md:text-4xl font-bold">척추 건강 자가진단</h1>
          <p className="mt-3 text-blue-100 text-sm">
            몇 가지 질문으로 척추 질환 위험도를 간단히 확인해 보세요.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 min-h-[60vh]">
        <div className="max-w-xl mx-auto">
          {!submitted ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
              <p className="text-xs text-gray-400 text-center">
                * 이 진단은 참고용이며, 정확한 진단은 반드시 전문의에게 받으시기 바랍니다.
              </p>

              {/* Q1 흡연 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  <span className="text-blue-600 mr-1">Q1.</span> 흡연 여부
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {(["yes", "no"] as Answer[]).map((val) => (
                    <button
                      key={val}
                      onClick={() => setAnswers((a) => ({ ...a, smoking: val }))}
                      className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                        answers.smoking === val
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 text-gray-600 hover:border-blue-300"
                      }`}
                    >
                      {val === "yes" ? "흡연자" : "비흡연자"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q2 당뇨 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  <span className="text-blue-600 mr-1">Q2.</span> 당뇨 여부
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {(["yes", "no"] as Answer[]).map((val) => (
                    <button
                      key={val}
                      onClick={() => setAnswers((a) => ({ ...a, diabetes: val }))}
                      className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                        answers.diabetes === val
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 text-gray-600 hover:border-blue-300"
                      }`}
                    >
                      {val === "yes" ? "있음" : "없음"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q3 심혈관질환 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  <span className="text-blue-600 mr-1">Q3.</span> 심혈관질환 여부
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {(["yes", "no"] as Answer[]).map((val) => (
                    <button
                      key={val}
                      onClick={() => setAnswers((a) => ({ ...a, cardiovascular: val }))}
                      className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                        answers.cardiovascular === val
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 text-gray-600 hover:border-blue-300"
                      }`}
                    >
                      {val === "yes" ? "있음" : "없음"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q4 직업군 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  <span className="text-blue-600 mr-1">Q4.</span> 직업군
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {occupationOptions.map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => setAnswers((a) => ({ ...a, occupation: value }))}
                      className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                        answers.occupation === value
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 text-gray-600 hover:border-blue-300"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
                  allAnswered
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                결과 확인하기
              </button>
            </div>
          ) : (
            /* 결과 화면 */
            <div className="space-y-5">
              <div className={`rounded-2xl border-2 ${risk.border} ${risk.bg} p-8 text-center shadow-sm`}>
                <p className="text-sm font-semibold text-gray-500 mb-2">자가진단 결과</p>
                <div className={`text-4xl font-extrabold ${risk.color} mb-3`}>{risk.label}</div>
                <p className={`text-sm leading-relaxed ${risk.color}`}>{risk.desc}</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                <p className="text-blue-800 font-semibold text-sm mb-1">
                  정확한 진단은 병원에서 받으세요
                </p>
                <p className="text-blue-600 text-xs leading-relaxed">
                  이 결과는 단순 참고용입니다. 실제 척추 건강 상태는 전문 의료진의<br />
                  진찰과 영상 검사를 통해서만 정확히 확인할 수 있습니다.
                </p>
                <Link
                  href="/location"
                  className="inline-block mt-4 bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-800 transition-colors"
                >
                  P병원 방문 안내 →
                </Link>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                다시 진단하기
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
