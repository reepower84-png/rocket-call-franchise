'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-2xl">🚀</span>
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              로켓콜
            </span>
            <span className="hidden sm:inline-block text-sm text-orange-500 font-medium ml-1">
              프랜차이즈
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              서비스 특징
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              이용 절차
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              고객 후기
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              상품 안내
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1FGpJjks9asLnWIAS6wd7be0ARZDssLNM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-4 md:py-2.5 md:px-6 rounded-lg transition-all duration-300 text-sm md:text-base"
            >
              제안서 보기
            </a>
            <button
              onClick={scrollToContact}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 md:py-2.5 md:px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              무료 상담
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-600 hover:text-orange-500 transition-colors font-medium py-2"
              >
                서비스 특징
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left text-gray-600 hover:text-orange-500 transition-colors font-medium py-2"
              >
                이용 절차
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-600 hover:text-orange-500 transition-colors font-medium py-2"
              >
                고객 후기
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left text-gray-600 hover:text-orange-500 transition-colors font-medium py-2"
              >
                상품 안내
              </button>
              <a
                href="https://drive.google.com/file/d/1FGpJjks9asLnWIAS6wd7be0ARZDssLNM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-medium py-2"
              >
                📄 제안서 보기
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
