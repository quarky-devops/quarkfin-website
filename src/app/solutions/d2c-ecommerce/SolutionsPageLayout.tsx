"use client";

import {CheckCircleIcon} from "lucide-react";
import React from "react";

const featureContent = [
    {
        title: "Quark Secure (Intelligent Onboarding)",
        features: ["Fake accounts", "RTO fraud", "Guest checkout scams"],
        video: "/videos/CustomerRelationshipManager.mp4",
    },
    {
        title: "Chargeback Shield",
        features: ["Friendly fraud", "Card testing", "Merchant scams"],
        video: "/videos/Shield.mp4",
    },
    {
        title: "Promo Abuse Protection",
        features: ["Coupon stacking", "Fake referrals", "Loyalty fraud"],
        video: "/videos/Promo.mp4",
    },
];

type Section = {
    subHeading?: string;
    title: string;
    features?: string[];
    image?: string;
    video?: string;
};

export default function SolutionsPageLayout() {
    return (
        <div className="space-y-16 lg:space-y-24">
            {featureContent.map((sec: Section, idx) => {
                const isReversed = idx % 2 === 1;

                return (
                    <div className="bg-white rounded-2xl shadow-xl px-8 mb-4" key={idx}>
                        <section
                            className="grid grid-cols-1 items-center lg:grid-cols-2 sm:gap-16"
                        >
                            {/* Text Block */}
                            <div className={`w-full ${isReversed ? 'lg:order-last' : ''}`}>
                                {sec.subHeading && (
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#2C2F8F]">
                                        {sec.subHeading}
                                    </h3>
                                )}
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                                    {sec.title}
                                </h2>
                                <ul className="space-y-4">
                                    {sec?.features?.map((feat, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-green-500 mt-1"/>
                                            <span className="ml-3 text-gray-700">{feat}</span>
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
    );
}
