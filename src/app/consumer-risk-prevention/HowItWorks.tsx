import {ArrowRight, BarChart3, Code, Settings} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HowItWorks() {
    return (
        <section className="w-full">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-left">
                    <div className="space-y-2">
                        <h2 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2C2F8F]">
                            From Chaos to Control in 30 Minutes
                        </h2>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 mt-12 mb-6 md:grid-cols-3">
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-white">
                                <Code className="h-8 w-8"/>
                            </div>
                            <h3 className="text-xl text-left font-bold">Connect</h3>
                            <p className="font-medium text-muted-foreground text-left">Add our API/SDK. Docs loved by
                                developers.</p>
                        </div>
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-white">
                                <Settings className="h-8 w-8"/>
                            </div>
                            <h3 className="text-xl text-left font-bold">Configure</h3>
                            <p className="font-medium text-muted-foreground text-left">Set risk rules in plain English,
                                or use our
                                defaults.</p>
                        </div>
                        <div
                            className="flex flex-col space-y-4">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2F8F] text-white">
                                <BarChart3 className="h-8 w-8"/>
                            </div>
                            <h3 className="text-xl font-bold text-left">Grow</h3>
                            <p className="font-medium text-muted-foreground text-left">Watch fraud drop & conversions
                                rise.
                                Real-time alerts
                                included.</p>
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