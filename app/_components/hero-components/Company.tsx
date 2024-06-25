import Image from "next/image";

const Company = () => {
  const about = [
    {
      title: "Company Size",
      desc: "1k - 2k Employees",
    },
    {
      title: "Type",
      desc: "Private",
    },
    {
      title: "Sector",
      desc: "Information Technology Infrastructure",
    },
    {
      title: "Funding",
      desc: "Bootstrapped",
    },
    {
      title: "Founded In",
      desc: "2019",
    },
    {
      title: "Founded By",
      desc: "Scott Farquhar, Mike Cannon-Brookes",
    },
  ];
  return (
    <div className="flex flex-col gap-4 py-9 px-[6.25rem] relative">
      <div className="flex items-center gap-3 px-2.5 pt-2.5 pl-0 font-normal text-xl text-this-brown">
        <Image
          src="/Rectangle43.svg"
          alt="Atlassian logo"
          height={999}
          width={999}
          className="size-10"
        />
        Atlassian
      </div>
      <div className="absolute flx left-[257px] top-[50px] h-[26px] w-[67px] bg-[#E0EBF9] rounded-lg px-6 py-3.5 shadow-[0_4px_4px_0_rgb(0,0,0,0.25)] font-bold text-[11px] leading-[16.5px] text-[#003788]">
        Follow
      </div>
      <div className="flex flex-wrap w-[736px] gap-x-12 gap-y-6 font-normal">
        {about.map((el, idx) => (
          <div key={`num${idx}`} className="flex flex-col gap-2 w-[344px]">
            <h3 className="text-sm text-alt">{el.title}</h3>
            <p className="text-base text-tertiary">{el.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-[12px] leading-[18px] font-normal text-other underline">
        Report this listing
      </p>
    </div>
  );
};

export default Company;
