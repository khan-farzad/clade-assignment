import Image from "next/image";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <Navbar />
      <Hero />
    </div>
  );
}
