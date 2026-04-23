import CallToAction from '@/components/CallToAction'
import FloatingComponents from '@/components/FloatingComponents'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import OurPromise from '@/components/OurPromise'
import OurTreatments from '@/components/OurTreatments'
import ParentGuide from '@/components/ParentGuide'
import PediatricHero from '@/components/PediatricHero'

const page = () => {
  return (
    <>
    <Header />
    <PediatricHero />
    <OurTreatments />
    <ParentGuide />
    <OurPromise />
    <CallToAction />
    <Footer />
    <FloatingComponents />
    </>
  )
}

export default page