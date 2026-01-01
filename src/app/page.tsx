'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Problems from '@/components/Problems'
import Verification from '@/components/Verification'
import Features from '@/components/Features'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Guarantee from '@/components/Guarantee'
import Products from '@/components/Products'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import KakaoButton from '@/components/KakaoButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Problems />
      <Verification />
      <Features />
      <Process />
      <Testimonials />
      <Guarantee />
      <Products />
      <ContactForm />
      <Footer />
      <KakaoButton />
    </main>
  )
}
