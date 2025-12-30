import {Clock, Rocket, Sparkles} from "lucide-react"

export default function ComingSoon() {
    return (
        <>
            <div
                className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center p-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Decorative elements */}
                    <div className="relative mb-12">
                        <div className="absolute -top-8 -left-8 text-blue-200">
                            <Sparkles size={32}/>
                        </div>
                        <div className="absolute -top-4 -right-12 text-purple-200">
                            <Sparkles size={24}/>
                        </div>
                        <div className="absolute -bottom-6 left-12 text-pink-200">
                            <Sparkles size={20}/>
                        </div>
                    </div>

                    {/* Main illustration */}
                    <div className="mb-12 flex justify-center">
                        <div className="relative">
                            <div
                                className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                <Rocket size={48} className="text-white"/>
                            </div>
                            <div
                                className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                <Sparkles size={16} className="text-yellow-800"/>
                            </div>
                        </div>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">Coming
                        Soon</h1>

                    {/* Subheading */}
                    <p className="text-4xl  text-gray-600 mb-12 font-light">Great things take time</p>

                    {/* Clock illustration */}
                    <div className="flex justify-center mb-12">
                        <div
                            className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
                            <Clock size={20} className="text-gray-500"/>
                            <span className="text-gray-600 font-medium">We're working on something amazing</span>
                        </div>
                    </div>

                    {/* Decorative dots */}
                    <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                             style={{animationDelay: "0.2s"}}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
                             style={{animationDelay: "0.4s"}}></div>
                    </div>

                    {/* Bottom decorative elements */}
                    <div className="mt-16 relative">
                        <div className="absolute bottom-0 right-8 text-blue-100">
                            <Sparkles size={28}/>
                        </div>
                        <div className="absolute bottom-4 left-16 text-purple-100">
                            <Sparkles size={20}/>
                        </div>
                    </div>
                </div>
                <div className="py-12 border-t border-white/10">
                    <p className="text-gray-400 text-sm">© 2025 QuarkfinAI. All rights reserved.</p>
                </div>
            </div>

        </>
    )
}
