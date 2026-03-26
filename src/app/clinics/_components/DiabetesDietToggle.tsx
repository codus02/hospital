'use client';

import { useState } from 'react';

const dietCategories = [
  {
    label: '주식',
    color: 'bg-amber-50 border-amber-200',
    headerColor: 'text-amber-700',
    items: [
      { name: '잡곡밥', desc: '현미·보리·귀리 혼합. 백미보다 혈당 상승이 완만합니다.' },
      { name: '고구마', desc: '포만감이 높고 식이섬유가 풍부. 적당량(100g 이하) 섭취를 권장합니다.' },
      { name: '두부밥', desc: '단백질이 풍부하고 탄수화물이 낮아 혈당 조절에 유리합니다.' },
    ],
  },
  {
    label: '반찬',
    color: 'bg-green-50 border-green-200',
    headerColor: 'text-green-700',
    items: [
      { name: '생선구이', desc: '고등어·연어·삼치 등 오메가-3 풍부. 단백질 보충에 이상적입니다.' },
      { name: '시금치·브로콜리 나물', desc: '혈당 지수(GI)가 낮고 식이섬유·비타민이 풍부합니다.' },
      { name: '두부조림', desc: '식물성 단백질로 포만감을 주면서 혈당 영향이 적습니다.' },
      { name: '콩나물무침', desc: '저칼로리·저GI 식품으로 나트륨을 줄여 조리하는 것이 좋습니다.' },
      { name: '된장국 (채소 듬뿍)', desc: '발효식품으로 장 건강에도 좋고, 건더기 위주로 드세요.' },
    ],
  },
  {
    label: '간식',
    color: 'bg-blue-50 border-blue-200',
    headerColor: 'text-blue-700',
    items: [
      { name: '견과류 한 줌', desc: '아몬드·호두 등. 불포화지방산이 풍부하고 혈당을 안정시킵니다.' },
      { name: '채소 스틱', desc: '오이·당근·셀러리 등. 칼로리가 낮고 포만감을 줍니다.' },
      { name: '플레인 요거트', desc: '무가당 제품으로 장 건강과 혈당 관리를 동시에 챙기세요.' },
      { name: '삶은 달걀', desc: '단백질 보충에 적합하고 혈당에 거의 영향을 주지 않습니다.' },
    ],
  },
  {
    label: '피해야 할 음식',
    color: 'bg-red-50 border-red-200',
    headerColor: 'text-red-600',
    items: [
      { name: '흰 쌀밥·흰 빵', desc: '혈당 지수(GI)가 높아 빠르게 혈당을 올립니다.' },
      { name: '설탕·과자·케이크', desc: '단순당이 많아 급격한 혈당 상승을 유발합니다.' },
      { name: '과일 주스·탄산음료', desc: '액상 당분은 고형 당분보다 더 빠르게 흡수됩니다.' },
      { name: '튀긴 음식', desc: '고칼로리·고지방으로 비만 및 인슐린 저항성을 악화시킵니다.' },
    ],
  },
];

export default function DiabetesDietToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-2xl border-2 border-amber-200 bg-amber-50 px-5 py-4 text-left transition-colors hover:bg-amber-100"
      >
        <span className="flex items-center gap-2 font-bold text-amber-800">
          <span className="text-lg">🥗</span>
          당뇨에 좋은 식단 리스트 보기
        </span>
        <span
          className={`text-amber-600 text-lg transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="mt-3 rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
          <p className="mb-5 text-xs text-gray-400">
            * 개인 상태에 따라 적합한 식품이 다를 수 있습니다. 담당 의사·영양사와 상담 후
            식단을 조정하세요.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {dietCategories.map((cat) => (
              <div
                key={cat.label}
                className={`rounded-xl border p-4 ${cat.color}`}
              >
                <p className={`mb-3 text-xs font-bold uppercase tracking-wide ${cat.headerColor}`}>
                  {cat.label}
                </p>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                      <p className="text-xs leading-relaxed text-gray-500">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
