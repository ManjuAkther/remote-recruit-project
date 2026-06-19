

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-slate-600">Choose the membership tier that fits your hiring or job hunting needs.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Card */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Free Plan</h3>
              <p className="text-sm text-slate-500 mt-1">Perfect for getting started</p>
              <div className="mt-6 text-4xl font-black text-slate-900">$0</div>
              <ul className="mt-8 space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3">✔️ 1 Active Job Post</li>
                <li className="flex items-center gap-3">✔️ Basic List Placement</li>
                <li className="flex items-center gap-3">✔️ Unlimited Job Applicants</li>
              </ul>
            </div>
            <button className="mt-8 w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 rounded-xl transition-colors">
              Get Started
            </button>
          </div>

          {/* Premium Card */}
          <div className="bg-white border-2 border-blue-600 rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow relative">
            <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Premium Plan</h3>
              <p className="text-sm text-slate-500 mt-1">Accelerate your visibility</p>
              <div className="mt-6 text-4xl font-black text-slate-900">$79.99<span className="text-sm text-slate-400 font-normal">/mo</span></div>
              <ul className="mt-8 space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3">✔️ Unlimited Job Posts</li>
                <li className="flex items-center gap-3">✔️ Instant Job Post Approval</li>
                <li className="flex items-center gap-3">✔️ Premium List Placement & Visibility</li>
                <li className="flex items-center gap-3">✔️ Direct Messaging & Unlimited Invites</li>
              </ul>
            </div>
            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/10">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
