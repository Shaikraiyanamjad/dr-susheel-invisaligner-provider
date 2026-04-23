import CallToAction from '@/components/CallToAction'
import ContactBar from '@/components/ContactBar'
import ContactTop from '@/components/ContactTop'
import FloatingComponents from '@/components/FloatingComponents'
import Footer from '@/components/Footer'
import FormAndMap from '@/components/FormAndMap'
import Header from '@/components/Header'

const page = () => {
  return (
    <>
    <Header />
    <ContactTop />
    <FormAndMap />
    <ContactBar />
    <CallToAction />
    <Footer />
    <FloatingComponents />
    </>
  )
}

export default page