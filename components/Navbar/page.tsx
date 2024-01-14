import { GitHubLogoIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { Button } from "../ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navebar = () => {
    return (
        <nav className='flexBetween padding-container border-b'>
            <Link href={"/"}>
                <span className='logo'>Wikibuzz.</span>
            </Link>

            <ul className='hidden lg:flex gap-6'>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}>
                        <Button variant="link">{link.label}</Button>
                    </Link>
                ))}
            </ul>

            <Link href={'https://github.com/vinayakkumawat/thewikibuzz'} target='_blank' className='hidden lg:flex'>
                <Button>
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    Code
                </Button>
            </Link>

            <div className='lg:hidden flex'>
                <Sheet>
                    <SheetTrigger><HamburgerMenuIcon className='h-6 w-6' /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </nav>
    )
}

export default Navebar