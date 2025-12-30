"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface IndustryDashboardProps {
    industry: {
        id: string
        name: string
        color: string
        accentColor: string
        dashboard: string
    }
}

export default function IndustryDashboard({ industry }: IndustryDashboardProps) {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md relative"
        >
            <div className={`absolute inset-0 rounded-lg ${industry.color} opacity-50 blur-xl`} />
            <div className="relative bg-white rounded-lg border shadow-lg overflow-hidden">
                <div className={`h-2 ${industry.accentColor} w-full`} />
                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${industry.accentColor}`} />
                            <span className="font-medium text-sm">{industry.name} Dashboard</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                        </div>
                    </div>
                    <div className="aspect-video w-full relative bg-gray-100 rounded-md overflow-hidden">
                        <Image
                            src={`/placeholder.svg?height=300&width=500&text=${industry.name}`}
                            alt={`${industry.name} dashboard visualization`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="h-16 bg-gray-50 rounded-md p-2">
                                <div className="w-1/2 h-2 bg-gray-200 rounded mb-2" />
                                <div className="w-3/4 h-3 bg-gray-300 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
