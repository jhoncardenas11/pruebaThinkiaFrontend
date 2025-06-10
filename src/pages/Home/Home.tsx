import { useEffect } from "react";
import Advantages from "../../components/Home/Advantages/Advantages";
import Footer from "../../components/Home/Footer/Footer";
import Hero from "../../components/Home/Hero/Hero";
import Steps from "../../components/Home/Steps/Steps";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div>
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Steps />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Advantages />
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        <Footer />
      </div>
    </>
  );
};

export default Home;
