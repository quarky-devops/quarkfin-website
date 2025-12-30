"use client"

import {useEffect, useState} from "react"
import {ChevronRight, FileText, Scale} from "lucide-react"
import Footer from "@/components/Footer";
import Navbar from "@/app/components/Navbar";

const sections = [
    {id: "description", title: "1. Cancellation Policy"},
    {id: "user-accounts", title: "2. Refund Policy"},
    {id: "acceptable-use", title: "3. Refund Process"},
    {id: "exceptions", title: "4. Exceptions"},
    {id: "prohibited-uses", title: "5. Changes to This Policy"},
    {id: "contact", title: "6. Contact"},
]

export default function RefundAndCancellationPolicy() {
    const [activeSection, setActiveSection] = useState("acceptance")

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section.id)
                if (element) {
                    const {offsetTop, offsetHeight} = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8">
                                <div className="flex items-center mb-4">
                                    <Scale className="w-6 h-6 text-blue-600 mr-2"/>
                                    <h2 className="text-lg font-semibold text-gray-900">Table of Contents</h2>
                                </div>
                                <nav className="space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center justify-between group ${
                                                activeSection === section.id
                                                    ? "bg-blue-100 text-blue-700 font-medium"
                                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                            }`}
                                        >
                                            <span>{section.title}</span>
                                            <ChevronRight
                                                className={`w-4 h-4 transition-transform duration-200 ${
                                                    activeSection === section.id ? "text-blue-700" : "text-gray-400 group-hover:text-gray-600"
                                                }`}
                                            />
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3 mt-8 lg:mt-0">
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <header className="mb-8">
                                    <div className="flex items-center mb-4">
                                        <FileText className="w-8 h-8 text-blue-600 mr-3"/>
                                        <h1 className="text-3xl font-bold text-gray-900">Refund and Cancellation Policy
                                        </h1>
                                    </div>
                                    <p className="text-gray-600">Effective date: August 5, 2025</p>
                                </header>

                                <div className="prose prose-gray max-w-none">
                                    <section id="acceptance" className="mb-12">
                                        <p className="text-gray-600"> Quarkfin Tech Private Limited ("Quarkfin.ai,"
                                            "we," "our," or "us") strives to
                                            ensure the satisfaction of our customers. This policy outlines the terms
                                            governing refunds and cancellations related to services offered by
                                            Quarkfin.ai.</p>
                                    </section>

                                    <section id="description" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Cancellation Policy
                                        </h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Subscription Services:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Customers may cancel their subscriptions at any time by logging into
                                                their account on our platform or by contacting our support team.
                                            </li>
                                            <li>Cancellation requests must be submitted before the renewal date to avoid
                                                charges for the next billing cycle.
                                            </li>
                                            <li>Access to services will continue until the end of the current
                                                subscription period.
                                            </li>
                                        </ul>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">One-time Purchases:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>One-time service purchases may be canceled within 24 hours of purchase,
                                                provided that the service has not been initiated or delivered.
                                            </li>
                                            <li>Cancellation requests after the initiation or delivery of services are
                                                subject to review and approval by our customer support team.
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="user-accounts" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Refund Policy</h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Subscription Services:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Refunds for subscription services are provided only in cases of billing
                                                errors or duplicate charges. Customers must report such issues within 7
                                                days of noticing the error.
                                            </li>
                                            <li>No refunds are issued for partial subscription periods or unused
                                                portions of subscriptions.
                                            </li>
                                        </ul>

                                        <h3 className="text-xl font-medium text-gray-800 mb-3">One-time Purchases:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Full refunds for one-time purchases are available if requested within 24
                                                hours of the purchase and before service initiation.
                                            </li>
                                            <li>Once the service has commenced or been delivered, refunds will not be
                                                granted except in cases of significant service defects or errors
                                                attributable to Quarkfin.ai.
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="acceptable-use" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Process
                                        </h2>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>To request a refund, customers must contact our support team with proof
                                                of purchase and a detailed description of the reason for the refund.
                                            </li>
                                            <li>Refund requests will be reviewed within 7 business days. Approved
                                                refunds will be processed using the original method of payment within
                                                10-15 business days.
                                            </li>
                                        </ul>

                                    </section>

                                    <section id="exceptions" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Exceptions
                                        </h2>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Customized or specially tailored services and products are
                                                non-refundable unless explicitly stated otherwise at the time of
                                                purchase.
                                            </li>
                                            <li>Any charges incurred due to currency exchange rates or transaction fees
                                                by third-party payment processors are non-refundable.
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="exceptions" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Changes to This
                                            Policy

                                        </h2>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Quarkfin Tech Private Limited reserves the right to update this policy
                                                periodically. Changes will be communicated via our website and/or email
                                                to registered customers.

                                            </li>
                                            <li>Continued use of our services after any policy changes constitutes
                                                acceptance of the updated terms.

                                            </li>
                                        </ul>
                                    </section>


                                    <section id="contact" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact
                                            Information</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            If you have any questions about these Terms and Conditions, please contact
                                            us:
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <ul className="text-gray-700 space-y-2">
                                                <li>
                                                    <strong>Email:</strong> hello@quarkfin.ai
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            By using Quarkfin.ai services, you agree to comply with and be bound by this
                                            Refund and Cancellation Policy.</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
