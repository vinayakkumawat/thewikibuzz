import { Button } from "../ui/button"
import { Input } from "../ui/input"

const headingTitle = "Don't miss out, subscribe and stay ahead of the curve!";

const Newsletter = () => {
  return (
    <section className="margin-container">
      <div className="bg-black p-12 rounded-xl flexCenter flex-col gap-6 lg:flex-row lg:flexBetween lg:p-20">
        <h1 className="text-white text-2xl font-medium">{headingTitle}</h1>
        <div className="flex flex-col gap-2 w-full max-w-md lg:flex-row">
          <Input type="email" placeholder="Email" className="border-white bg-transparent text-white rounded-none" />
          <Button type="submit" variant={"outline"} className="text-white bg-transparent border-white rounded-none w-full lg:w-fit">Subscribe</Button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter