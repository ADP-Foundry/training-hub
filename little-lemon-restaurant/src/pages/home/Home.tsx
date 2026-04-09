import AboutSection from "./AboutSection";
import Banner from "./Banner";
import CTA from "./CTA";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main>
      <Banner />
      <Specials />
      <AboutSection />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;
