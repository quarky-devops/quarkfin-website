"use client";

import Head from 'next/head';
import React, {useEffect} from 'react';
import 'aos/dist/aos.css';
import Navbar from "@/app/components/Navbar";
import {Integrations} from "@/components/Integrations";
import {Customers} from "@/components/Customers";
import {PrimaryFeatures} from "@/components/MadeForBusiness";
import {Hero} from "@/components/Hero";
import {Features2} from "@/components/Features2";
import Footer from "@/components/Footer";
import '../app/globals.css'
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function Home() {

    useEffect(() => {
        import('aos').then((AOS) =>
            AOS.init({
                duration: 1200,
            })
        );
    }, []);


    return (
        <>
            <Head>
                <title>QuarkfinAI</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="font-sora text-[#1F1F1F] scroll-smooth antialiased">
                <Navbar/>

                {/* Hero Section */}
                <section data-aos="fade-in" className="px-6">
                    <Hero/>
                </section>

                {/* Features Section */}
                <section data-aos="fade-up" className="px-6 py-12 bg-gray-100">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] text-left font-bold">Commerce
                            Protection That Works While You Sleep</h2>
                        {/*<p className="text-left text-lg text-gray-600 mb-10">Meet your business goals with QuarkfinAI, harness AI-driven risk insights and flexible decisioning to scale securely.</p>*/}
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <Features2/>
                    </div>
                </section>


                {/* how it works */}
                <section data-aos="fade-up" className="px-6 py-12">
                    <div className=" max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-8">
                            Integrate In Minutes, Protect Forever
                        </h2>
                        <Customers/>


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
              Try free for 14 Days
                <ArrowRight className="h-5 w-5 ml-2 inline"/>
            </span>
                            </button>
                        </Link>
                    </div>
                </section>


                {/* Made for every business */}
                <section data-aos="fade-up" className="px-6 py-12 bg-gray-100">
                    <div className=" max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-10">
                            Built For Your Industry's Toughest Fraud Problems
                        </h2>
                        <PrimaryFeatures/>
                    </div>
                </section>


                {/* Integrations */}
                <section data-aos="fade-up" className="px-6 py-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-12">Integrate The Way
                            You
                            Want It!</h2>
                        <Integrations/>
                    </div>
                </section>

                {/* CTA Section */}
                <section data-aos="fade-up" className="px-6 py-12 bg-[#2C2F8F] text-white">
                    <div className="max-w-7xl mx-auto">
                        <div
                            className="flex flex-col items-center justify-center space-y-6 text-center"
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Fraud-free growth starts here.
                                </h2>
                                <p>
                                    No upfront costs. No lengthy contracts. Just results.
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

                {/* Footer */}
                <Footer/>

            </div>
        </>
    );
}
