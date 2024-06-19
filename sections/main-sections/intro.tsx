import Image from "next/image";
import Container from "@/components/container";
import Boots from "@/assets/images/boots.png";
function index() {
  return (
    <section className="bg-[#F2F2F2] pt-5 pb-[83px]">
      <Container>
        <div className="flex">
          <div className="w-[819px] h-[488px] bg-[#fff] flex relative overflow-hidden rounded-lg">
            <div className="pt-[82px] pl-[90px]">
              <h2 className="font-extrabold text-[32px] mb-[27px] w-[343px]">
                Бутсы Nike Phantom GT2 Elite FG
              </h2>
              <button className="border-[#FBD029] rounded-[10px] border-2 py-[10px] px-5">
                Подробности
              </button>
            </div>
            <div>
              <Image
                className="z-10 absolute top-[20px] right-[20px]"
                src={Boots}
                alt="boots"
              />
            </div>
            <div className="absolute w-[380px] h-[380px] bg-[#FF563D] top-[61px] right-[30px] rounded-full" />
            <div className="w-[445px] h-[821px] bg-[#BDD400] absolute rotate-[25deg] right-[-150px] top-[-50px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default index;
