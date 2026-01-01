export default function Stats() {
  const stats = [
    {
      number: '98%',
      label: '약속 성사율',
      description: '확정 고객 기준',
    },
    {
      number: '2,000+',
      label: '누적 약속 건수',
      description: '프랜차이즈 분야',
    },
    {
      number: '150+',
      label: '파트너 본사',
      description: '다양한 업종',
    },
    {
      number: '24시간',
      label: '내 응대 시작',
      description: '빠른 시작',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
