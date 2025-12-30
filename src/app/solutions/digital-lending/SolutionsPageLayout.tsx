"use client";

import {CheckCircle, XCircle} from "lucide-react";
import React from "react";

const featureContent = [
    {
        title: "Synthetic Identity Detection",
        features: ["Stolen SSNs", "Fabricated credit histories", "Ghost applicants"],
        works: [
            "Cross-Lender Network: Flags identities applying simultaneously elsewhere",
            "Document Forensics: Detects tampered pay stubs/bank statements",
            "Behavioral Scoring: Analyzes application patterns (typing speed, device hops)",
        ],
        video: "/videos/Sol1.mp4",
    },
    {
        title: "Smart NTC Underwriting",
        features: ["Safe thin-file lending", "Lower defaults", "Higher approval rates"],
        works: [
            "Alternative Data Scoring: Analyzes cash flow, education, and employment signals",
            "Portfolio Immunization: Learns from your historical defaults",
            "Self-Serve Rules Engine: Drag-and-drop credit policies",
        ],
        video: "/videos/Sol2.mp4",
    },
    {
        title: "Loan Stacking Shield",
        features: ["Multi-lender exposure", "Bust-out schemes"],
        works: [
            "Real-Time Consortium Data: Shares risk alerts across lender network",
            "Velocity Checks: Flags rapid sequential applications",
            "Device Fingerprinting: Links borrowers across aliases",
        ],
        video: "/videos/Sol3.mp4",
    },
];

type Section = {
    subHeading?: string;
    title: string;
    features?: string[];
    works?: string[];
    video?: string;
};

export default function SolutionsPageLayout() {
    return (
        <div className="space-y-24">
            {featureContent.map((sec: Section, idx) => {
                const isReversed = idx % 2 === 1;

                return (
                    <div className="bg-white rounded-2xl shadow-xl mb-4" key={idx}>
                        <section
                            className={`flex flex-col-reverse lg:flex-row ${
                                isReversed ? "lg:flex-row-reverse" : ""
                            } items-center gap-10 p-12`}
                        >
                            {/* Text Block */}
                            <div className="w-full lg:w-1/2">
                                <h1 className="text-sm font-bold uppercase tracking-normal text-[#2C2F8F]">
                                    {sec.subHeading}
                                </h1>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {sec.title}
                                </h2>

                                <ul className="space-y-4">
                                    {sec?.features?.map((feat, i) => (
                                        <li key={i} className="flex items-center">
                                            <XCircle className="h-6 w-6 flex-shrink-0 text-red-500 mt-1"/>
                                            <span className="ml-3 text-gray-700">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-green-50 mt-8 p-6 rounded-xl mb-8">
                                    <h3 className="text-lg font-semibold text-green-900 mb-4">
                                        How It Works:
                                    </h3>

                                    <ul className="space-y-4">
                                        {sec?.works?.map((work, i) => (
                                            <li key={i} className="flex items-start space-x-3">
                                                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0"/>
                                                <span className="text-green-800">{work}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Video Block */}
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <video
                                    src={sec?.video}
                                    className="w-full max-w-md sm:max-w-lg"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </div>
                        </section>
                    </div>
                );
            })}
        </div>
    );
}
