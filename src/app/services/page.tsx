import CallToAction from '@/components/CallToAction'
import FloatingComponents from '@/components/FloatingComponents'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Services from '@/components/Services'
import ServicesBottom from '@/components/ServicesBottom'
import ServicesTop from '@/components/ServicesTop'

const page = () => {
  return (
    <>
    <Header />
    <ServicesTop />
    <Services />
    <ServicesBottom />
    <CallToAction />
    <Footer />
    <FloatingComponents />
    </>
  )
}

export default page