import Image from "next/image";

const Header = () => {
  return (
    <div className="px-8 py-6 shadow-[0_0.25rem_0.25rem_0_rgba(217,217,217,0.1)]">
      <div className="flex justify-between h-[65px]">
        <div className="bg-primary font-bold text-[20px] leading-[30px] h-[61px] w-[100px] text-secondary px-[9px] py-[28px] flx">
          Logo
        </div>
        <div className="flex justify-between items-center gap-2 text-[20px] leading-[30px] font-normal">
          <div className="flx border-[#FCB4A5] border-2 px-[13px] py-[13.5px] gap-2 rounded-[48px] bg-secondary text-white">
            <Image
              className="size-6 "
              src="briefcase-02.svg"
              alt="breifcase"
              height={999}
              width={999}
            />
            <p className="w-[47px]">Jobs</p>
          </div>
          <div className="flex border-this-white rounded-[36px] border-[0.5px] p-[7px] h-full items-center justify-around shadow-[inset_0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)] text-[20px] leading-[30px] font-normal w-[602px]">
            <div className="flx gap-2 text-other">
              <Image
                className="size-6 "
                src="message-square-01.svg"
                alt="message-sqaure"
                height={999}
                width={999}
              />
              Messages
            </div>
            <div className="flx gap-2 text-other">
              <Image
                className="size-6 "
                src="coins-hand.svg"
                alt="coins-hand"
                height={999}
                width={999}
              />
              Payments
            </div>
            <div className="flx gap-2 text-other">
              <Image
                className="size-6 "
                src="users-011.svg"
                alt="user"
                height={999}
                width={999}
              />
              Applications
            </div>
          </div>
        </div>
        <div className="flx p-2.5 gap-4">
          <Image
            className="size-8 "
            src="bell-02.svg"
            alt="bell"
            height={999}
            width={999}
          />
          <div className="flx gap-1.5">
            <Image
              className="size-10 "
              src="Rectangle5.svg"
              alt="rectangle"
              height={999}
              width={999}
            />
            <Image
              className="size-5 "
              src="chevron-down.svg"
              alt="chevron-down"
              height={999}
              width={999}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
