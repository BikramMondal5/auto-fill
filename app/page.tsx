"use client";
import { useState } from "react";
// ...existing imports...

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoModal } from "@/components/video-modal";
import {
  Chrome,
  Globe,
  ArrowRight,
  ChevronDown,
  Play,
  Instagram,
  CastIcon as Mastodon,
  Facebook,
  Diamond as Discord,
  Youtube,
} from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

export default function HomePage() {
  // ...existing code...

  // How It Works Section Title
  // Place this just before the modal section in the JSX return
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [autoPlayVideo, setAutoPlayVideo] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-60 left-1/4 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
          style={{ animationDuration: "9s" }}
        ></div>
        <div
          className="absolute top-32 right-1/4 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
          style={{ animationDuration: "11s" }}
        ></div>
        <div
          className="absolute bottom-60 left-16 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "13s" }}
        ></div>
        <div
          className="absolute top-80 right-1/3 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className="absolute bottom-32 right-1/2 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "14s" }}
        ></div>

        {/* Additional dense stars for hero section with slower blinking */}
        <div
          className="absolute top-16 left-1/3 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className="absolute top-24 right-1/5 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-36 left-1/6 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-44 right-2/5 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute top-52 left-2/5 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
          style={{ animationDuration: "9s" }}
        ></div>
        <div
          className="absolute top-64 right-1/6 w-1 h-1 bg-white rounded-full opacity-35 animate-pulse"
          style={{ animationDuration: "11s" }}
        ></div>
        <div
          className="absolute top-72 left-1/5 w-1 h-1 bg-white rounded-full opacity-55 animate-pulse"
          style={{ animationDuration: "13s" }}
        ></div>
        <div
          className="absolute top-84 right-3/5 w-1 h-1 bg-white rounded-full opacity-45 animate-pulse"
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className="absolute top-96 left-3/5 w-1 h-1 bg-white rounded-full opacity-65 animate-pulse"
          style={{ animationDuration: "14s" }}
        ></div>
        <div
          className="absolute top-28 left-3/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "16s" }}
        ></div>
        <div
          className="absolute top-48 right-3/4 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-56 left-1/8 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-68 right-1/8 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute top-76 left-7/8 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "9s" }}
        ></div>
        <div
          className="absolute top-88 right-7/8 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
          style={{ animationDuration: "11s" }}
        ></div>

        {/* More scattered stars */}
        <div
          className="absolute top-12 left-1/2 w-1 h-1 bg-white rounded-full opacity-35 animate-pulse"
          style={{ animationDuration: "13s" }}
        ></div>
        <div
          className="absolute top-92 right-1/2 w-1 h-1 bg-white rounded-full opacity-45 animate-pulse"
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className="absolute top-18 left-3/8 w-1 h-1 bg-white rounded-full opacity-55 animate-pulse"
          style={{ animationDuration: "14s" }}
        ></div>
        <div
          className="absolute top-38 right-3/8 w-1 h-1 bg-white rounded-full opacity-25 animate-pulse"
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className="absolute top-58 left-5/8 w-1 h-1 bg-white rounded-full opacity-65 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-78 right-5/8 w-1 h-1 bg-white rounded-full opacity-35 animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-26 left-1/12 w-1 h-1 bg-white rounded-full opacity-45 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute top-46 right-1/12 w-1 h-1 bg-white rounded-full opacity-55 animate-pulse"
          style={{ animationDuration: "9s" }}
        ></div>
        <div
          className="absolute top-66 left-11/12 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "11s" }}
        ></div>
        <div
          className="absolute top-86 right-11/12 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
          style={{ animationDuration: "16s" }}
        ></div>

        {/* Larger accent stars */}
        <div
          className="absolute top-30 left-2/3 w-2 h-2 bg-white rounded-full opacity-25 animate-pulse"
          style={{ animationDuration: "13s" }}
        ></div>
        <div
          className="absolute top-70 right-2/3 w-2 h-2 bg-white rounded-full opacity-35 animate-pulse"
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className="absolute top-50 left-1/10 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "14s" }}
        ></div>
        <div
          className="absolute top-90 right-1/10 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"
          style={{ animationDuration: "15s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">{"M"}</span>
            </div>
            <span className="text-xl font-semibold">
              <span style={{
                background: 'linear-gradient(90deg, #b6aaff 0%, #e6cfff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}>Magic</span>
              <span style={{ color: '#3591e2' }}>Fill</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About MagicFill
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              User Manual
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-gray-300">
            <Globe className="w-4 h-4" />
            <span className="text-sm">EN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full bg-white text-black hover:bg-gray-200">
            {"B"}
          </Button>
          <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
            <Chrome className="w-4 h-4 mr-2" />
            Add to Chrome
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center py-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            <span style={{
              background: 'linear-gradient(90deg, #b6aaff 0%, #e6cfff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}>Magic</span><span style={{ color: '#3591e2' }}>Fill</span> – “Your Forms, Filled by Magic”
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-balance">
            Upload once, auto-fill everywhere. MagicFill uses AI to securely complete complex forms in seconds — no hassle, no errors
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg rounded-full mx-0 px-7 py-7"
            >
              <Chrome className="w-5 h-5 mr-3" />
              Try MagicFill on Chrome - It's Free
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>

          {/* Product Hunt Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🏆</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Product Hunt</div>
                  <div className="font-semibold">#1 Product of the Week</div>
                </div>
              </div>
            </Badge>

            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🥇</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Product Hunt</div>
                  <div className="font-semibold">#1 Product of the Day</div>
                </div>
              </div>
            </Badge>

            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">P</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 uppercase tracking-wide">#1 Product of the Week</div>
                  <div className="font-semibold">Artificial Intelligence</div>
                </div>
              </div>
            </Badge>
          </div>
        </div>
      </main>

      {/* Dashboard Modal Replacement */}
      <section className="relative z-10 px-6 py-0">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#3591e2' }}>How It Works</h2>
      </section>
      <div className="relative z-10 flex justify-center py-0">
        <div className="bg-[#23263a] rounded-2xl shadow-2xl overflow-hidden border border-[#23263a] max-w-4xl w-[70vw] relative">
          {/* Top-left dots */}
          <div className="absolute top-3 left-4 flex space-x-2 z-20">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
          <div className="relative w-full h-[500px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2b2e4a 0%, #5f2c82 100%)' }}>
            <img
              src="MagicFill-logo (4) (1).jpeg"
              alt="Dashboard Demo"
              className="w-full h-full object-contain rounded-2xl"
              style={{ maxHeight: 650 }}
            />
            <button
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-0 shadow-lg flex items-center justify-center transition border-none bg-transparent"
              style={{ zIndex: 2 }}
              onClick={() => { setIsVideoModalOpen(true); setAutoPlayVideo(true); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width="64" height="64">
                <circle cx="24" cy="24" r="24" fill="#3591e2" fillOpacity="0.9" />
                <polygon points="20,16 36,24 20,32" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Key Features section with feature cards */}
      <section className="relative z-10 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#3591e2' }}>Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI-Powered Autofill Feature */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-white/10 relative hover:border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 cursor-pointer">
              <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full opacity-60"></div>
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-4">AI-Powered Autofill</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automatically extracts and fills government forms using stored user data.
              </p>
            </div>

            {/* Secure Data Storage Feature */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-white/10 relative hover:border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 cursor-pointer">
              <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full opacity-60"></div>
              <div className="text-4xl mb-4">📂</div>
              <h3 className="text-xl font-bold mb-4">Secure Data Storage</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                User details and documents are safely stored in Supabase & vector databases.
              </p>
            </div>

            {/* Smart Document Validation Feature */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-white/10 relative hover:border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 cursor-pointer">
              <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full opacity-60"></div>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-4">Smart Document Validation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Verifies uploaded government documents (e.g., Aadhaar, PAN) before use.
              </p>
            </div>

            {/* Seamless Integration Feature */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-white/10 relative hover:border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 cursor-pointer">
              <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full opacity-60"></div>
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Works with government portals via n8n workflows and Chrome Extension.
              </p>
            </div>

            {/* Time-Saving Feature */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-white/10 lg:col-span-2 relative hover:border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 cursor-pointer">
              <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full opacity-60"></div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Time-Saving & Error-Free</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reduces manual entry, minimizes errors, and speeds up application processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="relative z-10 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#3591e2' }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              "What is MagicFill?",
              "What types of websites can I scrape using MagicFill?",
              "Is MagicFill free to use?",
              "Do I need coding skills to use MagicFill?",
              "How do I change the data fields I'm extracting?",
              "What file formats does MagicFill support?",
              "Does MagicFill save my past scraping sessions?",
            ].map((question, index) => (
              <div key={index} className="border-b border-gray-800">
                <button
                  className="w-full flex items-center justify-between py-4 text-left hover:text-gray-300 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg">{question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="pb-4 text-gray-300">
                    <p>This is where the answer would go for "{question}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-50"></div>
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-purple-500/20 to-purple-600/20 animate-pulse"
              style={{ animationDuration: "4s" }}
            ></div>

            {/* Enhanced decorative stars */}
            <div
              className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full opacity-80 animate-pulse"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-12 right-16 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
              style={{ animationDuration: "5s" }}
            ></div>
            <div
              className="absolute bottom-8 left-12 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
              style={{ animationDuration: "4s" }}
            ></div>
            <div
              className="absolute top-8 left-8 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
              style={{ animationDuration: "6s" }}
            ></div>
            <div
              className="absolute bottom-12 right-12 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
              style={{ animationDuration: "3.5s" }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-balance">
                Tired of filling forms again and again?
              </h2>
              <h3 className="text-2xl mb-8">Let MagicFill auto-complete them for you in seconds.</h3>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                🔘 Get Started Now 
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-gray-800 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-semibold">
                  <span style={{
                    background: 'linear-gradient(90deg, #b6aaff 0%, #e6cfff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}>Magic</span><span style={{ color: '#3591e2' }}>Fill</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                © Lumoris Technologies Inc.
                <br />
                2025 All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-[#3591e2] cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white text-sm">
                  Terms & Conditions
                </a>
                <a href="#" className="block text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white text-sm">
                  About 
                </a>
                <a href="#" className="block text-gray-400 hover:text-white text-sm">
                  Contact Us
                </a>
                <a href="#" className="block text-gray-400 hover:text-white text-sm">
                  User Manual
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <a href="#" className="block text-gray-400 hover:text-white text-sm">
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal Component */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => { setIsVideoModalOpen(false); setAutoPlayVideo(false); }}
        videoUrl="https://youtu.be/4ybHfG3jo4w"
        autoPlay={autoPlayVideo}
      />
    </div>
  )
}
