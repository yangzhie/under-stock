import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Head from "@/components/Head/Head";
import SlidingTickers from "@/components/SlidingTickers/SlidingTickers";
import MainContent from "@/components/MainContent/MainContent"
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="top-0 sticky">
        <Head />
        <Navbar />
      </div>
      <Hero />
      <SlidingTickers />
      <MainContent />
      <Footer />
    </>
  );
}
