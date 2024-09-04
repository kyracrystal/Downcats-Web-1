import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href='/'>
            <div className="items-center hidden lg:flex">
                <Image src='/downcat-light.png' alt='Logo' height={40} width={40}/>
                <p className="font-semibold text-[#ffffff] text-3xl ml-2.5">
                    Downcats Dev
                </p>
            </div>
        </Link>
    )
}