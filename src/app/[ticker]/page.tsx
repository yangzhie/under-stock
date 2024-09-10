import Head from "@/components/Head/Head";
import Navbar from "@/components/Navbar/Navbar";
import Info from "@/components/Info/Info";
import Graph from "@/components/Graph/Graph";
import Tabs from "@/components/Tabs/Tabs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="top-0 sticky">
        <Head />
        <Navbar />
      </div>
      <div className="flex flex-col items-center">
        <Info />
        <Graph />
        <Tabs />
      </div>
      <Footer />
    </>
  );
}
