'use client'

export default function Problems() {
  const problems = [
    {
      emoji: '😰',
      title: '가맹 문의는 많은데...',
      description: '실제로 상담까지 이어지는 경우가 너무 적어요',
    },
    {
      emoji: '📞',
      title: '연락이 안 돼요',
      description: '문의만 남기고 전화하면 안 받거나 연락 두절되는 고객이 대부분',
    },
    {
      emoji: '🚫',
      title: '노쇼가 너무 많아요',
      description: '어렵게 약속 잡아도 나타나지 않는 고객 때문에 시간 낭비',
    },
    {
      emoji: '⏰',
      title: '시간이 부족해요',
      description: 'TM 인력을 따로 두기엔 부담스럽고 직접 하기엔 시간이 없어요',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            이런 고민, 하고 계시지 않나요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            가맹점 모집을 위해 광고비는 쓰는데, 정작 상담까지 이어지는 고객은 적고...
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl md:text-5xl">{problem.emoji}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-orange-100 text-orange-700 px-6 py-3 rounded-full font-bold text-lg">
            👇 로켓콜이 해결해 드립니다
          </div>
        </div>
      </div>
    </section>
  )
}
