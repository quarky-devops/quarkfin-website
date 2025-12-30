"use client"

import {useEffect, useState} from "react"
import {ChevronRight, FileText, Scale} from "lucide-react"
import Footer from "@/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const sections = [
    {id: "acceptance", title: "Definitions"},
    {id: "description", title: "Governing Law & Jurisdiction"},
    {id: "user-accounts", title: "Service Scope"},
    {id: "acceptable-use", title: "Customer Obligations"},
    {id: "prohibited-uses", title: "Payments & Renewals"},
    {id: "content", title: "Data Protection"},
    {id: "privacy", title: " Liability & Disclaimers"},
    {id: "payments", title: "Termination"},
    {id: "termination", title: "Governing Law & Disputes"},
    {id: "disclaimers", title: "Updates to Terms"},
    {id: "contact", title: "Contact"},
]

export default function TermsConditions() {
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
                                        <h1 className="text-3xl font-bold text-gray-900">QuarkfinAI Terms & Conditions
                                        </h1>
                                    </div>
                                    <p className="text-gray-600 mb-2">Last updated: January 1, 2025</p>
                                    <p className="text-gray-600">Effective date: January 1, 2025</p>
                                </header>

                                <div className="prose prose-gray max-w-none">
                                    <section id="acceptance" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Definitions</h2>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>"QuarkfinAI refers to Quarkfin Tech Private Limited, a company
                                                incorporated under Indian law.
                                            </li>
                                            <li>"Service means the AI-powered fraud prevention platform accessible via
                                                quarkfin.ai.
                                            </li>
                                            <li>"Customer refers to any entity using QuarkfinAI’s services.
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="description" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Governing Law &
                                            Jurisdiction</h2>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>These Terms shall be governed by Indian law.
                                            </li>
                                            <li>Any disputes shall be resolved through arbitration in Bengaluru, India,
                                                under the Arbitration and Conciliation Act, 1996
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="user-accounts" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Scope</h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Subscription Access:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Service provided as per selected plan (Monthly/Annual).</li>
                                            <li>Includes API calls, risk scores, and fraud analytics.</li>
                                        </ul>

                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Geographic Coverage:

                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Services available globally, excluding embargoed countries
                                                (OFAC/Sanctions lists).
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="acceptable-use" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Customer
                                            Obligations
                                        </h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Prohibited Use:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>No reverse engineering, resale, or use for unlawful surveillance.
                                            </li>
                                            <li>Compliance with all local laws (GDPR, CCPA, etc.).
                                            </li>
                                        </ul>

                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Data Responsibility:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Customer warrants lawful data collection for processing by QuarkfinAI.
                                            </li>

                                        </ul>
                                    </section>

                                    <section id="prohibited-uses" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payments & Renewals
                                        </h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Fees
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>All prices in USD (non-refundable unless required by law).
                                            </li>
                                            <li>Taxes extra (GST for India, VAT for EU, etc.).
                                            </li>
                                        </ul>

                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Auto-Renewal:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Subscriptions renew automatically unless canceled 30 days prior.
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="content" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Protection
                                        </h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">DPA Included:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>By using the Service, Customer agrees to our Data Processing Addendum
                                                (DPA) for GDPR/CCPA compliance.
                                            </li>

                                        </ul>

                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Security Standards:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>SOC 2 Type II certified infrastructure.
                                            </li>
                                            <li>Data encrypted in transit/at rest.
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="privacy" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Liability &
                                            Disclaimers</h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">No Guarantee:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>QuarkfinAI does not guarantee 100% fraud prevention.
                                            </li>
                                        </ul>

                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Limitation of Liability:

                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Cap of 12 months’ fees or $100,000 (whichever lower).

                                            </li>

                                            <li>Excludes liability for indirect/consequential damages.


                                            </li>
                                        </ul>
                                    </section>

                                    <section id="payments" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">By Customer:

                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Cancel anytime via the dashboard (no prorated refunds).

                                            </li>
                                        </ul>

                                        <h3 className="text-xl font-medium text-gray-800 mb-3">By QuarkfinAI:


                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Immediate termination for breach/TOS violations.


                                            </li>

                                        </ul>
                                    </section>

                                    <section id="termination" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law &
                                            Disputes</h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Jurisdiction

                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Disputes governed by laws of India courts in Bangalore, Karnataka,
                                                India.
                                            </li>
                                        </ul>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Arbitration:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Mandatory arbitration in Singapore (UNCITRAL rules).
                                            </li>
                                        </ul>

                                    </section>

                                    <section id="disclaimers" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Updates to
                                            Terms</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            30 days’ notice for material changes via email/dashboard.

                                        </p>

                                    </section>


                                    <section id="contact" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact
                                            Information</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            If you have any questions about these Terms and Conditions, please contact
                                            us:
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <ul className="text-gray-700 space-y-2">

                                                <li>
                                                    <strong>Address:</strong> Quarkfin Tech Private Limited (A1307,
                                                    Gopalan Olympia, Kumbalagodu,
                                                    Bangalore, India, 560074)
                                                </li>
                                                <li>
                                                    <strong>Email:</strong> bidya@quarkfin.ai
                                                </li>
                                                <li>
                                                    <strong>Website:</strong> <Link
                                                    href='https://www.quarkfin.ai/terms-and-conditions'>www.quarkfin.ai/terms-and-conditions</Link>
                                                </li>
                                            </ul>
                                        </div>
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
