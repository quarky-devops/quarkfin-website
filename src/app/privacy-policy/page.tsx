"use client"

import {useEffect, useState} from "react"
import {ChevronRight, FileText, Scale} from "lucide-react"
import Navbar from "@/app/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    {id: "introduction", title: "Data Controller"},
    {id: "information-collection", title: "Data Collected"},
    {id: "how-we-use", title: "Legal Bases for Processing"},
    {id: "information-sharing", title: "International Transfers"},
    {id: "data-security", title: "User Rights"},
]

export default function Page() {
    const [activeSection, setActiveSection] = useState("introduction")

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
                                        <h1 className="text-3xl font-bold text-gray-900">QuarkfinAI's Privacy
                                            Policy</h1>
                                    </div>
                                    <p className="text-gray-600">Last updated: January 1, 2025</p>
                                </header>

                                <div className="prose prose-gray max-w-none">
                                    <section id="introduction" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Quarkfin Tech Private Limited (A1307, Gopalan Olympia, Kumbalagodu,
                                            Bangalore, India, 560074) operates as the
                                            data controller for customer account data and as a processor for fraud
                                            detection data.

                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            By using our service, you agree to the collection and use of information in
                                            accordance with this
                                            policy. We will not use or share your information with anyone except as
                                            described in this Privacy
                                            Policy.
                                        </p>
                                    </section>

                                    <section id="information-collection" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collected</h2>
                                        <h3 className="text-xl font-medium text-gray-800">From Customers
                                            (Controllers):</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Company name, billing details, admin user credentials</li>
                                        </ul>
                                        <h3 className="text-xl font-medium text-gray-800 mt-3">Processed for Customers
                                            (Processors):</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Transaction data, device fingerprints, behavioral signals
                                                (hashed/anonymized where possible)
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="how-we-use" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Legal Bases for
                                            Processing</h2>
                                        <table
                                            className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead
                                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <td className="px-6 py-3">Purpose</td>
                                                <td className="px-6 py-3">Legal Basis
                                                </td>
                                                <td className="px-6 py-3">Retention Period</td>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Fraud Prevention

                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Legitimate Interest (Art 6.1.f GDPR)

                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    90 days post-processing

                                                </td>
                                            </tr>
                                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Service Improvement

                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Anonymized analytics only

                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    N/A (aggregate data)

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </section>

                                    <section id="information-sharing" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">International
                                            Transfers</h2>

                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>EU/Swiss data: Protected under Standard Contractual Clauses (SCCs)
                                            </li>
                                            <li>US data: Compliant with CCPA "service provider" requirements</li>
                                        </ul>
                                    </section>

                                    <section id="data-security" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Rights</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Requests for access/deletion must be submitted via:
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Email: bidya@quarkfin.ai
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Response within 30 days (free of charge)
                                        </p>
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
