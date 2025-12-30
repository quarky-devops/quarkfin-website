import {motion} from "motion/react";

export function Customers() {
    const features = [
        {
            step: "01",
            title: "Sign Up & Connect",
            description: "Add our API or SDK to your stack. No DevOps required.",
        },
        {
            step: "02",
            title: "Set Your Rules",
            description: "Drag-and-drop risk thresholds. Start with our defaults or customize.",
        },
        {
            step: "03",
            title: "Watch Fraud Drop",
            description: "See real-time approvals, blocks, and revenue saved",
        },
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10  max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index}/>
            ))}
        </div>
    );
}

const Feature = ({
                     step,
                     title,
                     description,
                     index,
                 }: {
    step: string;
    title: string;
    description: string;
    index: number;
}) => {
    return (
        <section className="w-full relative overflow-hidden">
            <div className="container  relative">
                <div className="gap-8 md:gap-12 relative">
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                        className="relative space-y-4 pr-8 pb-8"
                    >
                        <div
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-primary-foreground text-xl font-bold shadow-lg">
                            {step}
                        </div>
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="font-medium text-muted-foreground">{description}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
