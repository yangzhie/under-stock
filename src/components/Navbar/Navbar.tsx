"use client";

import React from "react";
import Image from "next/image";

import { PricingContent, AboutContent } from "./NavbarContent";
import { NavbarLink } from "./NavbarLink";
import logo from "@/public/logo.png";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
</style>;

const Navbar = () => {
  return (
    <>
      <div className="flex h-[60px] gap-10 items-center justify-around bg-neutral-900">
        <Image src={logo} alt="main-logo" width={"150"} />

        <div className="flex gap-10 items-end">
          <NavbarLink href="#" NavbarContent={PricingContent}>
            Pricing
          </NavbarLink>
          <NavbarLink href="#">Blog</NavbarLink>
          <NavbarLink href="#" NavbarContent={AboutContent}>
            About
          </NavbarLink>
          <NavbarLink href="#">Careers</NavbarLink>
          <NavbarLink href="#">Support</NavbarLink>
        </div>
        
        <div className="flex gap-5 items-center">
          <NavbarLink href="#">Login</NavbarLink>
          <NavbarLink href="#">
            <p className=" text-indigo-300 px-1 font-medium hover:underline hover:underline-offset-8">
              Open an account
            </p>
          </NavbarLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
