'use client'

import type React from 'react'
import {useState} from 'react'
import {Mail, Send} from 'lucide-react'
import Footer from '@/components/Footer'
import Navbar from '@/app/components/Navbar'
import {supabase} from '@/lib/supabaseClient'

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        business_email: '',
        phone: '',
        message: '',
        company: '',

    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        const {error} = await supabase.from('leads').insert([
            {
                name: formData.name,
                business_email: formData.business_email,
                phone: formData.phone,
                message: formData.message,
                company: formData.company,
            },
        ])

        if (error) {
            console.error('Supabase insert error:', error.message)
            setIsSubmitting(false)
            return
        }

        setIsSubmitting(false)
        setIsSubmitted(true)

        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({name: '', business_email: '', phone: '', message: '', company: ''})
        }, 3000)
    }

    return (
        <>
            <Navbar/>

            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-16 text-left">
                        <h1 className="mb-4 text-4xl font-bold text-gray-900">
                            Contact Us
                        </h1>
                        <p className="mx-auto max-w-7xl text-left text-xl text-gray-600">
                            We&apos;d love to hear from you. Send us a message and we&apos;ll
                            respond as soon as possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <div className="rounded-lg bg-white p-8 shadow-sm">
                                <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                                    Get in Touch
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <Mail className="mt-1 h-6 w-6 text-blue-600"/>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                Email
                                            </h3>
                                            <p className="text-gray-600">hello@quarkfin.ai</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="rounded-lg bg-white p-8 shadow-sm">
                                <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                                    Send us a Message
                                </h2>

                                {isSubmitted ? (
                                    <div className="py-12 text-center">
                                        <div
                                            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                            <svg
                                                className="h-8 w-8 text-green-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                            Message Sent!
                                        </h3>
                                        <p className="text-gray-600">
                                            Thank you for contacting us. We&apos;ll get back to you
                                            soon.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="mb-2 block text-sm font-medium text-gray-700"
                                                >
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="mb-2 block text-sm font-medium text-gray-700"
                                                >
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="business_email"
                                                    required
                                                    value={formData.business_email}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="mb-2 block text-sm font-medium text-gray-700"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                                placeholder="Phone number (optional)"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="company"
                                                className="mb-2 block text-sm font-medium text-gray-700"
                                            >
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                                placeholder="Company Name"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="mb-2 block text-sm font-medium text-gray-700"
                                            >
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                                placeholder="Tell us more about your inquiry..."
                                            />
                                        </div>


                                        <div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="cursor-pointer flex w-full items-center justify-center rounded-lg bg-[#2C2F8F] px-6 py-3 font-medium text-white transition-colors hover:bg-[#272a7a] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg
                                                            className="mr-3 h-5 w-5 animate-spin"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                                className="opacity-25"
                                                            />
                                                            <path
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                className="opacity-75"
                                                            />
                                                        </svg>
                                                        Sending…
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-5 w-5"/>
                                                        Send Message
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
