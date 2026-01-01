'use client'

export default function Guarantee() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Main Message */}
          <div className="text-5xl md:text-6xl mb-6">🛡️</div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6">
            로켓콜의 <span className="underline decoration-4 underline-offset-4">100% 보장 제도</span>
          </h2>

          {/* Guarantee Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">노쇼 무료 재배정</h3>
              <p className="text-white/90 leading-relaxed">
                확정 고객이 노쇼 시 100% 무료로 새로운 고객을 재배정해 드립니다.
                본사는 손해 볼 일이 없습니다.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">독점 고객 보장</h3>
              <p className="text-white/90 leading-relaxed">
                로켓콜이 연결하는 고객은 다른 브랜드와 공유하지 않습니다.
                오직 귀사만을 위한 고객입니다.
              </p>
            </div>
          </div>

          {/* Trust Message */}
          <div className="mt-12 text-lg md:text-xl font-medium text-white/90">
            로켓콜은 <strong className="text-white">결과로 증명</strong>합니다.
          </div>

          {/* CTA */}
          <button
            onClick={scrollToContact}
            className="mt-8 bg-white text-orange-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            지금 바로 상담받기
          </button>
        </div>
      </div>
    </section>
  )
}
