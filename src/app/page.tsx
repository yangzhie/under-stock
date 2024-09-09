import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Head from "@/components/Head/Head";
import SlidingTickers from "@/components/SlidingTickers/SlidingTickers";

export default function Home() {
  return (
    <>
      <div className="top-0 sticky">
        <Head />
        <Navbar />
      </div>
      <Hero />
      <SlidingTickers />
    </>
  );
}
