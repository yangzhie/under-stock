"use client";

import React from "react";

import { PricingContent, AboutContent } from "./NavbarContent";
import { NavbarLink } from "./NavbarLink";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
</style>;

const Navbar = () => {
  return (
    <>
      <div className="flex h-[60px] gap-10 items-center justify-evenly bg-neutral-900">
        <div className="flex gap-10 items-end w-[800px] justify-between">
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
