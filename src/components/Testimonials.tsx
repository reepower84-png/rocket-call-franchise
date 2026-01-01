export default function Testimonials() {
  const testimonials = [
    {
      name: '김*호 대표님',
      company: 'A** 치킨 본사',
      content: '광고비는 많이 쓰는데 실제 상담까지 오는 사람이 너무 적었어요. 로켓콜 도입 후 확정 고객만 오니까 가맹 계약률이 2배로 올랐습니다.',
      rating: 5,
      result: '계약률 200% 상승',
    },
    {
      name: '박*영 이사님',
      company: 'B** 커피 본사',
      content: 'TM 인력 채용하고 교육하는 게 너무 힘들었는데, 로켓콜에 맡기니까 핵심 업무에 집중할 수 있게 됐어요. 노쇼도 거의 없어서 정말 만족합니다.',
      rating: 5,
      result: '업무 효율 3배 향상',
    },
    {
      name: '이*수 팀장님',
      company: 'C** 편의점 가맹팀',
      content: '다른 곳은 DB만 주고 끝이었는데, 로켓콜은 약속까지 잡아주니까 확실히 다릅니다. 노쇼가 발생해도 무료로 재배정해줘서 손해 보는 느낌이 없어요.',
      rating: 5,
      result: '노쇼율 90% 감소',
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            로켓콜과 함께한 <span className="text-orange-500">본사들의 후기</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            실제로 로켓콜을 이용하신 프랜차이즈 본사 담당자분들의 생생한 후기
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 min-h-[120px]">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Result Badge */}
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                📈 {testimonial.result}
              </div>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
