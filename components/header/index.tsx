"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "@/components/container";
import LogoIcon from "@/assets/icons/main-logo.svg";
import PhoneIcon from "@/assets/icons/u_phone-alt.svg";
import MailIcon from "@/assets/icons/fi_mail.svg";
const Index = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <Container>
      <nav className="h-[79px] flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <div
            onClick={handleClick}
            className="flex items-center leading-7 gap-[11px] cursor-pointer"
          >
            <Image src={LogoIcon} alt="logo" />
            <span className="w-[100px] font-semibold text-[24px] text-[#fff]">
              Sport Market
            </span>
          </div>
          <div className="flex gap-[30px]">
            <p className="text-[#fff] cursor-pointer">Продукты</p>
            <p className="text-[#fff] cursor-pointer">Контакты</p>
            <p className="text-[#fff] cursor-pointer">Оплата и Доставка</p>
            <p className="text-[#fff] cursor-pointer">Новости</p>
            <p className="text-[#fff] cursor-pointer">О нас</p>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="flex items-center gap-[5px]">
            <Image src={PhoneIcon} alt="phone icon" />
            <a href="tel:+998905658585" className="text-[#fff]">
              +998 (90) 565-85-85
            </a>
          </div>
          <div className="flex items-center gap-[5px]">
            <Image src={MailIcon} alt="phone icon" />
            <a
              href="https://www.info@gmail.com"
              target="_blank"
              className="text-[#fff]"
            >
              info@gmail.com
            </a>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Index;
