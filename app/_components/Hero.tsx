import Sidebar from "./Sidebar";
import About from "./hero-components/About";
import Company from "./hero-components/Company";
import Requirements from "./hero-components/Requirements";
import Title from "./hero-components/Title";

const Hero = () => {
  return (
    <div className="flex h-full">
      <div className="grow">
        <Title />
        <div className="h-[1px] w-full bg-primary"></div>
        <Requirements />
        <div className="h-[1px] w-full bg-primary"></div>
        <About />
        <div className="h-[1px] w-full bg-primary"></div>
        <Company />
      </div>
      <Sidebar />
    </div>
  );
};

export default Hero;
