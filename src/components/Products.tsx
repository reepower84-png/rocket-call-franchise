'use client'

export default function Products() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const products = [
    {
      name: '확정 고객 DB',
      badge: '추천',
      icon: '🎯',
      description: '2단계 검증을 모두 통과한 확정 고객',
      features: [
        '가맹 상담 일정 확정 완료',
        '약속 전날 리마인드 완료',
        '노쇼 시 100% 무료 재배정',
        '독점 고객 보장',
        '실시간 DB 확인 가능',
      ],
      highlight: true,
    },
    {
      name: '관심 고객 DB',
      badge: '합리적',
      icon: '📋',
      description: '1차 TM으로 관심도 확인된 고객',
      features: [
        '가맹 관심도 확인 완료',
        '투자 의향 및 예산 파악',
        '합리적인 가격',
        '대량 물량 가능',
        '자체 TM 운영 시 활용',
      ],
      highlight: false,
    },
  ]

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            <span className="text-orange-500">상품 안내</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            본사 상황에 맞는 상품을 선택하세요
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 md:p-8 ${
                product.highlight
                  ? 'bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 shadow-xl'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute -top-3 left-6 px-4 py-1 rounded-full text-sm font-bold ${
                    product.highlight
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  {product.badge}
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6 pt-4">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <span className={`text-lg ${product.highlight ? 'text-orange-500' : 'text-gray-400'}`}>
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  product.highlight
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                상담 신청하기
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-gray-500">
          <p>* 상품 가격은 상담을 통해 맞춤 견적을 안내해 드립니다.</p>
        </div>
      </div>
    </section>
  )
}
