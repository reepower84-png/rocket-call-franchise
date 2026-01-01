'use client'

export default function Process() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const steps = [
    {
      step: '01',
      title: '상담 신청',
      description: '아래 양식으로 간단히 상담 신청을 해주세요',
      icon: '📝',
    },
    {
      step: '02',
      title: '맞춤 상담',
      description: '브랜드 특성에 맞는 TM 전략을 함께 설계합니다',
      icon: '💬',
    },
    {
      step: '03',
      title: 'TM 시작',
      description: '전문 TM팀이 가맹 희망 고객에게 직접 연락합니다',
      icon: '📞',
    },
    {
      step: '04',
      title: '확정 고객 전달',
      description: '약속이 확정된 고객 정보를 본사에 전달합니다',
      icon: '🎉',
    },
  ]

  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            <span className="text-orange-500">4단계</span>로 쉽게 시작하세요
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            복잡한 절차 없이 간단하게 시작할 수 있습니다
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-orange-200 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
              )}

              <div className="relative z-10 bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                {/* Step Number */}
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            🚀 지금 바로 시작하기
          </button>
        </div>
      </div>
    </section>
  )
}
