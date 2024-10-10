import React from "react";

interface ButtonProps {
  initial: string;
}

const Button = ({ initial }: ButtonProps) => {
  return (
    <>
      <button className="group relative h-12 bg-transparent px-4 text-primary">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
            {initial}
          </div>
          <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {initial}
          </div>
        </span>
      </button>
    </>
  );
};

export default Button;
