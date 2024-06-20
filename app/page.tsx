import Nav from "@/sections/main-sections/nav"
import Intro from "@/sections/main-sections/intro";
import Katalog from "@/sections/main-sections/katalog";
import Discount from "@/sections/main-sections/discount";
import News from "@/sections/main-sections/news";
import Best from "@/sections/main-sections/best";
import Products from "@/sections/main-sections/products";
import Useful from "@/sections/main-sections/useful";

export default function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <Katalog />
      <Discount />
      <News />
      <Products />
      <Best />
      <Useful />
    </>
  );
}
