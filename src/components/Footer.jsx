

export default function Footer() {
  return (
    <footer className="relative bg-white pt-20">
      {/* 1. PRICING SECTION OVERLAP */}
      <div className="max-w-6xl mx-auto px-4 relative z-10 -mb-32 md:-mb-40">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Help Is One Click Away
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Tier Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-600">Free</h3>
                  <p className="text-xs text-slate-400 mt-1">Basic</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-xs md:text-sm font-medium text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span> 1 Active Job
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span> Basic List Placement
                </li>
                <li className="flex items-center gap-3 text-slate-400 line-through">
                  <span>✕</span> Unlimited Job Applicants
                </li>
                <li className="flex items-center gap-3 text-slate-400 line-through">
                  <span>✕</span> Invite Anyone to Apply to Your Jobs
                </li>
              </ul>
            </div>
            <button className="w-full py-3 px-6 rounded-xl border-2 border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors focus:ring-2 focus:ring-blue-500 outline-none">
              Get Started
            </button>
          </div>

          {/* Premium Tier Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden ring-2 ring-blue-500">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full mb-2">
                    💎 Premium
                  </span>
                  <h3 className="text-3xl font-extrabold text-slate-900">$79.99</h3>
                  <p className="text-xs text-slate-400 mt-1">Per Month</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-xs md:text-sm font-medium text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span> Unlimited Job Posts
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span> Instant Job Post Approval
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span> Premium List Placement
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span> Unlimited Job Applicants
                </li>
              </ul>
            </div>
            <button className="w-full py-3 px-6 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md transition-all hover:shadow-lg focus:ring-2 focus:ring-blue-400 outline-none">
              Get Started
            </button>
          </div>

        </div>
      </div>

      {/* 2. BLUE BACKGROUND FOOTER COMPONENT */}
      <div className="bg-gradient-to-b from-blue-900 to-slate-950 text-white pt-48 pb-12 md:pt-64 clip-wave-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12">
            
            {/* Brand Logo and Subtitle */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-2xl font-black tracking-tight">
                Remote<span className="text-sky-400">Recruit</span>
              </div>
              <p className="text-xs text-blue-200/60 mt-2 max-w-xs leading-relaxed">
                Empowering teams to source talent effortlessly across international regions.
              </p>
            </div>

            {/* Social Network Icon Anchors */}
            <div className="flex items-center gap-4 text-lg">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition-all" aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition-all" aria-label="Instagram">
                <span>📸</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition-all" aria-label="X (formerly Twitter)">
                <span>𝕏</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition-all" aria-label="LinkedIn">
                <span>in</span>
              </a>
            </div>

          </div>

          {/* Legal / Copyright Bottom Line Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-[11px] text-blue-200/40">
            <p>© {new Date().getFullYear()} RemoteRecruit Global Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}


// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
//         <p>© {new Date().getFullYear()} RemoteRecruit. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }
