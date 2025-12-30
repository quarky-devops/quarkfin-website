"use client"
import Navbar from "@/app/components/Navbar"
import Footer from "@/components/Footer"
import {Eye, Linkedin, Target, Twitter} from "lucide-react"
import Image from "next/image"

const teamMembers = [
    {
        name: "Bidya Bhushan Bibhu",
        role: "Co-Founder/CEO",
        image: "/logos/profile-2.jpeg",
        linkedin: "https://www.linkedin.com/in/bidya-bhushan-bibhu/",
        twitter: "https://x.com/bidyabibhu",
    },
    {
        name: "Sachinn M",
        role: "GTM",
        image: "/logos/profile-1.png",
        linkedin: "https://www.linkedin.com/in/sachinnm/",
        twitter: "https://x.com/sachinn_m",
    },
    {
        name: "Mehul Dhikonia",
        role: "CTPO",
        image: "/placeholder.svg?height=400&width=400",
        linkedin: "https://www.linkedin.com/in/mehuldhikonia/",
        twitter: "https://x.com/nmblebee",
    },
    {
        name: "Suyash Pradhan",
        role: "Founding Engineer",
        image: "/logos/4.jpg",
        linkedin: "https://www.linkedin.com/in/suyashpradhan9/",
        twitter: "https://x.com/SuyashPradhan9",
    },
]

const brandLogos = [
    {name: "Amazon", logo: "/logos/amazon.png"},
    {name: "CRED", logo: "/logos/cred.png"},
    {name: "Deliveryhero", logo: "/logos/dh1.png"},
    {name: "Chargebee", logo: "/logos/chargebee.avif"},
    {name: "Oracle", logo: "/logos/oracle.png"},
    {name: "MoEngage", logo: "/logos/moengage.jpg"},
    {name: "Practo", logo: "/logos/practo.jpg"},
    {name: "IIT Delhi", logo: "/logos/iit.png"},
    {name: "Bits Pilani", logo: "/logos/bits.avif"},
]

export default function AboutUs() {
    return (
        <>
            <Navbar/>
            <div className="bg-white text-gray-800">
                {/* HERO SECTION (Modernized) */}
                <section className="relative bg-gray-50 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 opacity-60"></div>
                    <div className="relative max-w-7xl mx-auto py-12 sm:px-6 xs:px-6">
                        <h1 className="text-2xl md:text-3xl mb-12 text-left lg:text-5xl font-extrabold text-[#2C2F8F] tracking-tight">
                            We're Building the Future of Trust...
                        </h1>
                        <p className="mt-6 max-w-7xl text-left mx-auto text-md md:text-lg text-gray-600">
                            We built QuarkfinAI out of frustration from watching good businesses get blindsided by
                            fraud, over and over. Enterprises with bold ideas, scaling companies on the verge of
                            breakthroughs, have all been derailed by preventable threats. The existing tools meant to
                            protect them are relics of the past: clunky, expensive, and built for legacy, not
                            innovators, or built for scale. We knew there had to be a better way!

                            <br/><br/>
                            So we built it ourselves. Drawing on years in fraud prevention, we designed QuarkfinAI to be
                            what we'd always needed: smart enough to outthink modern risks, but so simple that any team
                            could use it. No army of techies required. In an era where AI is rewriting the rules of
                            fraud daily, we flipped the script: instead of reacting to losses, we help businesses stop
                            threats before they strike.

                            <br/><br/>
                            Not to be dramatic, but this isn't just software; it's a shield for ambition. Because every
                            company, big or small, deserves to grow fearlessly.
                        </p>
                    </div>
                </section>


                {/* VISION & MISSION SECTION (Modernized) */}
                <section className="py-12 px-6 lg:px-8 bg-[#2C2F8F] text-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <div className="flex items-center justify-center bg-white/10 p-4 rounded-full mb-6">
                                <Eye className="w-8 h-8 text-white"/>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                            <p className="text-lg text-indigo-100 leading-relaxed max-w-md">
                                Where trust drives growth, and growth builds trust.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <div className="flex items-center justify-center bg-white/10 p-4 rounded-full mb-6">
                                <Target className="w-8 h-8 text-white"/>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                            <p className="text-lg text-indigo-100 leading-relaxed max-w-md">
                                To become the trusted risk intelligence layer—an always-learning AI platform that makes
                                high-velocity, high-trust transactions possible for every business.
                            </p>
                        </div>
                    </div>
                </section>

                {/* BRANDS TICKER SECTION (Reverted to Original) */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            {/* Kept the improved heading */}
                            <h2 className="text-3xl md:text-4xl text-left font-bold text-gray-900">Team background
                            </h2>

                        </div>
                        {/* This is the original carousel implementation */}
                        <div className="relative overflow-hidden">
                            <div className="flex animate-scroll">
                                {brandLogos.map((brand, index) => (
                                    <div key={index} className="flex-shrink-0 mx-8">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            height={200}
                                            width={200}
                                            className="h-18 w-auto"
                                        />
                                    </div>
                                ))}
                                {brandLogos.map((brand, index) => (
                                    <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
                                        <img
                                            src={brand.logo || "/placeholder.svg"}
                                            alt={brand.name}
                                            height={200}
                                            width={200}
                                            className="h-18 w-auto"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* TEAM SECTION (Modernized) */}
                <section className="py-20 px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl text-left md:text-4xl font-bold text-gray-900">The People Behind the
                                Magic
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member) => (
                                <div key={member.name}
                                     className="group relative flex flex-col items-center text-center">
                                    <div
                                        className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-[#2C2F8F] font-medium">{member.role}</p>
                                    </div>
                                    <div
                                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-full">
                                        <div className="flex space-x-4">
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                                               className="p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors">
                                                <Linkedin size={20}/>
                                            </a>
                                            <a href={member.twitter} target="_blank" rel="noopener noreferrer"
                                               className="p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors">
                                                <Twitter size={20}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>

            <style jsx>{`

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: calc(200% + 4rem);
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </>
    )
}