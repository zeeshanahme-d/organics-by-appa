import About from "./sections/AboutSec";
import Banner from "./sections/BannerSec";
import Feature from "./sections/FeatureSec";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./sections/ServicesSec";
import Testimonials from "./sections/Testimonial";
import BenefitsSection from "./sections/BenefitsSec";
import InfiniteAnimation from "./components/InfiniteAnimation";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Banner />
      <div className="my-10">
        <InfiniteAnimation />
      </div>
      <About />
      <Services />
      <BenefitsSection />
      <Testimonials />
      <Feature />
      <Footer />
    </div>
  );
}
