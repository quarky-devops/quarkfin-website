"use client";

import {CheckCircleIcon} from "lucide-react";
import React from "react";

const featureContent = [
    {
        title: "AI-Powered Business Vetting",
        features: [
            "Domain Reputation Scoring (We flag fake/phishing sites)",
            "Geo-Fencing (We block high-risk jurisdictions)",
            "IP Forensics (We detect VPNs, proxies, spoofing)",
            "Website Legitimacy Engine (We analyze content changes, TOR links)",
        ],
        video: "/videos/DataExtraction.mp4",
    },
    {
        title: "Financial DNA Analysis",
        features: [
            "Bank Guarantee Verification (Our AI cross-checks amounts/dates)",
            "Financial Health Scoring (We predict cash flow risks)",
            "Beneficial Owner Mapping (We uncover hidden ownership)",
        ],
        video: "/videos/FinancialData.mp4",
    },
    {
        title: "24/7 Merchant Monitoring",
        features: [
            "MCC Alerts (We notify when high-risk categories change)",
            "Social Media Sentinel (We flag deleted LinkedIn profiles)",
            "Website Defacement Detection (We spot bait-and-switch)",
        ],
        video: "/videos/DataExtraction1.mp4",
    },
];

type Section = {
    title: string;
    features: string[];
    video?: string;
};

export default function TwoColumnSections() {
    return (
        <div className="px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2C2F8F]">
                        From Suspicion to Certainty in Minutes
                    </h2>
                </div>

                <div className="">
                    {featureContent.map((sec: Section, idx) => {
                        const isReversed = idx % 2 === 1;

                        return (
                            <div className="bg-white rounded-2xl shadow-xl px-8 mb-4" key={idx}>
                                <section
                                    className="grid grid-cols-1 lg:grid-cols-2 items-center sm:gap-8"
                                >
                                    {/* Text content */}
                                    <div className={`w-full ${isReversed ? "lg:order-last" : ""}`}>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-5">
                                            {sec.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {sec.features.map((feat, i) => (
                                                <li key={i} className="flex items-start">
                                                    <CheckCircleIcon
                                                        className="h-6 w-6 flex-shrink-0 text-green-500 mt-0.5"/>
                                                    <span className="ml-3 text-base text-gray-700">{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Video content with a more compact size */}
                                    <div className="w-full flex justify-center">
                                        <div className="w-full max-w-[330px]">
                                            <video
                                                src={sec.video}
                                                className="rounded-xl w-full"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                            />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

