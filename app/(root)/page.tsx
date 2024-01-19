import Navbar from "@/components/Navbar/page";
import Newsletter from "@/components/Newsletter/page";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="relative h-[50vh] w-screen border-b overflow-hidden text-center">
        <div className="absolute left-0 w-full h-full bg-[url('/assets/grid-bg.svg')] bg-cover bg-center opacity-40"></div>
        <div className="relative flexCenter flex-col gap-2 h-full padding-container">
          <h1 className="font-bold text-7xl lg:text-9xl">What I Know Is</h1>
          <h2 className="font-bold text-5xl lg:text-7xl text-background bg-foreground px-4 py-2">BUZZ</h2>
        </div>
      </section>

      {/* <Newsletter /> */}
    </>
  )
}
