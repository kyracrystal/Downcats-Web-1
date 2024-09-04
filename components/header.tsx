import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

import { HeaderLogo } from "@/components/header-logo";
import { Navigation } from "@/components/navigation";
import { Loader2 } from "lucide-react";
import { root } from "postcss";

export const Header = () => {
    return (
        <header className="bg-[#131316] px-4 py-8 lg:px-14 pb-52 ">
            <div className="max-w-screen-2xl -ml-16 mr-auto lg:mx-auto">
                <div className="w-full flex items-center justify-between mb-14 text-[#ffffff]">
                    <div className="flex items-center lg gap-x-16">
                        <HeaderLogo/>
                        <Navigation/>
                    </div>
                    <div className="text-xl">
                        <ClerkLoaded>
                            <UserButton showName/>
                        </ClerkLoaded>
                    </div>
                    <ClerkLoading>
                        <Loader2 className="size-8 animate-spin text-[#3f3f49]"/>
                    </ClerkLoading>
                </div>
            </div>
        </header>
    );
}