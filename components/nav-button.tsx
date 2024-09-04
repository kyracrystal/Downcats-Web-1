import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
    href: string;
    label: string;
    isActive?: boolean;
};

export const NavButton = ({
    href,
    label,
    isActive,
}: Props) => {
    return (
        <Button
            asChild 
            size='sm'
            variant="outline"
            className={cn(
                "w-full lg:w-auto justify-between font-normal text-md hover:bg-[#1D1D22] hover:text-[#ffffff] border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-[#9394A1] focus:bg-[#ffffff]/30 transition",
                isActive? "bg-[#18181B] text-[#ffffff]" : "bg-transparent",
            )}
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};