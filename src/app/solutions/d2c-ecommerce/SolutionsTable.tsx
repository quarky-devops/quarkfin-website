'use client'

import React from 'react'

export function SolutionsTable() {
    return (
        <section data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[#2C2F8F] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    Your Hidden Profit Killers
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                    {/* Feature List */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">Problem</h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>
                                Return-to-Origin (RTO)
                            </li>
                            <li>
                                Promo Abuse
                            </li>
                            <li>Chargebacks</li>
                            <li>
                                Guest Checkout Fraud
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
                        <h3 className="text-lg font-semibold text-[#2C2F8F]">What It Costs You</h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-800">
                            <li className="font-bold ">
                                25-40% of COD revenue lost
                            </li>
                            <li className="font-bold ">
                                15% discount leakage
                            </li>
                            <li className="font-bold ">
                                $50-$100 per dispute + penalties
                            </li>
                            <li className="font-bold ">
                                3X higher fraud risk
                            </li>
                        </ul>
                    </div>

                    {/* Legacy Providers */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">How Fraudsters Do It</h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>
                                Fake addresses, refused deliveries
                            </li>
                            <li>
                                Burner emails + VPNs for unlimited coupons
                            </li>
                            <li>
                                "Item never arrived" lies
                            </li>
                            <li>
                                No account = no accountability
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
