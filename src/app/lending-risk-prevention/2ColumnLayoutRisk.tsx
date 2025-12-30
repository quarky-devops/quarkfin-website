"use client";

import {CheckCircleIcon} from "lucide-react";
import React from "react";

const featureContent = [
    {
        title: "Card Fraud Prevention",
        subHeading: "Stop fraudsters before they steal",
        features: [
            'Stolen Card Detection (real-time BIN checks, velocity monitoring)',
            'Friendly Fraud Blocking (behavioral analysis catches "buyer’s remorse" fraud)',
            'Card Testing Protection (flags rapid-fire card testing attacks)',
        ],
        video: "/videos/CreditCard.mp4",
    },
    {
        title: "Smarter Credit Underwriting",
        subHeading: "Lend more, lose less",
        features: [
            "NTC Underwriting (AI predicts risk for thin-file borrowers)",
            "Delinquency Analytics (spots high-risk borrowers before they default)",
            "Self-Serve LOS (drag-and-drop rules, no engineering needed)",
        ],
        video: "/videos/CreditAssessment.mp4",
    },
    {
        title: "Lending-as-a-Service",
        subHeading: "Scale without the fraud headaches",
        features: [
            "White-Label Underwriting (embed risk scoring into your app)",
            "Automated Decisioning (real-time approvals, no manual reviews)",
        ],
        video: "/videos/OnlineTransactions.mp4",
    },
];

type Section = {
    subHeading?: string;
    title: string;
    features: string[];
    video?: string;
};

export default function TwoColumnSectionsRisk() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <h2 className="text-[#2C2F8F] text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
                    The End-to-End Defence Against Lending Fraud
                </h2>

                <div className="space-y-16">
                    {featureContent.map((sec: Section, idx) => {
                        const isReversed = idx % 2 === 1;

                        return (
                            <div className="bg-white rounded-2xl shadow-xl px-8 mb-4" key={idx}>
                                <section
                                    className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
                                >
                                    {/* Text Block */}
                                    <div className={`w-full ${isReversed ? 'lg:order-last' : ''}`}>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#2C2F8F]">
                                            {sec.subHeading}
                                        </h3>
                                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 mb-6">
                                            {sec.title.trim()}
                                        </h2>
                                        <ul className="space-y-4">
                                            {sec.features.map((feat, i) => (
                                                <li key={i} className="flex items-start">
                                                    <CheckCircleIcon
                                                        className="h-6 w-6 flex-shrink-0 text-green-500 mt-1"/>
                                                    <span className="ml-3 text-gray-700">{feat.trim()}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Video Block */}
                                    <div className="w-full flex justify-center">
                                        <div className="w-full max-w-md">
                                            <video
                                                src={sec.video}
                                                className="max-w-[330px] w-full"
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
    )
        ;
}
