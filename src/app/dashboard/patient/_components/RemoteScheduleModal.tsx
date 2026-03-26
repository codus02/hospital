'use client';

import { useState } from 'react';
import { remoteSchedules, categoryColors, RemoteSession } from '../_data';

export default function RemoteScheduleModal({
  registeredSessions,
  onRegister,
  onClose,
}: {
  registeredSessions: number[];
  onRegister: (id: number) => void;
  onClose: () => void;
}) {
  const [selectedSession, setSelectedSession] =
    useState<RemoteSession | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleRegister() {
    if (!selectedSession) return;
    onRegister(selectedSession.id);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedSession(null);
    }, 1500);
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
        <div className="flex max-h-[92vh] w-full flex-col rounded-t-3xl bg-white shadow-xl sm:max-w-lg sm:rounded-2xl">
          <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 pt-5 pb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                원격 운동 스케줄
              </h2>
              <p className="mt-0.5 text-xs text-gray-400">
                비대면 실시간 스트레칭 · 재활 클래스
                
              </p>
              <p className="mt-0.5 text-xs text-gray-400">
                집에서도 전문 강사와 스트레칭 · 재활해요
                
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                setSelectedSession(null);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          {selectedSession ? (
            <div className="flex flex-col overflow-y-auto">
              <button
                onClick={() => setSelectedSession(null)}
                className="flex items-center gap-1 px-6 pt-4 pb-2 text-sm text-blue-600 hover:text-blue-800"
              >
                ← 목록으로
              </button>
              <div className="px-6 pb-6">
                <div className="mb-4 rounded-2xl bg-blue-50 p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[selectedSession.category]}`}
                    >
                      {selectedSession.category}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                      {selectedSession.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedSession.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {selectedSession.date} ({selectedSession.day}) ·{' '}
                    {selectedSession.time} · {selectedSession.duration}
                  </p>
                </div>
                <div className="mb-4 flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl">
                    👩‍⚕️
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {selectedSession.instructor}
                    </p>
                    <p className="text-xs text-gray-500">
                      {selectedSession.instructorRole}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      수업 소개
                    </p>
                    <p className="leading-relaxed text-gray-700">
                      {selectedSession.desc}
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                        준비물
                      </p>
                      <p className="text-gray-700">
                        {selectedSession.equipment}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                        참여 인원
                      </p>
                      <p className="text-gray-700">
                        {selectedSession.current} / {selectedSession.max}명
                      </p>
                    </div>
                  </div>
                </div>
                {registeredSessions.includes(selectedSession.id) ? (
                  <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 py-3 text-sm font-semibold text-emerald-700">
                    ✓ 이미 신청한 수업입니다
                  </div>
                ) : (
                  <button
                    onClick={handleRegister}
                    className="mt-6 w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                  >
                    참여 신청하기
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-3 overflow-y-auto px-6 py-4">
                {remoteSchedules.map((session) => {
                  const isFull = session.current >= session.max;
                  return (
                    <button
                      key={session.id}
                      onClick={() => setSelectedSession(session)}
                      className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 text-left transition-all hover:border-blue-200 hover:bg-blue-50"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex w-12 shrink-0 flex-col items-center rounded-xl border border-gray-100 bg-white py-2 shadow-sm">
                          <span className="text-[10px] font-semibold text-gray-400">
                            {session.date.slice(5).replace('-', '/')}
                          </span>
                          <span className="text-lg font-extrabold leading-tight text-blue-700">
                            {session.day}
                          </span>
                          <span className="text-xs font-medium text-gray-600">
                            {session.time}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex flex-wrap items-center gap-1.5">
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryColors[session.category]}`}
                            >
                              {session.category}
                            </span>
                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500">
                              {session.level}
                            </span>
                            {registeredSessions.includes(session.id) && (
                              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                                예약완료
                              </span>
                            )}
                            {isFull &&
                              !registeredSessions.includes(session.id) && (
                                <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-500">
                                  마감
                                </span>
                              )}
                          </div>
                          <p className="text-sm font-bold text-gray-900">
                            {session.title}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500">
                            {session.instructor} {session.instructorRole} ·{' '}
                            {session.duration}
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p
                            className={`text-xs font-semibold ${isFull ? 'text-red-400' : 'text-emerald-600'}`}
                          >
                            {session.current}/{session.max}
                          </p>
                          <p className="text-[10px] text-gray-400">참여</p>
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

      {showSuccess && (
        <div className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center">
          <div className="flex items-center gap-3 rounded-2xl bg-gray-900/90 px-6 py-4 text-white shadow-2xl backdrop-blur-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-lg">
              ✓
            </span>
            <p className="text-sm font-semibold">참여 신청이 완료되었습니다</p>
          </div>
        </div>
      )}
    </>
  );
}
