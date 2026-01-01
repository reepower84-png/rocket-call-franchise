'use client'

export default function KakaoButton() {
  return (
    <a
      href="http://pf.kakao.com/_zxfugn/chat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#FEE500] hover:bg-[#FDD800] text-[#3C1E1E] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
      aria-label="카카오톡 상담"
    >
      {/* Kakao Icon */}
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 3c-5.5 0-10 3.58-10 8 0 2.85 1.88 5.35 4.7 6.76-.21.79-.74 2.85-.85 3.29-.14.56.21.55.44.4.18-.12 2.88-1.96 4.05-2.76.53.08 1.08.12 1.66.12 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        카카오톡 상담하기
      </span>
    </a>
  )
}
