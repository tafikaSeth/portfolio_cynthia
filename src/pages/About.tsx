import ProfileCard from "@/components/about/ProfileCard";
import SplitText from "@/components/split-text";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
    return (
        <section className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16">

            <SplitText
                text="About Me"
                className="
                    text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl 
                    text-white/50 text-center font-bold
                    leading-tight tracking-tight
                "
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                tag="h1"
            />

            <div className="
                flex flex-col lg:flex-row 
                gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16
                items-center justify-center 
                px-4 sm:px-6 md:px-8 lg:px-12
                py-4 sm:py-6 md:py-8
            ">

                <div className="
                    flex-shrink-0 
                    w-full max-w-sm sm:max-w-md lg:max-w-lg
                    flex justify-center lg:justify-start
                ">
                    <ProfileCard
                        name="Cynthia Rak."
                        title=""
                        handle="cynthia"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/about.png"
                        showUserInfo={false}
                        enableTilt={true}
                        enableMobileTilt={false}
                        enableAnimations={false}
                    />
                </div>
                
                <div className="
                    flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8
                    w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl
                    text-center lg:text-left
                ">
                    <p className="
                        text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                        text-white/90 leading-relaxed sm:leading-relaxed md:leading-loose
                        text-justify sm:text-justify lg:text-left
                        px-2 sm:px-0
                    ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    
                    <div className="flex justify-center lg:justify-start">
                        <Button className="
                            bg-pink-600 hover:bg-pink-700 active:bg-pink-800
                            text-white font-semibold
                            transition-all duration-200 ease-in-out
                            animate-bounce hover:animate-none
                            shadow-lg hover:shadow-xl
                            w-full max-w-xs px-4 py-3 text-sm
                            sm:w-auto sm:px-6 sm:py-3 sm:text-base sm:max-w-sm
                            md:px-8 md:py-4 md:text-lg
                            lg:px-10 lg:py-4 lg:text-xl
                            xl:px-12 xl:py-5 xl:text-2xl
                            lg:w-auto lg:max-w-none
                            flex items-center justify-center gap-2 sm:gap-3
                            cursor-pointer
                        ">
                            <Download className="
                                h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7
                                flex-shrink-0
                            " />
                            <span className="whitespace-nowrap">
                                Download my CV
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;