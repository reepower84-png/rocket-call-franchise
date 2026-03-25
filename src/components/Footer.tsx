export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold text-white">로켓콜</span>
              <span className="text-orange-500 text-sm font-medium">프랜차이즈</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              프랜차이즈 본사를 위한 확정 고객 약속 전문 TM 서비스.
              <br />
              가맹점 모집의 어려움, 로켓콜이 해결합니다.
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">상호:</span> 제이코리아</p>
              <p><span className="text-gray-500">대표:</span> 이주영</p>
              <p><span className="text-gray-500">사업자등록번호:</span> 278-30-01540</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">바로가기</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a
                  href="#features"
                  className="block hover:text-orange-500 transition-colors"
                >
                  서비스 특징
                </a>
                <a
                  href="#process"
                  className="block hover:text-orange-500 transition-colors"
                >
                  이용 절차
                </a>
                <a
                  href="#testimonials"
                  className="block hover:text-orange-500 transition-colors"
                >
                  고객 후기
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#products"
                  className="block hover:text-orange-500 transition-colors"
                >
                  상품 안내
                </a>
                <a
                  href="#contact"
                  className="block hover:text-orange-500 transition-colors"
                >
                  상담 신청
                </a>
                <a
                  href="https://drive.google.com/file/d/1FGpJjks9asLnWIAS6wd7be0ARZDssLNM/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-500 transition-colors"
                >
                  제안서 보기
                </a>
              </div>
            </div>
          </div>

          {/* 계열사 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">계열사</h3>
            <div className="space-y-3">
              <a
                href="https://rk-intro.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-500 transition-colors"
              >
                로켓콜 인트로
              </a>
              <a
                href="https://rocket-call.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-500 transition-colors"
              >
                로켓콜_보험설계사
              </a>
              <a
                href="https://rocket-call-auto-dealer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-500 transition-colors"
              >
                로켓콜_자동차딜러
              </a>
              <a
                href="https://rocket-call-realestate.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-500 transition-colors"
              >
                로켓콜_부동산분양
              </a>
              <a
                href="https://rocket-call-hospital.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-500 transition-colors"
              >
                로켓콜_병원
              </a>
              <a
                href="https://rk-policy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-500 transition-colors"
              >
                로켓콜_정책자금
              </a>
              <a
                href="https://rk-lawyer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-500 transition-colors"
              >
                로켓콜_변호사
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © 2024 로켓콜. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
