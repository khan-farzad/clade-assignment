import Image from "next/image";

const Title = () => {
  return (
    <div className="flex flex-col gap-6 my-9 mx-[6.25rem]">
      <div className="flex justify-start items-center gap-3">
        <p className="text-[35px] text-tertiary leading-[3rem] font-bold ">
          Senior Product Designer
        </p>
        <div className="size-1 rounded-full bg-this-white"></div>
        <p className="text-sm text-this-gray font-normal">posted 2 days ago</p>
        <div className="flx gap-1 px-2 py-1 bg-[#ECFDF3] border-[#ABEFC6] rounded-full border">
          <div className="rounded-full size-1.5 bg-[#17B26A]"></div>
          <p className="text-xs text- font-medium">Open</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-[#5D5D5D] font-normal text-xl">
        <div className="flx gap-2">
          <Image
            src="/marker-pin-01.svg"
            alt="marker-pin"
            height={999}
            width={999}
            className="size-6"
          />
          Delaware, USA
        </div>
        <div className="size-0.5 rounded-full bg-this-white"></div>
        <div className="flx gap-2">
          <Image
            src="/coins-stacked-03.svg"
            alt="coins-stacked"
            height={999}
            width={999}
            className="size-6"
          />
          $300k-$400k
        </div>
      </div>
    </div>
  );
};

export default Title;
