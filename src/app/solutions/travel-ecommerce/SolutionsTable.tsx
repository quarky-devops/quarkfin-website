'use client'

import React from 'react'

export function SolutionsTable() {
    return (
        <section data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[#2C2F8F] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    What Fraudsters Cost You Every Hour
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                    {/* Feature List */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">
                            Attack Type

                        </h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>

                                Card Testing

                            </li>
                            <li>

                                Fake Promo Abuse

                            </li>
                            <li>

                                Account Takeovers


                            </li>
                            <li>

                                Fake Bookings

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
                            Impact
                        </h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-800">
                            <li className="font-bold ">


                                $15-$50 per attempt + processor fines


                            </li>
                            <li className="font-bold ">


                                20-30% of discounts stolen


                            </li>
                            <li className="font-bold ">


                                5X higher chargeback risk


                            </li>
                            <li className="font-bold ">


                                Empty seats/unsold inventory

                            </li>
                        </ul>
                    </div>

                    {/* Legacy Providers */}
                    <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-lg font-semibold">

                            How It Hits You


                        </h3>
                        <ul className="mt-6 space-y-6 text-sm text-gray-700">
                            <li>


                                Bots brute-force stolen cards on your site


                            </li>
                            <li>


                                VPNs + burner emails exploit signup offers


                            </li>
                            <li>
                                Credential stuffing from data breaches
                            </li>
                            <li>
                                Fraudsters booking with no payment intent
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
