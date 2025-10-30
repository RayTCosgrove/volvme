import Image from "next/image";
import { ScramblingText } from "@/components/ScramblingText";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden dither-bg">
      {/* Navigation Header */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <div className="flex items-center">
              <h2 className="text-white text-3xl font-rvstica tracking-wider">
                VOLVME
              </h2>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <span className="text-xs text-gray-500 font-mono tracking-wider">USEFUL</span>
              <a href="#product" className="text-gray-300 hover:text-white transition-colors font-mono text-sm">
                Product
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors font-mono text-sm">
                Solutions
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-mono text-sm">
                Pricing
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors font-mono text-sm border border-white/20 px-6 py-2 rounded-full hover:border-white/40">
                Sign in
              </button>
              <button className="bg-white text-black font-mono text-sm px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center ">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full px-4 sm:px-8">
          {/* Top Column (Mobile Only) */}
          <div className="flex lg:hidden flex-col items-center justify-center opacity-30 mb-4">
            <Image 
              src="/images/asciiColumn.png" 
              alt="Roman Column" 
              width={600} 
              height={300}
              className="object-contain rotate-90"
            />
          </div>

          {/* Left Column (Desktop Only) */}
          <div className="hidden lg:flex flex-col items-center justify-center opacity-40 hover:opacity-60 transition-opacity duration-500">
            <Image 
              src="/images/asciiColumn.png" 
              alt="Roman Column" 
              width={300} 
              height={600}
              className="object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center justify-center mx-4 sm:mx-8 lg:mx-12 xl:mx-24">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.2em] sm:tracking-[0.3em] font-rvstica mb-4 relative">
              <ScramblingText text="VOLVME" />
              <span className="absolute -right-6 sm:-right-8 top-0 text-xl sm:text-2xl font-mono">™</span>
            </h1>
          </div>

          {/* Right Column (Desktop Only) */}
          <div className="hidden lg:flex flex-col items-center justify-center opacity-40 hover:opacity-60 transition-opacity duration-500">
            <Image 
              src="/images/asciiColumn.png" 
              alt="Roman Column" 
              width={300} 
              height={600}
              className="object-contain"
            />
          </div>

          {/* Bottom Column (Mobile Only) */}
          <div className="flex lg:hidden flex-col items-center justify-center opacity-30 mt-4">
            <Image 
              src="/images/asciiColumn.png" 
              alt="Roman Column" 
              width={600} 
              height={300}
              className="object-contain rotate-90"
            />
          </div>
        </div>

        {/* Ambient Light Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <div className=" px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-end gap-4">
            {/* Social Links */}
            {/* <div className="flex items-center gap-6">
              <span className="text-xs text-gray-500 font-mono tracking-wider mr-2">CONNECT</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div> */}

            {/* Email Subscription */}
            {/* <div className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 font-mono"
              />
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors font-mono text-sm flex items-center gap-2">
                SUBSCRIBE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
