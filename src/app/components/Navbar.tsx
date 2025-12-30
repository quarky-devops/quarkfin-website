"use client";

import {
    Bars3Icon,
    CalendarDaysIcon,
    CalendarIcon,
    ChartBarIcon,
    ChartPieIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    HomeIcon,
    PuzzlePieceIcon,
    ServerStackIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid';
import {useState} from 'react';
import Image from "next/image";
import logo from '@/images/logos/logo.jpg'
import Link from 'next/link'
import {ContactIcon} from "lucide-react";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        {
            label: 'Products',
            icon: PuzzlePieceIcon,
            links: [
                {
                    title: 'Business Risk Prevention',
                    desc: 'No Risky Merchants',
                    icon: ChartPieIcon,
                    url: '/business-risk-prevention'
                },
                {
                    title: 'Consumer Risk Prevention',
                    desc: 'Stop Fraud Before It Starts',
                    icon: CalendarIcon,
                    url: '/consumer-risk-prevention'
                },
                {
                    title: 'Lending Risk Prevention',
                    desc: 'Defense Against Lending Fraud',
                    icon: CalendarDaysIcon,
                    url: '/lending-risk-prevention'
                },
            ],
        },
        {
            label: 'Solutions',
            icon: ChartBarIcon,
            links: [
                {
                    title: 'D2C & eCommerce',
                    desc: 'Custom fit your process',
                    icon: CalendarIcon,
                    url: '/solutions/d2c-ecommerce'
                },
                {
                    title: 'Payment Gateways & Aggregators',
                    desc: 'Modernize operations',
                    icon: ChartPieIcon,
                    url: '/solutions/payment-gateways-and-aggregators'
                },
                {
                    title: 'Digital Lending',
                    desc: 'Unify user flow',
                    icon: CalendarDaysIcon,
                    url: '/solutions/digital-lending'
                },
                {
                    title: 'Travel & Quick Commerce',
                    desc: 'Unify user flow',
                    icon: CalendarDaysIcon,
                    url: '/solutions/travel-ecommerce'
                },
            ],
        },
        // {
        //     label: 'Resources',
        //     icon: HomeIcon,
        //     links: [],
        // },
        {
            label: 'Integrations',
            icon: ServerStackIcon,
            links: [
                {title: 'Shopify', desc: '', icon: CalendarIcon, url: '/coming-soon'},
                {title: 'WooCommerce', desc: '', icon: ChartPieIcon, url: '/coming-soon'},
                {title: 'Direct APIs', desc: '', icon: CalendarDaysIcon, url: '/coming-soon'},
                {title: 'SDK', desc: '', icon: CalendarDaysIcon, url: '/coming-soon'},
                {title: 'Web SDK', desc: '', icon: CalendarDaysIcon, url: '/coming-soon'},
            ],
        },
        {
            label: 'About QuarkfinAI',
            icon: HomeIcon,
            links: [
                {title: 'Contact Us', desc: '', icon: ContactIcon, url: '/contact-us'},
                {title: 'About us', desc: '', icon: CalendarIcon, url: '/about-us'},
            ],
        },
    ];


    return (
        <nav className="px-6 py-4 shadow-md bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo + Nav */}
                <div className="flex items-center space-x-8">
                    <div className="text-2xl font-bold text-[#2C2F8F]">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="QuarkfinAI logo"
                                width={120}
                                height={100}
                                priority
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => item.links.length > 0 && setNavOpen(item.label)}
                                onMouseLeave={() => setNavOpen(null)}
                            >
                                <Link href='#' passHref>
                                    <button
                                        className="cursor-pointer flex items-center text-sm font-medium text-gray-800 hover:text-[#2C2F8F] transition"
                                    >
                                        {item.label}
                                        {item.links.length > 0 && (
                                            navOpen === item.label ? (
                                                <ChevronUpIcon
                                                    className="w-4 h-4 ml-1 transition-transform duration-300"/>
                                            ) : (
                                                <ChevronDownIcon
                                                    className="w-4 h-4 ml-1 transition-transform duration-300"/>
                                            )
                                        )}
                                    </button>
                                </Link>

                                {item.links.length > 0 && (
                                    <div
                                        className={` cursor-pointer absolute top-full mt-4 bg-white border border-gray-100 shadow-xl rounded-xl w-80 p-4 z-50 transition-all duration-300 ease-in-out origin-top transform ${
                                            navOpen === item.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                                        }`}
                                    >
                                        <ul className="space-y-4">
                                            {item.links.map((link) => (
                                                <Link
                                                    key={link.title}
                                                    href={link.url ?? ''}
                                                    className="flex space-x-3 items-center group cursor-pointer p-3 rounded-md transition-all duration-200 hover:bg-gray-100"
                                                >
                                                    <link.icon
                                                        className="w-5 h-5 text-gray-400 group-hover:text-[#2C2F8F]"/>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-500 group-hover:text-[#2C2F8F]">
                                                            {link.title}
                                                        </p>
                                                        <p className="text-sm text-gray-400">{link.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/coming-soon">
                        <button
                            className="
              relative inline-block rounded-lg p-[2px]
              cursor-pointer
              font-semibold text-white
              bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400
              transition-all duration-300 ease-in-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40
              active:translate-y-0 active:shadow-md
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
            "
                        >
            <span className="block rounded-[6px] bg-gray-900 px-6 py-3">
              Login
            </span>
                        </button>
                    </Link>

                    <Link href="/pricing">
                        <button
                            type="button"
                            className="
              group inline-flex items-center justify-center gap-2
              rounded-lg bg-white border-1 border-[#2C2F8F] text-[#2C2F8F] px-6 py-3
              text-center font-semibold
              shadow-md transition-all duration-300 ease-in-out
              hover:bg-[#3A50D9] hover:-translate-y-1 hover:shadow-xl hover:text-white cursor-pointer
              active:translate-y-0 active:shadow-md
              focus:outline-none focus:ring-2 focus:ring-[#3A50D9] focus:ring-offset-2
            "
                        >
                            <span>Pricing</span>

                        </button>
                    </Link>


                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? (
                            <XMarkIcon className="w-6 h-6 text-[#2C2F8F]"/>
                        ) : (
                            <Bars3Icon className="w-6 h-6 text-[#2C2F8F]"/>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden mt-4 space-y-4">
                    {navItems.map((item) => (
                        <details key={item.label} className="group">
                            <summary
                                className="cursor-pointer px-4 py-2 flex justify-between items-center text-sm text-gray-800 hover:text-[#2C2F8F]"
                            >
                                {item.label}
                                {item.links.length > 0 && (
                                    <ChevronDownIcon
                                        className="w-4 h-4 ml-1 group-open:rotate-180 transition-transform"/>
                                )}
                            </summary>
                            {item.links.length > 0 && (
                                <ul className="pl-6 pr-4 pt-2 space-y-3">
                                    {item.links.map((link) => (
                                        <Link
                                            key={link.title}
                                            href={link.url ?? ''}
                                            className="flex items-start space-x-3 group cursor-pointer p-3 rounded-md transition-all duration-200 hover:bg-gray-100"
                                        >
                                            <li className="text-sm text-gray-600">{link.title}</li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </details>
                    ))}
                    <div className="flex gap-4">
                        <Link href="/coming-soon">
                            <button
                                className="
              relative inline-block rounded-lg p-[2px]
              cursor-pointer
              font-semibold text-white
              bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400
              transition-all duration-300 ease-in-out
              hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40
              active:translate-y-0 active:shadow-md
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
            "
                            >
            <span className="block rounded-[6px] bg-gray-900 px-6 py-3">
              Login
            </span>
                            </button>
                        </Link>

                        <Link href="/pricing">
                            <button
                                type="button"
                                className="
              group inline-flex items-center justify-center gap-2
              rounded-lg bg-white border-1 border-[#2C2F8F] text-[#2C2F8F] px-6 py-3
              text-center font-semibold
              shadow-md transition-all duration-300 ease-in-out
              hover:bg-[#3A50D9] hover:-translate-y-1 hover:shadow-xl hover:text-white cursor-pointer
              active:translate-y-0 active:shadow-md
              focus:outline-none focus:ring-2 focus:ring-[#3A50D9] focus:ring-offset-2
            "
                            >
                                <span>Pricing</span>

                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
