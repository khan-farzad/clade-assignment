import Image from "next/image";
const data = [
  {
    icon: "/users-01",
    title: "Applicants",
    count: "400",
  },
  {
    icon: "/user-check-01",
    title: "Matches",
    count: "100",
  },
  {
    icon: "/message-square-001",
    title: "Messages",
    count: "147",
  },
  {
    icon: "/eye",
    title: "Views",
    count: "800",
  },
];

const Sidebar = () => {
  return (
    <div className="py-9 px-3 gap-6 bg-background border-primary border-t border-l shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex flex-col">
      <div className="flex *:w-[172px] w-[360px] h-[48px] justify-between gap-4 items-center  font-normal">
        <button className="flx rounded-lg gap-2.5 px-6 py-3 border-secondary border bg-[#FEF4F2] text-secondary">
          <Image
            src="/trash-03.svg"
            alt="trash"
            height={999}
            width={999}
            className="size-5"
          />
          <p className="text-[16px] leading-[22px]">Delete Job</p>
        </button>
        <button className="flx rounded-lg gap-2.5 px-6 py-3 border-[#FED3CA] border-2 bg-secondary text-white">
          <Image
            src="/edit-02.svg"
            alt="edit"
            height={999}
            width={999}
            className="size-5"
          />
          Edit Job
        </button>
      </div>
      <div className="flex flex-col p-3 gap-4 mb-4 text-this-brown text-[16px] font-normal w-[360px]">
        {data.map((x, idx) => (
          <div key={`stat${idx}`}>
            <div className="flex justify-between items-center w-[336px]">
              <div className="flx gap-2.5 p-2.5 w-[135px]">
                <Image
                  src={`${x.icon}.svg`}
                  alt={x.icon}
                  height={999}
                  width={999}
                  className="size-5"
                />
                <p className="leading-[22px]">{x.title}</p>
              </div>
              <div className="px-1.5 w-[57px] flx text-xl font-normal text-tertiary">
                {x.count}
              </div>
            </div>
            {idx !== data.length - 1 && (
              <div className="w-full h-[1px] bg-primary" />
            )}
          </div>
        ))}
      </div>
      <div className="w-[385px] h-[196px] rounded-xl p-8 flex flex-col gap-12 bg-white border-[#F7F7F7] border-t border-r shadow-[-4px_8px_20px_0_rgb(0,0,0,0.1)] font-normal">
        <p className="text-[20px] leading-[30px] text-black">
          {`"A quote from an Atlassian."`}
        </p>
        <div className="flex gap-4 w-fit">
          <div>
            <Image
              src="/Avatar.svg"
              alt=""
              height={999}
              width={999}
              className="size-[45px]"
            />
          </div>
          <div className="flex flex-col gap-0.5 text-[16px] leading-[24px]">
            <p className="text-black">Name</p>
            <p className="text-[#828282]">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
