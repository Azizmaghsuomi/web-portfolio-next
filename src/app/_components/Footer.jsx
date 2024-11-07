import Image from "next/image";
import React from "react";

import LogoName from "@/public/images/Aziz-name-icon-darkmood.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent z-10 text-white">
      <div className="container p-12 flex items-center justify-between">
        <span>
          <Link href={"/"}>
            <Image
              href="/"
              src={LogoName}
              width={200}
              height={200}
              alt="Logo"
              className="hover:scale-125 duration-500 cursor-pointer w-[100px] lg:w-[150px]"
            />
          </Link>
        </span>
        <p className="text-slate-700">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
