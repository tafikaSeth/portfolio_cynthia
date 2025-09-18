import { motion } from "framer-motion";
import { CardContact } from "@/components/contact/cardForm";
import SplitText from "@/components/split-text";

const Contact = () => {
    return (
        <section className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            <SplitText
                text="Contact Me"
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
                w-full items-center justify-center
                px-4 sm:px-6 md:px-8 lg:px-12
            ">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="
                        w-full lg:w-1/2 flex flex-col
                        text-center lg:text-left
                    "
                >
                    <div className="flex flex-col space-y-0 sm:space-y-3 md:space-y-4">
                        <SplitText
                            text="Got an awesome idea?"
                            className="
                                text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl 
                                text-neutral-50 font-bold
                                leading-tight tracking-tight
                            "
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            tag="h2"
                        />
                        <SplitText
                            text="Let's work together."
                            className="
                                text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl 
                                text-neutral-50 font-bold
                                leading-tight tracking-tight
                            "
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-200px"
                            textAlign="center"
                            tag="h2"
                        />
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="
                        w-full lg:w-1/2 
                        flex flex-col gap-4 sm:gap-5 md:gap-6
                        justify-center lg:justify-start
                        max-w-lg lg:max-w-none mx-auto lg:mx-0
                    "
                >
                    <div className="
                        w-full 
                        px-2 sm:px-4 md:px-6 lg:px-0
                        transform hover:scale-[1.02] 
                        transition-transform duration-300 ease-out
                    ">
                        <CardContact />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;