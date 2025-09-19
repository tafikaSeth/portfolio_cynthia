import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import ScrollVelocity from "@/components/scroll-velocity";
import SplitText from "@/components/split-text";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import { Suspense } from "react";
import Contact from "./Contact";
import Work from "./Work";
import About from "./About";
import ProfileCard from "@/components/about/ProfileCard";
import clsx from "clsx";
import useResponsive from "@/hooks/useResponsive";

export default function Home() {
    const { isTablet } = useResponsive()

    return (
        <>
            <section id="home" className="relative flex items-center justify-center min-h-[90vh] px-4 sm:px-6">
                <div className="relative">

                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.4 } }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="
                            hidden md:block
                            absolute right-full  
                            text-[15vw] md:text-[10vw] lg:text-[8vw]
                            font-pinyon
                            tracking-tight text-white
                            select-none pointer-events-none
                        "
                    >
                        Hey,
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.4 } }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="
                            hidden md:block
                            absolute left-full
                            text-[15vw] md:text-[10vw] lg:text-[8vw]
                            font-pinyon tracking-tight text-white
                            select-none pointer-events-none
                        "
                    >
                        there
                    </motion.span>

                    <ProfileCard
                        name=""
                        title=""
                        handle="cynthia"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/ceth.jpg"
                        showUserInfo={false}
                        enableTilt={true}
                        enableMobileTilt={false}
                        enableAnimations={true}
                    />

                    <div
                        className={clsx(
                            "absolute -bottom-16 sm:-bottom-20 md:-bottom-24 left-1/2 -translate-x-1/2 flex flex-col md:flex-row justify-between w-full max-w-xs sm:max-w-md md:w-screen gap-6 md:gap-4 px-4 sm:px-6 md:px-0 items-center md:items-end",
                            {
                                "md:max-w-5xl": !isTablet,
                            }
                        )}
                    >

                        <div className="flex flex-col items-center md:items-start gap-3 md:gap-4 order-2 md:order-1">
                            <Badge className="
                                bg-pink-500 cursor-pointer animate-bounce hover:bg-pink-600 
                                text-white px-3 py-1 sm:px-4 sm:py-1 md:px-4 md:py-1
                                rounded-full text-xs sm:text-sm 
                                shadow-lg transition-colors duration-200
                            ">
                                Available for new job
                            </Badge>
                            <motion.h2 className="
                                text-xl leading-[1.2] sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl 
                                font-extrabold tracking-tight text-white
                                text-center md:text-left
                            ">
                                I AM CYNTHIA
                            </motion.h2>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-3 md:gap-4 order-1 md:order-2">
                            <SplitText
                                text="consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus"
                                className="
                                    z-20 tracking-tight text-white/90 font-medium md:font-bold 
                                    text-xs sm:text-sm md:text-base lg:text-lg
                                    text-center md:text-right
                                    text-balance
                                    leading-1.2
                                    max-w-xs sm:max-w-sm md:max-w-md lg:w-90
                                "
                                delay={50}
                                duration={0.3}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                            />
                            <div className="text-center md:text-right">
                                <h2 className="
                                    text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 
                                    font-extrabold tracking-tight text-neutral-50
                                    leading-tight
                                ">
                                    CUSTOMER
                                </h2>
                                <h2 className="
                                    text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 
                                    font-extrabold tracking-tight text-neutral-50
                                    leading-tight
                                ">
                                    SERVICE
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollVelocity
                texts={['Microsoft Excel', 'Microsoft Word']}
                velocity={100}
                className="custom-scroll-text"
            />

            <SectionWrapper fullWidth={false}>
                <section id="work" className="py-8 sm:py-12 md:py-16">
                    <Suspense fallback={
                        <div className="flex justify-center items-center h-32">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        </div>
                    }>
                        <Work />
                    </Suspense>
                </section>
            </SectionWrapper>

            <SectionWrapper fullWidth={false}>
                <section id="about" className="py-8 sm:py-12 md:py-16">
                    <Suspense fallback={
                        <div className="flex justify-center items-center h-32">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        </div>
                    }>
                        <About />
                    </Suspense>
                </section>
            </SectionWrapper>

            <SectionWrapper fullWidth={false}>
                <section id="contact" className="py-8 sm:py-12 md:py-16">
                    <Suspense fallback={
                        <div className="flex justify-center items-center h-32">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        </div>
                    }>
                        <Contact />
                    </Suspense>
                </section>
            </SectionWrapper>
        </>
    );
}