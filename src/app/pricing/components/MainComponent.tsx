"use client"

import {useState} from "react"
import {Briefcase, Check, ChevronDown, ChevronUp, Star, TrendingUp, X} from "lucide-react"
import Navbar from "@/app/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const currencyRates = {USD: 1, INR: 83, GBP: 0.79, EUR: 0.859}
const currencySymbols = {USD: "$", INR: "₹", GBP: "£", EUR: "€"}

const plans = [
    {
        name: "Free",
        description: "For developers and individuals to test and explore the full platform.",
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: ["500 Credits/month"],
        popular: false,
        buttonText: "Start For Free",
        url: 'https://app.quarkfin.ai/login'
    },
    {
        name: "Startup",
        description: "For early-stage startups with growing usage and a need for basic support.",
        monthlyPrice: 49,
        yearlyPrice: 535,
        features: [
            "5000 Credits/month",
            "Top up at $0.009 / credit",
            "Community & Email Support",
        ],
        popular: false,
        buttonText: "Choose Startup",
        url: 'https://app.quarkfin.ai/login'
    },
    {
        name: "Growth",
        description: "Best value for scaling businesses that need faster support and more credits.",
        monthlyPrice: 149,
        yearlyPrice: 1627,
        features: [
            "15,000 Credits/month (Best Value)",
            "Top up at $0.007 / credit",
            "Priority Email & Chat Support",
        ],
        popular: true,
        buttonText: "Choose Growth",
        url: 'https://app.quarkfin.ai/login'
    },
    {
        name: "Enterprise",
        description: "For large-scale deployments that require custom terms, SLAs, and dedicated support.",
        monthlyPrice: 'Custom',
        yearlyPrice: 'Custom',
        features: [
            "Custom Credit Volume",
            "Dedicated Account Manager & SLA",
        ],
        popular: false,
        buttonText: "Contact Sales",
        url: '/contact-us'
    },
]

const featureComparison = [
    {
        category: "Core Platform Access",
        features: [
            {name: "All Features Included", freemium: true, startup: true, pro: true, enterprise: true},
        ]
    },
    {
        category: "Usage & Support Differentiation",
        features: [
            {name: "Monthly Credits", freemium: "500", startup: "5000", pro: "15,000", enterprise: "Custom"},
            {
                name: "Support",
                freemium: "Community",
                startup: "Email",
                pro: "Priority Chat",
                enterprise: "Dedicated Manager"
            },
            {name: "Response Time SLA", freemium: "-", startup: "48 hours", pro: "< 8 hours", enterprise: "Custom"},
        ]
    }
];

const creditConsumption = [
    {service: "Business Risk Assessment", credits: 50},
    {service: "Lending & Credit Underwriting Report", credits: 100},
    {service: "AML Compliance Check", credits: 25},
    {service: "Intelligent Checkout (RTO Score)", credits: 10},
    {service: "Device Fingerprinting", credits: 5},
    {service: "Chargeback Guarantee Submission", credits: 5},
    {service: "All Other Individual Checks", credits: 5},
];

const faqs = [
    {
        question: "What happens if I go over my monthly credits?",
        answer: "If you're on the Free plan, you can purchase Pay-As-You-Go credits to top up. If you're on a paid plan, you can upgrade to the next tier for a better value or discuss custom overage rates with our team.",
    },
    {
        question: "Are all features really included in every plan?",
        answer: "Yes. We believe every user should have access to the full power of our platform. Our plans are designed to scale with your usage, not to lock features away. You get everything from day one.",
    },
    {
        question: "Can I change my plan at any time?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
    },
]


export default function MainComponent() {
    const [isYearly, setIsYearly] = useState(false)
    const [currency, setCurrency] = useState<'USD' | 'INR' | 'GBP' | 'EUR'>('USD')

    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [transactions, setTransactions] = useState(5000);
    const [onboards, setOnboards] = useState(50);

    const convert = (usd: number) => usd * currencyRates[currency]
    const money = (usd: number | string) =>
        typeof usd === 'string'
            ? 'Custom'
            : `${currencySymbols[currency]}${convert(usd).toLocaleString()}`

    const convertTopUp = (txt: string) => {
        // matches “Top up at $0.009 / credit”
        const m = txt.match(/Top up at \$([\d.]+) \/ credit/);
        if (!m) return txt;
        const converted = parseFloat(m[1]) * currencyRates[currency];
        return `Top up at ${currencySymbols[currency]}${converted.toFixed(3)} / credit`;
    }

    const estimatedCredits = (transactions * 10) + (onboards * 50);
    let recommendedPlan = 'The <strong>Enterprise Plan</strong> is recommended for this volume.';
    if (estimatedCredits <= 500) {
        recommendedPlan = 'The <strong>Free Plan</strong> is a great place to start.';
    } else if (estimatedCredits <= 2250) {
        recommendedPlan = 'The <strong>Startup Plan</strong> would be a perfect fit.';
    } else if (estimatedCredits <= 5000) {
        recommendedPlan = 'The <strong>Growth Plan</strong> offers the best value for this usage.';
    }


    return (
        <>
            <Navbar/>
            <div className="bg-white">
                {/* Header Section */}
                <div className="py-12 px-4 max-w-7xl mx-auto">
                    <div className="text-left mb-2">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pricing that scales
                            with you</h2>
                        <div className="mt-12 flex items-center justify-start gap-4">
                            <span
                                className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
                            <button
                                onClick={() => setIsYearly(!isYearly)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isYearly ? "bg-blue-600" : "bg-gray-200"}`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? "translate-x-6" : "translate-x-1"}`}/>
                            </button>
                            <span
                                className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}>Yearly</span>
                            {isYearly && (<span
                                className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Save ~9%</span>)}

                            {/* Currency single-select buttons ⭐ */}
                            <div className="flex items-center gap-2 ml-6">
                                {(["USD", "EUR", "GBP", "INR"] as const).map(c => (
                                    <button key={c}
                                            onClick={() => setCurrency(c)}
                                            className={`px-3 py-1 rounded-full border text-sm font-medium transition
                                        ${currency === c
                                                ? "bg-blue-600 text-white border-blue-600"
                                                : "bg-white text-gray-700 border-gray-300"}`}>
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* Pricing Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col rounded-2xl border-2 p-6 shadow-sm transition-all hover:shadow-lg ${plan.popular ? "border-blue-500 bg-blue-50/50 scale-105" : "border-gray-200 bg-white"}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <div
                                            className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            <Star className="w-3 h-3 fill-current"/> Most Popular
                                        </div>
                                    </div>
                                )}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">{plan.name}</h3>
                                    <p className="text-sm text-gray-600 mb-4 h-16 text-left">{plan.description}</p>
                                    <div className="mb-4 text-left">
                                        <span className="text-4xl font-bold text-gray-900">
                                            {money(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                                        </span>
                                        {typeof (isYearly ? plan.yearlyPrice : plan.monthlyPrice) === 'number' &&
                                            <span className="text-gray-600 ml-1">/{isYearly ? "year" : "month"}</span>}
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"/>
                                                <span
                                                    className="text-sm text-gray-700">{convertTopUp(feature)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href={plan.url}>
                                    <button
                                        className="cursor-pointer w-full mt-auto px-6 py-3 rounded-md font-semibold transition border border-[#2C2F8F] text-[#2C2F8F] hover:bg-[#2C2F8F] hover:text-white">
                                        {plan.buttonText}
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Pay-As-You-Go Section */}
                    <div
                        className="mt-8 p-8 rounded-2xl border border-gray-200 bg-gray-50 md:flex md:justify-between md:items-center">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">Pay-As-You-Go Credits</h4>
                            <p className="text-gray-600">
                                Need to top up? Buy credits on demand without a monthly commitment.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <span className="text-2xl font-bold text-gray-900">
                                {currencySymbols[currency]}{convert(1).toLocaleString()} <span
                                className="font-medium text-gray-600">/ 100 credits</span>
                            </span>
                            <a href="https://app.quarkfin.ai/login"
                               className="bg-[#2C2F8F] text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition shadow">
                                Buy Credits
                            </a>
                        </div>
                    </div>
                </div>

                {/* Feature Comparison Table Section */}
                <section className="bg-gray-50 py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-left mb-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Full Feature
                                Comparison</h2>
                            <p className="text-lg text-left text-gray-600">
                                Every plan includes all features. Our plans are designed to scale with your usage, not
                                to lock features away. You get everything from day one.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-lg border border-gray-200">
                            <table className="w-full min-w-[800px] border-collapse">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Free</th>
                                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Startup</th>
                                    <th className="text-center py-4 px-6 font-semibold text-blue-700 bg-blue-100/50">Growth</th>
                                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                                </tr>
                                </thead>
                                <tbody>
                                {featureComparison.map((category, catIndex) => (
                                    <>
                                        <tr key={catIndex} className="bg-gray-200/60">
                                            <td colSpan={5}
                                                className="py-3 px-6 font-bold text-gray-800">{category.category}</td>
                                        </tr>
                                        {category.features.map((feature, featIndex) => (
                                            <tr key={featIndex} className="border-t border-gray-200 bg-white">
                                                <td className="py-4 px-6 font-medium text-gray-800">{feature.name}</td>
                                                {[feature.freemium, feature.startup, feature.pro, feature.enterprise].map((value, planIndex) => (
                                                    <td key={planIndex}
                                                        className={`py-4 px-6 text-center ${planIndex === 2 ? 'bg-blue-50/50' : ''}`}>
                                                        {typeof value === "boolean" ? (
                                                            value ?
                                                                <Check className="w-5 h-5 text-green-500 mx-auto"/> :
                                                                <X className="w-5 h-5 text-gray-300 mx-auto"/>
                                                        ) : (
                                                            <span
                                                                className={`font-medium ${planIndex === 2 ? 'text-blue-700' : 'text-gray-700'}`}>{value}</span>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Credit Consumption</h2>
                            <p className="text-gray-600">
                                Understand how your actions translate into credits. Each service has a clear,
                                transparent cost.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-4 items-start">

                            {/* Left Column: Credit Consumption Table */}
                            <div className="lg:col-span-2">

                                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-white">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                        <tr>
                                            <th scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Service / Report
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                Credit Cost
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        {creditConsumption.map((item) => (
                                            <tr key={item.service}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                                    {item.service}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-semibold text-right">
                                                    {item.credits}
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            {/* Right Column: Credit Calculator */}
                            <div className="lg:col-span-3">
                                <div
                                    className="bg-gradient-to-br from-gray-100 to-blue-100/80 rounded-2xl shadow-lg p-8 h-full">
                                    <h3 className="text-2xl font-bold text-gray-900">Calculate Your
                                        Credits</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        {/* Left side: Inputs */}
                                        <div className="space-y-10">

                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label htmlFor="transactions-text"
                                                           className="font-semibold text-gray-700 flex items-center gap-2">
                                                        <TrendingUp className="w-5 h-5 text-blue-600"/>
                                                        Monthly Transactions
                                                    </label>
                                                    <input id="transactions-text" type="number"
                                                           value={transactions}
                                                           onChange={(e) => setTransactions(parseInt(e.target.value) || 0)}
                                                           className="w-24 text-right font-bold text-blue-800 bg-blue-100/50 p-1 rounded-md border-blue-200 border focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                                    />
                                                </div>
                                                <input id="transactions-range" type="range" min="0" max="50000"
                                                       step="100"
                                                       value={transactions}
                                                       onChange={(e) => setTransactions(Number(e.target.value))}
                                                       className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full transition"/>
                                            </div>
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label htmlFor="onboards-text"
                                                           className="font-semibold text-gray-700 flex items-center gap-2">
                                                        <Briefcase className="w-5 h-5 text-blue-600"/>
                                                        Monthly B2B Onboards
                                                    </label>
                                                    <input id="onboards-text" type="number"
                                                           value={onboards}
                                                           onChange={(e) => setOnboards(parseInt(e.target.value) || 0)}
                                                           className="w-24 text-right font-bold text-blue-800 bg-blue-100/50 p-1 rounded-md border-blue-200 border focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                                    />
                                                </div>
                                                <input id="onboards-range" type="range" min="0" max="500" step="1"
                                                       value={onboards}
                                                       onChange={(e) => setOnboards(Number(e.target.value))}
                                                       className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full transition"/>
                                            </div>
                                        </div>
                                        {/* Right side: Results */}
                                        <div
                                            className="flex flex-col items-center justify-center text-center bg-white/60 p-8 rounded-xl shadow-inner-lg h-full">
                                            <p className="text-base font-semibold text-gray-600">Estimated Monthly
                                                Credits</p>
                                            <div
                                                className="my-4 text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-800">
                                                {estimatedCredits.toLocaleString()}
                                            </div>
                                            <p className="font-semibold text-gray-800 text-lg"
                                               dangerouslySetInnerHTML={{__html: recommendedPlan}}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </section>


                {/* FAQ Section */}
                <section className="py-20 px-4 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-left mb-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked
                                Questions</h2>
                            <p className="text-lg text-left text-gray-600">
                                Got questions? We've got answers. If you can't find what you're looking for, contact our
                                support team.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                                    <button
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    >
                                        <span className="font-semibold text-gray-900">{faq.question}</span>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-blue-600"/>
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-blue-600"/>
                                        )}
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-6 pb-4 border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
