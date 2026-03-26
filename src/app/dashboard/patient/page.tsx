'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { appointments, prescriptions } from './_data';
import StampCard from './_components/StampCard';
import RegisteredSessions from './_components/RegisteredSessions';
import ExerciseVideosModal from './_components/ExerciseVideosModal';
import RemoteScheduleModal from './_components/RemoteScheduleModal';
import MedicalRecordsModal from './_components/MedicalRecordsModal';

export default function PatientDashboard() {
  const router = useRouter();
  const [showMyInfo, setShowMyInfo] = useState(false);
  const [showCallScreen, setShowCallScreen] = useState(false);
  const [showMedicalRecords, setShowMedicalRecords] = useState(false);
  const [showExerciseVideos, setShowExerciseVideos] = useState(false);
  const [showRemoteSchedule, setShowRemoteSchedule] = useState(false);
  const [registeredSessions, setRegisteredSessions] = useState<number[]>([]);

  useEffect(() => {
    if (showCallScreen) {
      const t = setTimeout(() => setShowCallScreen(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showCallScreen]);

  const upcomingAppts = appointments.filter((a) => a.status === '예약확정');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 대시보드 헤더 */}
      <div className="bg-blue-800 px-4 py-5 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <p className="mb-0.5 text-xs text-blue-200">환자 포털</p>
            <h1 className="text-lg font-bold">김환자님, 안녕하세요</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMyInfo(true)}
              className="rounded-lg border border-blue-600 px-3 py-1.5 text-sm text-blue-200 hover:text-white"
            >
              내 정보
            </button>
            <button
              onClick={() => router.push('/')}
              className="rounded-lg border border-blue-600 px-3 py-1.5 text-sm text-blue-200 hover:text-white"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        {/* 다음 예약 */}
        <div className="rounded-2xl bg-blue-700 p-6 text-white">
          <p className="mb-1 text-xs text-blue-200">다음 예약</p>
          <h2 className="mb-1 text-xl font-bold">2026년 3월 31일 (화) 10:30</h2>
          <p className="text-sm text-blue-100">한원석 원장 · 척추외과</p>
          <div className="mt-4 flex gap-2">
            <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
              예약 확인
            </button>
            <button className="rounded-full border border-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
              취소/변경 문의
            </button>
          </div>
        </div>

        <RegisteredSessions ids={registeredSessions} />

        <StampCard />

        <div className="grid gap-6 md:grid-cols-2">
          {/* 다가오는 진료 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-bold text-gray-900">다가오는 진료</h2>
            <div className="space-y-3">
              {upcomingAppts.map((a, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl bg-gray-50 p-3"
                >
                  <div className="w-12 shrink-0 text-center">
                    <div className="text-xs text-gray-500">
                      {a.date.slice(5)}
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {a.time}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      {a.doctor}
                    </p>
                    <p className="text-xs text-gray-500">{a.dept}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 처방 내역 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-bold text-gray-900">처방 내역</h2>
            <div className="space-y-3">
              {prescriptions.map((p, idx) => (
                <div key={idx} className="rounded-xl bg-gray-50 p-3">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-semibold text-gray-800">
                      {p.name}
                    </p>
                    <span className="text-xs font-medium text-blue-600">
                      {p.days}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {p.date} · {p.doctor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 서비스 메뉴 */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-bold text-gray-900">서비스</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { icon: '📅', label: '예약하기', onClick: () => setShowCallScreen(true) },
              { icon: '📋', label: '진료기록', onClick: () => setShowMedicalRecords(true) },
              { icon: '🎥', label: '운동영상', onClick: () => setShowExerciseVideos(true) },
              { icon: '🏃', label: '원격 운동', onClick: () => setShowRemoteSchedule(true) },
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 py-4 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 전화 연결 화면 */}
      {showCallScreen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-950">
          <div className="text-center text-white">
            <div className="mb-6 animate-pulse text-7xl">📞</div>
            <p className="mb-2 text-3xl font-extrabold">P병원</p>
            <p className="mb-1 text-lg text-blue-300">연결 중...</p>
            <p className="text-sm text-blue-400">051-xxxx-xxxx</p>
          </div>
        </div>
      )}

      {/* 내 정보 모달 */}
      {showMyInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">내 정보</h2>
              <button
                onClick={() => setShowMyInfo(false)}
                className="text-xl leading-none text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-1">
              {[
                { label: '이름', value: '김환자' },
                { label: '생년월일', value: '2000년 0월 00일' },
                { label: '성별', value: '여성' },
                { label: '연락처', value: '010-xxxx-xxxx' },
                { label: '등록일', value: '2024년 8월 20일' },
                { label: '담당의', value: '한원석 원장 (척추외과)' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-gray-100 py-2.5"
                >
                  <span className="w-20 shrink-0 text-xs text-gray-400">
                    {label}
                  </span>
                  <span className="text-right text-sm font-medium text-gray-800">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowMyInfo(false)}
              className="mt-5 w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {showExerciseVideos && (
        <ExerciseVideosModal onClose={() => setShowExerciseVideos(false)} />
      )}
      {showMedicalRecords && (
        <MedicalRecordsModal onClose={() => setShowMedicalRecords(false)} />
      )}
      {showRemoteSchedule && (
        <RemoteScheduleModal
          registeredSessions={registeredSessions}
          onRegister={(id) =>
            setRegisteredSessions((prev) => [...prev, id])
          }
          onClose={() => setShowRemoteSchedule(false)}
        />
      )}
    </div>
  );
}
