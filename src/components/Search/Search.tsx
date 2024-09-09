"use client";
import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

function Search() {
  return (
    <>
      <div className="flex items-center">
        <motion.div whileHover={{ scale: 1.1 }}>
          <FaSearch size={16} className={"mr-3"} color="#9ca2fb" />
        </motion.div>
        <input
          type="text"
          placeholder="Search assets..."
          className="h-[40px] bg-transparent text-white placeholder:italic placeholder:text-white outline-none"
        />
      </div>
    </>
  );
}

export default Search;
