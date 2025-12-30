'use client'

import React from 'react'

export function SolutionsTable() {
    return (
        <section data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[#2C2F8F] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    Payment Gateways Lose More Than Just Money
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                    {/* Feature List */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">Risk</h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>

                                Merchant Fraud

                            </li>
                            <li>

                                AML Violations


                            </li>
                            <li>MCC Bait-and-Switch</li>
                            <li>
                                Transaction Laundering
                            </li>
                        </ul>
                    </div>

                    {/* Quarkfin AI (highlighted) */}
                    <div
                        className="relative rounded-lg border-2 border-[#2C2F8F] bg-white p-6 shadow-xl transform transition-transform hover:scale-[1.03]">
                        {/*<span*/}
                        {/*    className="absolute -top-3 left-1/2 inline-block -translate-x-1/2 bg-[#2C2F8F] px-3 py-1 text-xs font-medium uppercase text-white rounded-full">*/}
                        {/*  Best Value*/}
                        {/*</span>*/}
                        <h3 className="text-lg font-semibold text-[#2C2F8F]">Consequences</h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-800">
                            <li className="font-bold ">

                                $50K-$5M in chargebacks


                            </li>
                            <li className="font-bold ">

                                Regulatory fines + license revocation


                            </li>
                            <li className="font-bold ">

                                Brand damage + bank penalties


                            </li>
                            <li className="font-bold ">

                                Forced reserves + sponsor bank audits


                            </li>
                        </ul>
                    </div>

                    {/* Legacy Providers */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">
                            How It Happens

                        </h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>
                                Fake businesses processing stolen cards
                            </li>
                            <li>
                                Unverified beneficial owners
                            </li>
                            <li>
                                Retail merchant suddenly selling high-risk goods
                            </li>
                            <li>
                                Hidden payment flows
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
