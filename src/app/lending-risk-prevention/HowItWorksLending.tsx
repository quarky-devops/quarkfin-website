import Link from "next/link";
import {ArrowRight} from "lucide-react";
import React from "react";

export default function HowItWorksRisk() {
    return (
        <section className="w-full">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-left">
                    <div className="space-y-2">
                        <h2 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C2F8F]">
                            From Paranoid to Confident in 60 Minutes
                        </h2>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 mt-12 mb-6 md:grid-cols-3">
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-primary-foreground text-xl font-bold shadow-lg">
                                01
                            </div>
                            <h3 className="text-xl text-left font-bold">Connect</h3>
                            <p className="font-medium text-muted-foreground text-left">Integrate via API or use our
                                no-code dashboard.</p>
                        </div>
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-primary-foreground text-xl font-bold shadow-lg">
                                02
                            </div>
                            <h3 className="text-xl text-left font-bold">Configure</h3>
                            <p className="font-medium text-muted-foreground text-left">Set your risk rules:
                                &#39;Auto-decline if fraud score {">"}85%</p>
                        </div>
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-primary-foreground text-xl font-bold shadow-lg">
                                03
                            </div>
                            <h3 className="text-xl font-bold text-left">Lend Fearlessly</h3>
                            <p className="font-medium text-muted-foreground text-left">Watch fraud drop and approvals
                                rise—automatically.</p>
                        </div>
                    </div>
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

                </div>
            </div>
        </section>
    )
}