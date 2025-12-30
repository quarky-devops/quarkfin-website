// app/consumer-risk-prevention/ComparisonTable.tsx
'use client'

import React from 'react'

export function ComparsionTableRisk() {
    return (
        <section data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[#2C2F8F] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    Why Us vs. Legacy KYB
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                    {/* Feature List */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">Feature</h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>Speed</li>
                            <li>Accuracy</li>
                            <li>NTC Underwriting</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    {/* Quarkfin AI (highlighted) */}
                    <div
                        className="relative rounded-lg border-2 border-[#2C2F8F] bg-white p-6 shadow-xl transform transition-transform hover:scale-[1.03]">
            <span
                className="absolute -top-3 left-1/2 inline-block -translate-x-1/2 bg-[#2C2F8F] px-3 py-1 text-xs font-medium uppercase text-white rounded-full">
              Best Value
            </span>
                        <h3 className="text-lg font-semibold text-[#2C2F8F]">Quarkfin AI</h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-800">
                            <li className="font-bold ">Real-time decisions</li>
                            <li className="font-bold ">
                                120+ behavioral signals
                            </li>
                            <li className="font-bold ">
                                AI predicts thin-file risk
                            </li>
                            <li className="font-bold ">$0.10/decision</li>
                        </ul>
                    </div>

                    {/* Legacy Providers */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">Legacy Providers</h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>Batch processing (24+ hours)</li>
                            <li>Basic credit checks</li>
                            <li>Decline all policy</li>
                            <li>$5+/decision + setup fees</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
