// app/consumer-risk-prevention/IndustryPainPoints.tsx
'use client'

import React from 'react'
import {Plane, ShoppingCart, TrendingDown, TrendingUp} from 'lucide-react'

export default function IndustryPainPoints() {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-[#2C2F8F] text-left text-3xl md:text-4xl lg:text-5xl font-bold">
                    Outsmart Fraud. Accelerate Growth
                </h2>

                <div className="mt-4 grid gap-8 md:grid-cols-2">
                    {/* D2C / eCommerce Card */}
                    <div className="flex flex-col bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-center mb-6">
              <span className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
                <ShoppingCart className="w-6 h-6"/>
              </span>
                            <h3 className="ml-4 text-xl font-semibold">D2C / eCommerce</h3>
                        </div>

                        <p className="text-red-600 font-semibold mb-2">
                            Problem: Losing revenue to RTO and promo abuse?
                        </p>
                        <p className="text-green-600 font-semibold mb-6">
                            Solution: Quark Secure + Device Fingerprinting = fewer losses.
                        </p>

                        <div className="mt-auto grid gap-4 md:grid-cols-2">
                            <div className="flex flex-col items-start bg-gray-50 rounded-lg p-4">
                                <div className="text-sm text-gray-500">Average RTO Rate</div>
                                <div className="flex items-center mt-1">
                                    <TrendingUp className="w-5 h-5 text-gray-400 mr-1"/>
                                    <span className="text-3xl font-bold">30%</span>
                                </div>
                                <div className="text-sm text-gray-500 mt-1">Industry Average</div>
                            </div>

                            <div className="flex flex-col items-start bg-gray-50 rounded-lg p-4">
                                <div className="text-sm text-gray-500">With QuarkfinAI</div>
                                <div className="flex items-center mt-1">
                                    <TrendingDown className="w-5 h-5 text-green-600 mr-1"/>
                                    <span className="text-3xl font-bold text-green-600">5%</span>
                                </div>
                                <div className="text-sm text-green-600 mt-1">83% Reduction</div>
                            </div>
                        </div>
                    </div>

                    {/* Travel / Quick Commerce Card */}
                    <div className="flex flex-col bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-center mb-6">
              <span className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Plane className="w-6 h-6"/>
              </span>
                            <h3 className="ml-4 text-xl font-semibold">Travel / Quick Commerce</h3>
                        </div>

                        <p className="text-red-600 font-semibold mb-2">
                            Problem: Card testing attacks during peak hours?
                        </p>
                        <p className="text-green-600 font-semibold mb-6">
                            Solution: Real-time blocking with zero checkout friction.
                        </p>

                        <div className="mt-auto grid gap-4 md:grid-cols-2">
                            <div className="flex flex-col items-start bg-gray-50 rounded-lg p-4">
                                <div className="text-sm text-gray-500">Average Fraud Rate</div>
                                <div className="flex items-center mt-1">
                                    <TrendingUp className="w-5 h-5 text-gray-400 mr-1"/>
                                    <span className="text-3xl font-bold">12%</span>
                                </div>
                                <div className="text-sm text-gray-500 mt-1">Industry Average</div>
                            </div>

                            <div className="flex flex-col items-start bg-gray-50 rounded-lg p-4">
                                <div className="text-sm text-gray-500">With QuarkfinAI</div>
                                <div className="flex items-center mt-1">
                                    <TrendingDown className="w-5 h-5 text-green-600 mr-1"/>
                                    <span className="text-3xl font-bold text-green-600">0.5%</span>
                                </div>
                                <div className="text-sm text-green-600 mt-1">96% Reduction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
