import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-10 overflow-hidden relative bg-black">
      <div className="w-11/12 lg:w-full h-3/6 lg:h-full flex justify-center lg:justify-start lg:absolute lg:top-0 lg:left-0 border-3 lg:border-none rounded-2xl overflow-hidden ">
        <Image src="/hero.nobg.png" alt="hero image" width={1300} height={800} className="h-full object-cover relative lg:absolute top-0 left-0" />
      </div>
      <div className="lg:h-screen w-full lg:p-5 flex items-center">
        <h1 className="w-full text-7xl lg:text-[128px]  text-foreground flex flex-col lg:flex-row lg:justify-between items-center"><span>MGOMY</span><span>ماجومي</span></h1>
      </div>
      
    </section>
  )
}
