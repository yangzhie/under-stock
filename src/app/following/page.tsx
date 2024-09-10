import React from "react";
import Head from "@/components/Head/Head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FollowList from "@/components/FollowList/FollowList";
import Followings from "@/components/Followings/Followings";

function page() {
  return (
    <>
      <Head />
      <Navbar />
      <div className="flex justify-center gap-10 mt-12">
        <FollowList />
        <Followings />
      </div>
      <div className="w-full bottom-0 left-0 mt-[50px]">
        <Footer />
      </div>
    </>
  );
}

export default page;
