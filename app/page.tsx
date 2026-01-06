import About from "./sections/AboutSec";
import Banner from "./sections/BannerSec";
import Feature from "./sections/FeatureSec";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./sections/ServicesSec";
import Contact from "./sections/ContactSec";
import Testimonials from "./sections/Testimonial";
import BenefitsSection from "./sections/BenefitsSec";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Banner />
      <About />
      <Services />
      <BenefitsSection />
      <Testimonials />
      <Feature />
      <Footer />
    </div>
  );
}
