import {Tab} from '@headlessui/react'
import clsx from 'clsx'
import {AnimatePresence, motion} from 'framer-motion'
import {BriefcaseBusiness, CheckCircleIcon, ChevronRight, HandCoins, Shield} from "lucide-react";
import Link from "next/link";

const features = [
    {
        summary: 'Consumer Risk Prevention',
        icon: <Shield/>,
        description:
            'Stop fraudsters, not the growth',
        points: [{
            one: 'Reduce fraud orders with AI-powered intent scoring',
            two: 'Chargeback Guarantee: Auto-dispute fraud.',
            three: 'Card Fraud Suite: Block stolen cards, friendly fraud, and card testing.'
        }],
        link: 'Secure your checkout',
        href: '/consumer-risk-prevention',
    },
    {
        summary:
            'Business Risk Prevention',
        icon: <BriefcaseBusiness/>,
        description:
            'Onboard businesses, not the risk',
        points: [{
            one: 'KYB Automation: Verify legitimacy in minutes',
            two: 'Merchant Monitoring: Detect shady behavior post-onboarding',
            three: 'AML Compliance: Screen against global watchlists (OFAC, PEPs)'
        }],
        link: 'Make onboarding airtight',
        href: '/business-risk-prevention',
    },
    {
        summary:
            'Lending Risk Prevention',
        icon: <HandCoins/>,
        description:
            'Lend confidently, even to NTC',
        points: [{
            one: 'Credit Risk Scoring: AI-driven approvals for thin-file borrowers',
            two: 'Self-Serve LMS/LOS: Configure rules without engineering help',
            three: 'Lending-as-a-Service: White-label credit infrastructure'
        }],
        link: 'Power your lending',
        href: '/lending-risk-prevention',
    },
]

function Feature({feature, className}) {
    const bullets = feature.points?.[0]
        ? Object.values(feature.points[0])
        : feature.points ?? []


    return (
        <motion.article
            whileHover={{rotateX: -4, rotateY: 4}}
            transition={{type: 'spring', stiffness: 250, damping: 20}}
            className={clsx(
                'group relative overflow-hidden rounded-2xl bg-white',
                'ring-1 ring-slate-200 shadow transition-transform duration-200',
                'hover:-translate-y-1.5 hover:shadow-lg'
            )}
        >
            <span
                className="pointer-events-none absolute inset-0 z-0 rounded-2xl
                   transition-opacity duration-200 group-hover:opacity-100"
            />
            <div className="relative z-10 flex flex-col p-8">
                <div className="flex h-12 w-12 mb-4 items-center justify-center text-[2C2F8F] rounded-lg bg-[#EEF1FF]">
                    {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-900">{feature.summary}</h3>
                <p className=" text-sm text-slate-600">{feature.description}</p>

                {/* ▾ Bullet list ▾ */}
                <ul className="mt-6 w-full space-y-3 h-36">
                    <AnimatePresence initial={false}>
                        {bullets.map((pt, i) => (
                            <motion.li
                                key={pt}
                                initial={{x: -12, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: -12, opacity: 0}}
                                transition={{duration: 0.18, delay: i * 0.05}}
                                className="flex items-start gap-2 text-left"
                            >
                                <CheckCircleIcon className="h-5 w-5 shrink-0 text-emerald-500"/>
                                <span className="text-sm text-slate-700">{pt}</span>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>

                {/* ▾ CTA link ▾ */}
                <Link
                    href={feature.href}
                    className="mt-6 text-left inline-flex gap-1 text-md items-center font-bold
                     text-blue-600 transition-colors hover:text-blue-800"
                >
                    {feature.link}
                    <ChevronRight className="h-4 w-4"/>
                </Link>
            </div>
        </motion.article>
    )
}


function FeaturesDesktop() {
    return (
        <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                    <Feature
                        key={feature.summary}
                        feature={{
                            ...feature,
                            name: (
                                <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                                    <span className="absolute inset-0"/>
                                    {feature.summary}
                                </Tab>
                            ),
                        }}
                        className="relative"
                    />
                ))}
            </div>
        </div>
    )
}

export function Features2() {
    return (
        <section
            id="secondary-features"
            aria-label="Features for simplifying everyday business tasks"
        >
            <FeaturesDesktop/>
        </section>
    )
}
