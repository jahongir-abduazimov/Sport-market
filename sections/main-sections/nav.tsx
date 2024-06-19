import Image from "next/image";
import Container from "@/components/container";
import KatalogIcon from "@/assets/icons/fi_layers.svg";
import SearchIcon from "@/assets/icons/u_search.svg";
import UserIcon from "@/assets/icons/u_user.svg";
import HeartIcon from "@/assets/icons/u_heart-sign.svg";
import CartIcon from "@/assets/icons/u_shopping-cart-alt.svg";
const index = () => {
  return (
    <section>
      <Container>
        <div className="h-[85px] flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <button className="flex items-center gap-[10px] bg-[#1F1D14] px-9 py-[12px] rounded-[5px]">
              <Image src={KatalogIcon} alt="icon" />
              <span className="text-[20px] text-[#fff]">Каталог</span>
            </button>
            <div className="w-[502px] relative">
              <input
                className="h-[53px] bg-[#F2F2F2] pl-5 pr-12 rounded-[5px] w-full duration-200 outline-none ring-[#1F1D14] focus:ring-1"
                type="text"
                placeholder="Поиск"
              />
              <Image
                className="absolute right-5 top-[18px]"
                src={SearchIcon}
                alt="search icon"
              />
            </div>
          </div>
          <div className="flex gap-x-[25px] items-end">
            <div className="flex items-center gap-x-[13px]">
              <button className="w-[45px] h-[45px] bg-[#F2F2F2] rounded-[3px] flex items-center justify-center cursor-pointer">
                <Image src={UserIcon} alt="user icon" />
              </button>
              <button className="w-[45px] h-[45px] bg-[#F2F2F2] rounded-[3px] flex items-center justify-center cursor-pointer">
                <Image src={HeartIcon} alt="heart icon" />
              </button>
            </div>
            <button className="flex items-center gap-[5px] bg-[#F2F2F2] px-[30px] py-[12px]">
              <Image src={CartIcon} alt="cart icon" />
              <span className="text-[20px]">Корзина</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default index;
