'use client'

import React from 'react'

export function SolutionsTable() {
    return (
        <section data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[#2C2F8F] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    Digital Lending’s Invisible Profit Drains
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                    {/* Feature List */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">Risk</h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>
                                Synthetic Identities
                            </li>
                            <li>
                                Loan Stacking
                            </li>
                            <li>
                                First-Party Fraud

                            </li>
                            <li>
                                Income Fabrication
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
                        <h3 className="text-lg font-semibold text-[#2C2F8F]">
                            Financial Impact

                        </h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-800">
                            <li className="font-bold ">

                                25-40% of NTC defaults

                            </li>
                            <li className="font-bold ">

                                3-5X exposure per borrower

                            </li>
                            <li className="font-bold ">

                                15% of "legit" defaults

                            </li>
                            <li className="font-bold ">


                                2X higher delinquency risk


                            </li>
                        </ul>
                    </div>

                    {/* Legacy Providers */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">
                            How Fraudsters Operate

                        </h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>

                                Stolen SSNs + fabricated credit histories

                            </li>
                            <li>

                                Simultaneous applications across lenders

                            </li>
                            <li>

                                "Never pay" intent from day one

                            </li>
                            <li>

                                Fake pay stubs/bank statements

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
