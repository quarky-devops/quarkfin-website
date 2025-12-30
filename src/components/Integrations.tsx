"use client";

import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function Integrations() {
    return (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 xl:grid-cols-12">
            <GridItem
                className="md:col-span-6 xl:col-span-4"
                icon={
                    <Image
                        src="/shopify.png"
                        alt="Shopify logo"
                        width={24}
                        height={24}
                        className="h-10 w-10 object-contain"
                    />
                }
                title="Shopify"
                description="Plug-and-play app that scores every Shopify order for risk before you fulfill."
            />

            {/* 2) Woocommerce */}
            <GridItem
                className="md:col-span-6 xl:col-span-4"
                icon={
                    <Image
                        src="/woocommerce.png"
                        alt="Woocommerce logo"
                        width={24}
                        height={24}
                        className="h-10 w-10 object-contain"
                    />
                }
                title="Woocommerce"
                description="Seamlessly screen WooCommerce checkouts with real-time fraud and KYC checks."
            />

            {/* 3) Direct API */}
            <GridItem
                className="md:col-span-6 xl:col-span-4"
                icon={
                    <Image
                        src="/api.png"
                        alt="Direct API logo"
                        width={24}
                        height={24}
                        className="h-10 w-10 object-contain"
                    />
                }
                title="Direct API"
                description="Hit our REST endpoint from any stack to get instant trust and credit decisions."
            />

            {/* 4) SDK */}
            <GridItem
                className="md:col-span-6 xl:col-span-4"
                icon={
                    <Image
                        src="/sdk.png"
                        alt="SDK logo"
                        width={24}
                        height={24}
                        className="h-10 w-10 object-contain"
                    />
                }
                title="SDK"
                description="Drop-in mobile SDK that adds identity, device, and payment risk signals in minutes."
            />

            {/* 5) Web SDK */}
            <GridItem
                className="md:col-span-6 xl:col-span-4"
                icon={
                    <Image
                        src="/mobile-sdk.png"
                        alt="Web SDK logo"
                        width={32}
                        height={32}
                        className="h-10 w-10 object-contain"
                    />
                }
                title="Web SDK"
                description="Lightweight JavaScript snippet that enriches browser sessions with fraud telemetry."
            />

            {/* 6) Magento (NEW) */}
            <GridItem
                className="md:col-span-6 xl:col-span-4"
                icon={
                    <Image
                        src="/magento.png"
                        alt="Magento logo"
                        width={24}
                        height={24}
                        className="h-10 w-10 object-contain"
                    />
                }
                title="Magento"
                description="Lightweight JavaScript snippet that enriches browser sessions with fraud telemetry."
            />
            {/* ──────────────────────────────────────────────────────────────── */}
        </ul>
    );
}

interface GridItemProps {
    className?: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ className = "", icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${className}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
