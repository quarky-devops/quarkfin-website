"use client"

import Navbar from "@/app/components/Navbar";
import React, {useEffect, useState} from "react";
import {SolutionSection} from "@/app/consumer-risk-prevention/SolutionSection";
import IndustryPainPoints from "@/app/consumer-risk-prevention/IndustryPainPoints";
import HowItWorks from "@/app/consumer-risk-prevention/HowItWorks";
import Footer from "@/components/Footer";
import {ComparisonTable} from "@/app/consumer-risk-prevention/ComparisonTable";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

function AnimatedDashboard() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const target = 1429
        const duration = 1000
        let start = 0
        const stepTime = Math.max(Math.floor(duration / target), 8)
        const timer = setInterval(() => {
            start += 1
            setCount(start)
            if (start >= target) clearInterval(timer)
        }, stepTime)
        return () => clearInterval(timer)
    }, [])

    return (
        <div
            className="mx-auto w-full max-w-sm rounded-xl bg-white p-6 shadow-lg animate-fade-in"
            data-aos="fade-up"
        >
            <h3 className="text-sm font-medium text-gray-500 uppercase">Risky Users Blocked</h3>
            <p className="mt-2 text-5xl font-bold text-[#2C2F8F]">{count.toLocaleString()}</p>
            <p className="text-gray-500">this week</p>

            {/* simple “bar chart” placeholder */}
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                    className="h-full bg-[#2C2F8F] transition-all duration-2000 ease-out"
                    style={{width: "83%"}}
                />
            </div>
        </div>
    )
}


export default function ConsumerRiskPrevention() {

    useEffect(() => {
        import('aos').then((AOS) =>
            AOS.init({
                duration: 1200,
            })
        );
    }, []);

    return (
        <>
            <div className="font-sora text-[#1F1F1F] scroll-smooth antialiased">
                <Navbar/>
                {/* Hero Section */}
                <section
                    className="py-16 relative overflow-hidden bg-gradient-to-b from-[#2C2F8F]/10 to-background pt-12">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
                            {/* ←←← Left side: your existing copy/buttons */}
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-md font-bold uppercase tracking-normal text-[#2C2F8F]">
                                        Consumer Risk Prevention
                                    </h1>
                                    <h1 className="text-5xl font-semibold tracking-tighter text-gray-800">
                                        Fraud Defense for Every Commerce Threat
                                    </h1>
                                    <p className="pt-4 text-md text-black">
                                        Plug-and-play AI-powered risk prevention to stop fraud, abuse, and chargebacks,
                                        all without adding friction. From checkout to onboarding, QuarkfinAI ensures
                                        every user and transaction is verified, trusted, and secure.
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-4">
                                    <Link href="/pricing">
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
              Get Started For Free <ArrowRight className="h-5 w-5 ml-2 inline"/>
            </span>
                                        </button>
                                    </Link>

                                    {/*                        <button*/}
                                    {/*                            type="button"*/}
                                    {/*                            className="*/}
                                    {/*  group inline-flex items-center justify-center gap-2*/}
                                    {/*  rounded-lg bg-white border-1 border-[#2C2F8F] text-[#2C2F8F] px-6 py-3*/}
                                    {/*  text-center font-semibold*/}
                                    {/*  shadow-md transition-all duration-300 ease-in-out*/}
                                    {/*  hover:bg-[#3A50D9] hover:-translate-y-1 hover:shadow-xl hover:text-white cursor-pointer*/}
                                    {/*  active:translate-y-0 active:shadow-md*/}
                                    {/*  focus:outline-none focus:ring-2 focus:ring-[#3A50D9] focus:ring-offset-2*/}
                                    {/*"*/}
                                    {/*                        >*/}
                                    {/*                            <span>See How It Works</span>*/}
                                    {/*                        </button>*/}
                                </div>
                            </div>

                            {/* →→→ Right side: Animated Dashboard */}
                            <AnimatedDashboard/>
                        </div>
                    </div>
                </section>
            </div>


            <section data-aos="fade-up" className="px-6 py-16 bg-gray-100">
                <div className=" max-w-7xl mx-auto">
                    <SolutionSection/>
                </div>
            </section>


            <section data-aos="fade-up" className="px-6 py-16">
                <div className=" max-w-7xl mx-auto">
                    <IndustryPainPoints/>
                </div>
            </section>

            <section data-aos="fade-up" className="px-6 py-16 bg-gray-100">
                <div className=" max-w-7xl mx-auto">
                    <HowItWorks/>
                </div>
            </section>

            <section data-aos="fade-up" className="px-6 py-16">
                <div className=" max-w-7xl mx-auto">
                    <ComparisonTable/>
                </div>
            </section>

            <section>
                {/* Final CTA */}
                <section className="w-full bg-[#2C2F8F] py-12 text-white">
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Stop Losing Revenue to Fraudsters
                                </h2>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-4">
                                <Link href="/pricing">
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
                                                Get Started For Free

                                    <ArrowRight className="h-5 w-5 ml-2 inline"/>
            </span>
                                    </button>
                                </Link>

                                <Link href="/contact-us">
                                    <button
                                        className="cursor-pointer border border-white text-white px-6 py-3 rounded-lg hover:bg-[#2C2F8F] hover:text-white hover:scale-105 transition shadow">
                                        Talk to an expert
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    )
}