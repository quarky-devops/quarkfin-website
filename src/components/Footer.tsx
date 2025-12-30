import React from "react";
import {FaDiscord, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';
import logoWhite from '@/images/logos/logoWhite.png'
import Image from "next/image";
import Link from "next/link";


const navigation = {
    products: [
        {name: 'Business Risk Prevention', href: '/business-risk-prevention'},
        {name: 'Consumer Risk Prevention', href: '/consumer-risk-prevention'},
        {name: 'Lending Risk Prevention', href: '/lending-risk-prevention'},
    ],
    solutions: [
        {name: 'D2C & eCommerce Solutions', href: '/solutions/d2c-ecommerce'},
        {name: 'Payment Gateways & Merchant Aggregators', href: '/solutions/payment-gateways-and-aggregators'},
        {name: 'Digital Lending (B2B & B2C)', href: '/solutions/digital-lending'},
        {name: 'Travel & Quick Commerce Solutions', href: '/solutions/travel-ecommerce'},
    ],
    company: [
        {name: 'Contact Us', href: '/contact-us'},
        {name: 'About Us', href: '/about-us'},
    ],
    social: [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/quarkfinai',
            icon: FaLinkedin,
        },
        {
            name: 'Discord',
            href: 'https://discord.gg/tSXuC6ce',
            icon: FaDiscord,
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/quarkfinai',
            icon: FaInstagram,
        },
        {
            name: 'Twitter',
            href: 'https://x.com/quarkfinai',
            icon: FaTwitter,
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/@quarkfinai',
            icon: FaYoutube,
        },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:py-12">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        {/* Replaced Next.js Image with standard img tag */}
                        <Link href="/">
                            <Image
                                src={logoWhite}
                                alt="QuarkfinAI logo"
                                width={120}
                                height={100}
                                priority
                                className="h-34 w-auto mt-[-48]"
                            />
                        </Link>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">Products</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.products.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href}
                                           className="text-sm leading-6 text-gray-300 hover:text-white">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.solutions.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href}
                                           className="text-sm leading-6 text-gray-300 hover:text-white">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.company.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href}
                                           className="text-sm leading-6 text-gray-300 hover:text-white">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8 md:flex  md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {navigation.social.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer"
                                   className="text-gray-400 hover:text-gray-300">
                                    <span className="sr-only">{item.name}</span>
                                    <IconComponent className="h-6 w-6" aria-hidden="true"/>
                                </a>
                            );
                        })}
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className=" text-xs leading-5 text-gray-400">
                            &copy; {new Date().getFullYear()} QuarkfinAI, Inc. All rights reserved.
                        </p>
                        <div className="mt-4 flex justify-center space-x-4 text-xs leading-5">
                            {/* Replaced Next.js Link with standard a tag */}
                            <a href="/privacy-policy" className="text-gray-400 hover:text-gray-300">
                                Privacy Policy
                            </a>
                            <a href="/terms-and-conditions" className="text-gray-400 hover:text-gray-300">
                                Terms and Conditions
                            </a>
                            <a href="/refund-and-cancellation-policy" className="text-gray-400 hover:text-gray-300">
                                Refund and Cancellation Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
