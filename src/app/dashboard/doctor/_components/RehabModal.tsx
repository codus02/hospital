'use client';

import { useState } from 'react';
import {
  rehabPatients,
  rehabStyle,
  RehabPatient,
  RehabStatus,
} from '../_data';

export default function RehabModal({ onClose }: { onClose: () => void }) {
  const [selectedRehab, setSelectedRehab] = useState<RehabPatient | null>(null);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
      <div className="flex max-h-[92vh] w-full flex-col rounded-t-3xl bg-white shadow-xl sm:max-w-lg sm:rounded-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 pt-5 pb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">환자 재활 현황</h2>
            <p className="mt-0.5 text-xs text-gray-400">
              담당 환자 재활 치료 방문 현황
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              setSelectedRehab(null);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {selectedRehab ? (
          <div className="flex flex-col overflow-y-auto">
            <button
              onClick={() => setSelectedRehab(null)}
              className="flex items-center gap-1 px-6 pt-4 pb-2 text-sm text-blue-600 hover:text-blue-800"
            >
              ← 목록으로
            </button>
            <div className="px-6 pb-6">
              <div
                className={`mb-4 rounded-2xl border-2 p-5 ${
                  selectedRehab.status === 'bad'
                    ? 'border-red-200 bg-red-50'
                    : selectedRehab.status === 'warn'
                      ? 'border-amber-200 bg-amber-50'
                      : 'border-emerald-200 bg-emerald-50'
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${rehabStyle[selectedRehab.status].badge}`}
                  >
                    {rehabStyle[selectedRehab.status].label}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedRehab.name}
                </h3>
                <p className="mt-0.5 text-sm text-gray-500">
                  {selectedRehab.age} · {selectedRehab.diagnosis}
                </p>
              </div>

              <div className="mb-4 rounded-xl border border-gray-100 bg-white p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-semibold text-gray-500">
                    재활 출석률
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    {selectedRehab.completed} / {selectedRehab.prescribed}회
                    <span className="ml-1 text-xs font-normal text-gray-400">
                      (
                      {Math.round(
                        (selectedRehab.completed / selectedRehab.prescribed) *
                          100
                      )}
                      %)
                    </span>
                  </p>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full ${rehabStyle[selectedRehab.status].bar}`}
                    style={{
                      width: `${Math.round((selectedRehab.completed / selectedRehab.prescribed) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-2 text-xs font-semibold text-gray-500">
                  최근 4주 방문 기록
                </p>
                <div className="flex gap-2">
                  {selectedRehab.visits.map((v) => (
                    <div
                      key={v.date}
                      className="flex flex-1 flex-col items-center gap-1"
                    >
                      <div
                        className={`flex h-9 w-full items-center justify-center rounded-lg text-sm font-bold ${
                          v.done
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-red-100 text-red-500'
                        }`}
                      >
                        {v.done ? '✓' : '✕'}
                      </div>
                      <p className="text-[10px] text-gray-400">{v.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4 flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                <div>
                  <p className="mb-0.5 text-xs font-semibold text-gray-400">
                    최근 방문일
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    {selectedRehab.lastVisit}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
                <p className="mb-1 text-xs font-semibold text-amber-700">
                  담당의 메모
                </p>
                <p className="text-xs leading-relaxed text-amber-800">
                  {selectedRehab.memo}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex shrink-0 gap-3 px-6 pt-4 pb-2">
              {(['good', 'warn', 'bad'] as RehabStatus[]).map((s) => {
                const count = rehabPatients.filter(
                  (p) => p.status === s
                ).length;
                return (
                  <span
                    key={s}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${rehabStyle[s].badge}`}
                  >
                    {rehabStyle[s].label} {count}명
                  </span>
                );
              })}
            </div>

            <div className="space-y-2 overflow-y-auto px-6 py-2">
              {rehabPatients.map((p) => {
                const rate = Math.round((p.completed / p.prescribed) * 100);
                return (
                  <button
                    key={p.name}
                    onClick={() => setSelectedRehab(p)}
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 text-left transition-all hover:border-blue-200 hover:bg-blue-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <p className="font-bold text-gray-900">{p.name}</p>
                          <span className="text-xs text-gray-400">{p.age}</span>
                          <span
                            className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-semibold ${rehabStyle[p.status].badge}`}
                          >
                            {rehabStyle[p.status].label}
                          </span>
                        </div>
                        <p className="mb-2 truncate text-xs text-gray-500">
                          {p.diagnosis}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                            <div
                              className={`h-full rounded-full ${rehabStyle[p.status].bar}`}
                              style={{ width: `${rate}%` }}
                            />
                          </div>
                          <span
                            className={`shrink-0 text-xs font-semibold ${
                              p.status === 'bad'
                                ? 'text-red-500'
                                : p.status === 'warn'
                                  ? 'text-amber-600'
                                  : 'text-emerald-600'
                            }`}
                          >
                            {rate}%
                          </span>
                        </div>
                        <p className="mt-1 text-[10px] text-gray-400">
                          {p.completed}/{p.prescribed}회 완료 · 마지막 방문{' '}
                          {p.lastVisit}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="shrink-0 px-6 pt-2 pb-5">
              <button
                onClick={onClose}
                className="w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                닫기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
