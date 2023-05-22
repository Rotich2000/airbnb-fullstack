'use client'
import Image from "next/image"
import {useRouter} from 'next/navigation'

const Logo = () => {
    const router = useRouter();

    return (
        <Image
        onClick={() => router.push('/')}
        src="/images/Airbnb-logo.png"
        alt="Logo"
        className="hidden lg:block cursor-pointer"
        height="100"
        width="100"
        />
    )
}

export default Logo;