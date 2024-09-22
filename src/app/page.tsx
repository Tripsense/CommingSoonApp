import Image from "next/image";
import Logo from "../public/TripSense_logo.png"
import Banner from "../public/websitebanner.png"

export default function Home() {
  return (
    <div>
      <Image src={Logo} alt="img" height={30} className="pl-[20px] pt-[20px] lg:pl-[40px] lg:h-[60px] lg:w-[200px]"/>
      <div className="flex flex-wrap lg:mt-[80px] mt-[30px] justify-center">
            <span className="lg:w-[600px] p-[30px]">
        
            <h2 className=" font-[800] text-[28px] lg:text-[40px] pt-[30px]">No more disappointment the next time he/she asks <span className="text-[#734000] bg-[#ffd8a7] rounded-[10px] p-[6px]">#WhatNext</span> </h2>
                <h2 className=" font-[500] text-[15px] pt-[25px] mb-[50px]">DIY Trip planner&nbsp; &bull;&nbsp; Travel Guide&nbsp; &bull;&nbsp; Team Games</h2>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAaKgELbhNtk5aSK7bympVZ3eLzi8-MoTk7M8F-cbKhvFJaA/viewform?usp=sf_link" className="font-[700] text-[20px] mt-[50px] text-[#ffffff] bg-[#000000] rounded-[10px] p-[6px] w-[130px]">Join Waitlist</a>
                <h2 className=" font-[500] text-[15px] pt-[25px]">Get upto 80% Discount during product Launch!</h2>
            </span>
            <Image src={Banner} alt="" className="p-[20px]"/>
        </div>
    </div>
  );
}
