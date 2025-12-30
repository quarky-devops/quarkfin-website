import {AlertTriangle, ArrowRight, CheckCircle, Shield, TrendingUp, XCircle, Zap} from "lucide-react"
import React from "react";
import Link from "next/link";

export default function IndustrySolution() {
    return (
        <div className="min-h-screen">
            {/* Industry Sections */}
            <div className="max-w-7xl mx-auto space-y-4 pb-12">
                {/* D2C & eCommerce Section */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div
                                className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                                <TrendingUp className="h-4 w-4 mr-2"/>
                                D2C & eCommerce
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Watching 28% of your
                                <br/>hard-won revenue vanish to</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>RTO fraud</strong> (fake addresses, refused deliveries)
                  </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>Promo abuse</strong> (same user with 12 burner accounts)
                  </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>Chargebacks</strong> (&#39;Item never arrived&#39; lies)
                  </span>
                                </div>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl mb-8">
                                <h3 className="text-lg font-semibold text-green-900 mb-4">QuarkfinAI slashes losses
                                    with:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0"/>
                                        <span className="text-green-800">
                      <strong>Quark Secure:</strong> Our AI scores buyer intent using 53 behavioural and risk signals
                    </span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0"/>
                                        <span className="text-green-800">
                      <strong>Device Fingerprinting:</strong> Blocks promo abusers across devices
                    </span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0"/>
                                        <span className="text-green-800">
                      <strong>Chargeback Shield:</strong> We cover costs if fraud slips through
                    </span>
                                    </div>
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
             Try free, Get RTO protection for your next 100 orders
                                    <ArrowRight className="h-5 w-5 ml-2 inline"/>
            </span>
                                </button>
                            </Link>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl">
                            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Cart Abandonment
                                Comparison</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="bg-red-100 p-4 rounded-lg mb-3">
                                        <video
                                            src="/videos/CA2.mp4"
                                            className="rounded-lg w-full max-w-lg mx-auto"
                                            autoPlay
                                            muted
                                            loop
                                        />
                                    </div>
                                    <p className="text-sm font-medium text-red-700">Without Quarkfin</p>
                                    <p className="text-xs text-red-600">Steep drop at checkout</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-green-100 p-4 rounded-lg mb-3">
                                        <video
                                            src="/videos/CA1.mp4"
                                            className="rounded-lg w-full max-w-lg mx-auto"
                                            autoPlay
                                            muted
                                            loop
                                        />
                                    </div>
                                    <p className="text-sm font-medium text-green-700">With Quarkfin</p>
                                    <p className="text-xs text-green-600">Smooth conversion curve</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Payment Gateways Section */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Risk Score
                                Timeline</h4>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 text-sm text-gray-600">Day 1</div>
                                    <div className="flex-1 bg-green-200 h-4 rounded-full">
                                        <div className="bg-green-500 h-4 rounded-full w-2/12"></div>
                                    </div>
                                    <span className="text-sm text-green-600 font-medium">Low Risk</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 text-sm text-gray-600">Day 30</div>
                                    <div className="flex-1 bg-yellow-200 h-4 rounded-full">
                                        <div className="bg-yellow-500 h-4 rounded-full w-5/12"></div>
                                    </div>
                                    <span className="text-sm text-yellow-600 font-medium">Medium Risk</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 text-sm text-gray-600">Day 60</div>
                                    <div className="flex-1 bg-red-200 h-4 rounded-full">
                                        <div className="bg-red-500 h-4 rounded-full w-9/12"></div>
                                    </div>
                                    <span className="text-sm text-red-600 font-medium">High Risk</span>
                                </div>
                            </div>
                            <p className="text-center text-sm text-gray-600 mt-4">Merchant behavior degrading over
                                time</p>
                        </div>

                        <div>
                            <div
                                className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                                <Shield className="h-4 w-4 mr-2"/>
                                Payment Gateways
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">One Bad Merchant Can Cost
                                You</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>$5M+</strong> in chargebacks
                  </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>Regulatory hell</strong> when AML checks fail
                  </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>Brand damage</strong> from processing scams
                  </span>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl mb-8">
                                <h3 className="text-lg font-semibold text-blue-900 mb-4">Our AI acts as your 24/7 risk
                                    team:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0"/>
                                        <span className="text-blue-800">
                      <strong>KYB Auto-Approval:</strong> Vets merchants in 4 mins (not 4 days)
                    </span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0"/>
                                        <span className="text-blue-800">
                      <strong>AML Sentinel:</strong> Screens 200+ global watchlists in real-time
                    </span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0"/>
                                        <span className="text-blue-800">
                      <strong>Merchant Monitoring:</strong> Alerts when MCCs suddenly change
                    </span>
                                    </div>
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
              Free audit: We&#39;ll analyze your last 100 onboardings for risk
                                    <ArrowRight className="h-5 w-5 ml-2 inline"/>
            </span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </section>

                {/* Digital Lenders Section */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div
                                className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                                <TrendingUp className="h-4 w-4 mr-2"/>
                                Digital Lenders
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">NTC Borrowers Are Your
                                Biggest:</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>Default risk</strong> (35% delinquency rates)
                  </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>Fraud target</strong> (synthetic identities, stolen SSNs)
                  </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>Growth blocker</strong> (can&#39;t approve without data)
                  </span>
                                </div>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl mb-8">
                                <h3 className="text-lg font-semibold text-green-900 mb-4">Lend smarter with:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0"/>
                                        <span className="text-green-800">
                      <strong>NTC Scoring:</strong> AI predicts risk using non-traditional data
                    </span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0"/>
                                        <span className="text-green-800">
                      <strong>Loan Shield:</strong> Catches 92% of synthetic identity fraud
                    </span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0"/>
                                        <span className="text-green-800">
                      <strong>Self-Serve LOS:</strong> Drag-and-drop underwriting rules
                    </span>
                                    </div>
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
                                                 Test our API: Underwrite 100 loans free

                                    <ArrowRight className="h-5 w-5 ml-2 inline"/>
            </span>
                                </button>
                            </Link>


                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl">
                            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Loan Application
                                Comparison</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div
                                        className="bg-red-100 p-6 rounded-lg mb-3 min-h-[120px] flex flex-col justify-center">
                                        <XCircle className="h-12 w-12 text-red-500 mx-auto mb-2"/>
                                        <p className="text-2xl font-bold text-red-700">DECLINED</p>
                                    </div>
                                    <p className="text-sm font-medium text-red-700">Old System</p>
                                </div>
                                <div className="text-center">
                                    <div
                                        className="bg-green-100 p-6 rounded-lg mb-3 min-h-[120px] flex flex-col justify-center">
                                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2"/>
                                        <p className="text-2xl font-bold text-green-700">APPROVED</p>
                                        <p className="text-xs text-green-600 mt-1">with risk notes</p>
                                    </div>
                                    <p className="text-sm font-medium text-green-700">With Quarkfin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Travel & Quick Commerce Section */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Response Time
                                Comparison</h4>
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="bg-red-100 p-4 rounded-lg mb-2">
                                        <div className="flex items-center justify-center space-x-2">
                                            <Zap className="h-6 w-6 text-red-500"/>
                                            <span className="text-2xl font-bold text-red-700">5000ms</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-red-600">Traditional Systems</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-green-100 p-4 rounded-lg mb-2">
                                        <div className="flex items-center justify-center space-x-2">
                                            <Zap className="h-6 w-6 text-green-500"/>
                                            <span className="text-2xl font-bold text-green-700">&lt;200ms</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-green-600">Bot Forcefield</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div
                                className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                                <Zap className="h-4 w-4 mr-2"/>
                                Travel & Quick Commerce
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Every Minute of Downtime
                                Means:</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>$10K+</strong> lost to card testing attacks
                  </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>Angry customers</strong> when legit bookings get blocked
                  </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700">
                    <strong>Operational chaos</strong> from fake reservations
                  </span>
                                </div>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl mb-8">
                                <h3 className="text-lg font-semibold text-orange-900 mb-4">
                                    AI that draws line between a real travelers and fraudsters
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0"/>
                                        <span className="text-orange-800">
                      <strong>Bot Forcefield:</strong> Blocks card testing in &lt;200ms
                    </span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0"/>
                                        <span className="text-orange-800">
                      <strong>Smart Whitelisting:</strong> Never block your best customers
                    </span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0"/>
                                        <span className="text-orange-800">
                      <strong>Velocity Alerts:</strong> Spots bulk booking scams
                    </span>
                                    </div>
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
                                                 Stop card testing now: Free 14-day trial

                                    <ArrowRight className="h-5 w-5 ml-2 inline"/>
            </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
