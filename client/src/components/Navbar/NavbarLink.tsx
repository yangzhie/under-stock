"use client";
import { AnimatePresence, motion } from "framer-motion";

import { useState, ReactNode } from "react";

interface NavbarLinkProps {
  children: ReactNode;
  href: string;
  NavbarContent?: () => JSX.Element;
}

export const NavbarLink = ({
  children,
  href,
  NavbarContent,
}: NavbarLinkProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const showFlyout = NavbarContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <NavbarContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
