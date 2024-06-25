const Navbar = () => {
  return (
    <div className=" border-primary border">
      <div className="ml-[6.25rem] text-[20px] leading-[30px] gap-[4.5rem] text-this-gray font-normal py-5 flex justify-start items-center">
        <div className="text-secondary font-normal relative">
          Job Preview
          <p className="h-0.5 w-1/2 bg-secondary absolute -bottom-5 translate-x-1/2"></p>
        </div>
        <p>Applicants</p>
        <p>Match</p>
        <p>Messages</p>
      </div>
    </div>
  );
};

export default Navbar;
