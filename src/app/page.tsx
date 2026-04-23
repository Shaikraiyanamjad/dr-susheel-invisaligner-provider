import About from "@/components/About";
import BeforeAndAfter from "@/components/BeforeAndAfter";
import CallToAction from "@/components/CallToAction";
import FloatingComponents from "@/components/FloatingComponents";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TheProcess from "@/components/TheProcess";
import Trustbar from "@/components/Trustbar";
export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Trustbar />
    <About />
    <Services />
    <BeforeAndAfter />
    <TheProcess />
    <Gallery  />
    <Testimonials />
    <CallToAction />
    <Footer />
    <FloatingComponents />
    </>
  );
}
