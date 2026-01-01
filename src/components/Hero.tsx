'use client'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🏢</span>
            <span>프랜차이즈 본사 전용 서비스</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            가맹 상담 약속,
            <br />
            <span className="text-orange-500">확정된 고객만</span> 보내드립니다
          </h1>

          {/* Sub Headline */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
            가맹점 모집에 어려움을 겪고 계신가요?
            <br className="hidden sm:block" />
            로켓콜이 <strong className="text-gray-900">직접 TM으로 약속까지 잡아서</strong> 확정 고객만 연결해 드립니다.
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto mb-8">
            (치킨 · 커피 · 한식 · 분식 · 패스트푸드 · 주점 · 피자 · 제과 · 교육 → 업종 불문, 프랜차이즈라면 믿고 맡기세요)
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg animate-pulse-glow"
            >
              🚀 지금 바로 상담 신청하기
            </button>
            <a
              href="https://drive.google.com/file/d/1FGpJjks9asLnWIAS6wd7be0ARZDssLNM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 font-bold py-4 px-8 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg"
            >
              📄 서비스 제안서 보기
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>노쇼 시 100% 무료 재배정</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>2단계 검증 완료 고객</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>실시간 고객 DB 관리</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
