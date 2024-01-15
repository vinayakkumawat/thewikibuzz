import Link from "next/link";
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flexBetween padding-container">
        <span className="text-sm font-light">{currentYear} <Link href={"/"}>@Wikibuzz</Link></span>
        <div className="flexCenter gap-2">
            <Link href={""}><GitHubLogoIcon className="h-4 w-4" /></Link>
            <Link href={""}><InstagramLogoIcon className="h-4 w-4" /></Link>
            <Link href={""}><TwitterLogoIcon className="h-4 w-4" /></Link>
        </div>
    </footer>
  )
}

export default Footer