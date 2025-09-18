import SplitText from "@/components/split-text";
import { CardWork } from "@/components/work/card-work";

const Work = () => {

    return (
        <section className="flex flex-col gap-4">
            <SplitText
                text="Experiences"
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
            <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-12 items-center justify-center p-8">
                <CardWork background="bg-pink-600" oraganisation='BOA - ( August 2025 - )' title="INTERN CUSTOMER SERVICE RP" description="A passion for knowledge. Ability to plan for everything. Great debugging skills. “Accelerated Failure” Mentality." />
                <CardWork background="bg-pink-600" oraganisation='AUTARYSYS - ( June 2024-February 2025 )' title="Administrative assistant & Cashier" description="A passion for knowledge. Ability to plan for everything. Great debugging skills. “Accelerated Failure” Mentality." />
                <CardWork background="bg-pink-600" oraganisation='HOTEL GRAND PALAIS - ( June 2023-February 2023 )' title="RECEPTIONIST" description="A passion for knowledge. Ability to plan for everything. Great debugging skills. “Accelerated Failure” Mentality." />
            </div>
        </section>
    );
}
export default Work