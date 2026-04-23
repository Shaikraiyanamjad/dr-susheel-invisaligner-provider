import AlignerTherapy from '@/components/AlignerTherapy'
import CallToAction from '@/components/CallToAction'
import Comparison from '@/components/Comparison'
import Faq from '@/components/Faq'
import FloatingComponents from '@/components/FloatingComponents'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TheProcess from '@/components/TheProcess'
import WhyInvisalign from '@/components/WhyInvisalign'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <AlignerTherapy />
    <WhyInvisalign />
    <Comparison />
    <Faq />
    <TheProcess />
    <CallToAction />
    <Footer />
    <FloatingComponents />
    </>
  )
}

export default page