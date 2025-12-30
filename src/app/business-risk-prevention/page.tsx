"use client"

import Navbar from "@/app/components/Navbar";
import React, {useEffect} from "react";
import Footer from "@/components/Footer";
import HowItWorksBusiness from "@/app/business-risk-prevention/HowItWorksBusiness";
import TwoColumnSections from "@/app/business-risk-prevention/2ColumnLayout";
import {ComparisonTableBusiness} from "@/app/business-risk-prevention/ComparisonTableBusiness";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function BusinessRiskPrevention() {

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
                    className="py-12 relative overflow-hidden bg-gradient-to-b from-[#2C2F8F]/10 to-background pt-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 lg:gap-6">
                            {/* ←←← Left side: your existing copy/buttons */}
                            <div className="flex flex-col justify-center space-y-4 ">
                                <div className="space-y-2">
                                    <h1 className="text-md font-bold uppercase tracking-normal text-[#2C2F8F]">
                                        Business Risk Prevention
                                    </h1>
                                    <h1 className="text-5xl font-semibold tracking-tighter text-gray-800">
                                        No Risky Merchants. <br/>No Surprise Losses.
                                    </h1>
                                    <p className="text-md text-black ">
                                        Automate KYB, AML checks, and ongoing merchant monitoring with AI – so you can
                                        onboard businesses 10x faster without the risk.
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

                            <div>

                                <video
                                    src="/videos/DE.mp4"
                                    className="rounded-lg w-full max-w-lg mx-auto"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* 2 Column Layout with text on left and image on right */}
            <section data-aos="fade-up" className="px-6 py-12 bg-gray-100">
                <div className=" max-w-7xl mx-auto">
                    <TwoColumnSections/>
                </div>
            </section>

            <section data-aos="fade-up" className="px-6 py-12">
                <div className=" max-w-7xl mx-auto">
                    <HowItWorksBusiness/>
                </div>
            </section>

            <section data-aos="fade-up" className="px-6 py-12 bg-gray-100">
                <div className=" max-w-7xl mx-auto">
                    <ComparisonTableBusiness/>
                </div>
            </section>

            <section>
                {/* Final CTA */}
                <section className="w-full font-sora bg-[#2C2F8F] py-12 text-white">
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    What's Your Fraud Blind Spot Costing You?
                                </h2>
                                <p>
                                    Get 100 free KYB checks + ongoing monitoring for 30 days. No credit card needed."
                                </p>
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