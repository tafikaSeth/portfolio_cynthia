import type { ReactNode } from "react";
import Footer from "../app-footer";
import BubbleMenu from "../BubbleMenu";
import { MENU } from "@/constants";

interface MainLayoutProps {
    children: ReactNode;
    fullWidth?: boolean;
}

export default function MainLayout({ children, fullWidth = true }: MainLayoutProps) {
    return (
        <div className="min-h-screen
        bg-gradient-to-br from-[#212121] via-pink-300 to-[#000000]
        bg-fixed
        text-white">
            <BubbleMenu
                logo={<span className="text-3xl text-black font-bold">Cynthia.</span>}
                items={MENU}
                menuAriaLabel="Toggle navigation"
                menuBg="#ffffff"
                menuContentColor="#111111"
                useFixedPosition={true}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
            />
            <div
                className={`flex-1 pb-10 md:pb-10 ${fullWidth ? "" : "flex justify-center items-center"
                    }`}
            >
                <div className={fullWidth ? "w-full" : "w-full max-w-7xl"}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
