import {CreditCard, Fingerprint, Shield} from "lucide-react"

export function SolutionSection() {
    const solutions = [
        {
            icon: Shield,
            title: "Quark Secure",
            description:
                "AI-powered onboarding intent scoring to block fake accounts and RTO.\n"
            ,
            gradient: "from-emerald-500 to-teal-600",
        },
        {
            icon: CreditCard,
            title: "Chargeback Guarantee",
            description: "Fewer chargebacks &  more revenue for your business.",
            gradient: "from-purple-500 to-indigo-600",
        },
        {
            icon: Fingerprint,
            title: "Device Fingerprinting",
            description: "Detect risky devices, VPNs, account takeovers, and prevent promo abuse.",
            gradient: "from-orange-500 to-red-600",
        },
    ]

    return (
        <div id="solutions">
            <div className="text-sora container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-12">
                    <h2 className=" text-[#2C2F8F] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Everything
                        You Need to
                        Stop Fraud,
                        Before It Starts
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-4">
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
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
