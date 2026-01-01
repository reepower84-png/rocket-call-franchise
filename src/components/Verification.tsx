'use client'

export default function Verification() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="verification" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>✨</span>
            <span>로켓콜만의 차별화</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            2단계 검증 시스템으로
            <br />
            <span className="text-orange-500">확정 고객만</span> 연결합니다
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            단순 DB 전달이 아닌, 직접 통화하고 약속까지 잡아서 보내드립니다
          </p>
        </div>

        {/* Verification Steps */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200">
              <div className="absolute -top-4 left-8 bg-orange-500 text-white px-4 py-1 rounded-full font-bold text-sm">
                1단계
              </div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                1차 TM 상담
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>가맹 관심도 및 투자 의향 확인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>예상 투자금 및 희망 지역 파악</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>본사 설명회/상담 일정 제안</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 border-2 border-orange-300">
              <div className="absolute -top-4 left-8 bg-orange-600 text-white px-4 py-1 rounded-full font-bold text-sm">
                2단계
              </div>
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                약속 확정 & 리마인드
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>구체적인 방문/상담 일시 확정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>약속 전날 리마인드 연락</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>당일 최종 확인 후 본사 전달</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl">
            <span className="text-2xl">🎯</span>
            <span className="text-lg md:text-xl font-bold">
              결과: 노쇼 없는 확정 고객만 본사에 전달
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            무료 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  )
}
