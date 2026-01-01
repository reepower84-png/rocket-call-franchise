export default function Features() {
  const features = [
    {
      emoji: '🎯',
      title: '확정 고객만',
      description: '2단계 검증을 통과한 진짜 관심 고객만 보내드립니다',
    },
    {
      emoji: '⏰',
      title: '시간 절약',
      description: 'TM 인력 채용, 교육, 관리 부담 없이 핵심 업무에 집중하세요',
    },
    {
      emoji: '📈',
      title: '가맹 계약률 UP',
      description: '노쇼 없는 확정 고객으로 계약 성사율이 올라갑니다',
    },
    {
      emoji: '💎',
      title: '독점 고객 제공',
      description: '타 브랜드와 공유하지 않는 독점 고객을 연결해 드립니다',
    },
    {
      emoji: '🔄',
      title: '노쇼 무료 재배정',
      description: '만약 노쇼가 발생해도 100% 무료로 새 고객을 배정해 드립니다',
    },
    {
      emoji: '📊',
      title: '투명한 실시간 소통',
      description: '매칭 현황, 예약 일정 등 실시간으로 공유해드립니다',
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            로켓콜을 선택해야 하는 <span className="text-orange-500">6가지 이유</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            가맹점 모집의 모든 어려움, 로켓콜이 해결합니다
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-4xl md:text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
