import {ChevronRight, CreditCard, Fingerprint, Shield} from "lucide-react"
import Link from "next/link";

export function CoreModules() {
    const solutions = [
        {
            icon: Shield,
            title: "Quark Secure",
            description:
                "AI-powered onboarding intent scoring to block fake accounts and RTO.\n"
            ,
            gradient: "from-emerald-500 to-teal-600",
            link: 'Learn More',
        },
        {
            icon: CreditCard,
            title: "Chargeback Guarantee",
            description: "Fewer chargebacks &  more revenue for your business.",
            gradient: "from-purple-500 to-indigo-600",
            link: 'Learn More',
        },
        {
            icon: Fingerprint,
            title: "Device Fingerprinting",
            description: "Detect risky devices, VPNs, account takeovers, and prevent promo abuse.",
            gradient: "from-orange-500 to-red-600",
            link: 'Learn More',
        },
    ]

    return (
        <div id="solutions">
            <div className="text-sora container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16">
                    <h2 className=" text-[#2C2F8F] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">From
                        Suspicion to Certainty in Minutes</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div key={index}
                             className="p-6 rounded-md cursor-pointer relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5`}></div>
                            <div className="relative">
                                <div
                                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${solution.gradient} w-fit mb-4`}>
                                    <solution.icon className="h-6 w-6 text-white"/>
                                </div>
                                <h1 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h1>
                                <p className="text-gray-600">{solution.description}</p>
                            </div>
                            <Link
                                href="#"
                                className="mt-6 text-left inline-flex gap-1 text-md items-center font-bold
                     text-blue-600 transition-colors hover:text-blue-800"
                            >
                                {solution.link}
                                <ChevronRight className="h-4 w-4"/>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
