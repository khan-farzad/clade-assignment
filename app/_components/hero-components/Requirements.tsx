import Image from "next/image";

const Requirements = () => {
  return (
    <div className="flex my-9 ml-[6.25rem] gap-16 *:flex *:flex-col *:gap-2 *:w-[170px]">
      <div className="">
        <h2 className="text-alt text-[14px] leading-[21px] font-normal">
          Skills Required
        </h2>
        <div className="flex flex-col gap-2 *:rounded-md *:border *:border-[#D0D5DD] *:px-1.5 *:py-1 *:flex *:items-center *:w-fit *:gap-1 text-[#344054] text-[12px] leading-[18px] font-normal *:shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.08)]">
          <div className="">
            <Image
              src="/image1.png"
              alt="Figma"
              height={999}
              width={999}
              className="size-4"
            />
            <p>Figma</p>
          </div>
          <div>
            <Image
              src="/image2.png"
              alt="Adobe Illustrator"
              height={999}
              width={999}
              className="size-4"
            />
            Adobe Illustrator
          </div>
          <div>
            <Image
              src="/image3.png"
              alt="Adobe XD"
              height={999}
              width={999}
              className="size-4"
            />
            Adobe XD
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-alt text-[14px] leading-[21px]  font-normal">
          Preferred Language
        </h2>
        <p className="font-normal text-[16px] leading-[24px] text-tertiary">
          English
        </p>
      </div>
      <div className="">
        <h2 className="text-alt text-[14px] leading-[21px]  font-normal">
          Type
        </h2>
        <p className="font-normal text-[16px] leading-[24px] text-tertiary">
          Full Time
        </p>
      </div>
      <div className="">
        <h2 className="text-alt text-[14px] leading-[21px]  font-normal">
          Years of Experience
        </h2>
        <p className="font-normal text-[16px] leading-[24px] text-tertiary">
          3+ Years of Experience
        </p>
      </div>
    </div>
  );
};

export default Requirements;
