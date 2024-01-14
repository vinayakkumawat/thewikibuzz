import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { Button } from "../ui/button"

const Navebar = () => {
    return (
        <nav className='flexBetween padding-container'>
            <Link href={"/"}>
                <span>Wikibuzz</span>
            </Link>

            <ul>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}>
                        <Button variant="link">{link.label}</Button>
                    </Link>
                ))}
            </ul>

            <Link href={''}>
            <Button>
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                Code
            </Button>
            </Link>
        </nav>
    )
}

export default Navebar