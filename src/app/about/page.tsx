import About from '@/components/About'
import CallToAction from '@/components/CallToAction'
import Credentials from '@/components/Credentials'
import FloatingComponents from '@/components/FloatingComponents'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Philosophy from '@/components/Philosophy'
import Quote from '@/components/Quote'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <About />
    <Credentials />
    <Philosophy />
    <Quote />
    <CallToAction />
    <Footer />
    <FloatingComponents />
    </>
  )
}

export default page