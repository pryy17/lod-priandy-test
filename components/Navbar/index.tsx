import Image from "next/image";
import React, { ComponentProps, FC } from "react";
import logo from "@/public/logo.png";
import bagIcon from "@/public/bagIcon.png";

type Props = {};

const Navbar: FC<ComponentProps<"div">> = (props: Props) => {
  return (
    <div className="grid grid-cols-12 mt-[47px] gap-10 absolute top-0 left-0 z-50 w-[90%] mx-[100px]">
      <strong className="text-[18px] font-[700] leading-[27px] col-span-2">
        Food Ajah
      </strong>
      <div className="col-span-9">
        <div className="ms-[170px] flex space-x-[60px]">
          <p className="text-[14px] font-[500] leading-[21px]">Sarapan</p>
          <p className="text-[14px] font-[500] leading-[21px]">Makan Siang</p>
          <p className="text-[14px] font-[500] leading-[21px]">Makan Malam</p>
        </div>
      </div>
      <div className="col-span-1">
        <Image src={bagIcon} alt="bag-icon" />
      </div>
    </div>
  );
};

export default Navbar;
