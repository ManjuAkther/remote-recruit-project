// // const Membership = () => {
// //   return (
// //     <section className="p-10 bg-gray-100 text-center">
// //       <h2 className="text-3xl font-bold mb-6">
// //         Your Membership Tier
// //       </h2>

// //       <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
// //         <h3 className="text-xl font-bold">Premium</h3>
// //         <p className="mt-2">Up to 25 job posts</p>
// //         <p>Unlimited invites</p>
// //         <p className="mt-4 font-semibold">$79.99 / 14 days</p>
// //       </div>
// //     </section>
// //   );
// // };
// // export default Membership;

// const Membership = () => {
//   return (
//     <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center bg-gray-50">
      
//       {/* LEFT CARD */}
//       <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-up">
//         <h3 className="text-blue-500">Your Membership Tier</h3>
//         <h2 className="text-xl font-bold text-blue-600 mt-2">Premium</h2>

//         <ul className="mt-4 space-y-2 text-sm">
//           <li>✔ Up to 25 active job posts</li>
//           <li>✔ Premium Placement & Visibility</li>
//           <li>✔ Messaging anyone, unlimited</li>
//           <li>✔ Unlimited invites</li>
//         </ul>

//         <div className="mt-6 bg-gray-100 p-3 rounded-lg text-sm">
//           14 Days - $79.99
//         </div>
//       </div>

//       {/* RIGHT TEXT */}
//       <div data-aos="fade-left">
//         <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
//           Actually Fee Free
//         </span>

//         <h2 className="text-3xl font-bold mt-4">
//           Fee-Free Forever
//         </h2>

//         <p className="text-gray-500 mt-4">
//           We don’t charge you fees and we don’t put up paywalls...
//         </p>
//       </div>
//     </section>
//   );
// };
// export default Membership;


// export default function Membership() {
//   return (
//     <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-white overflow-hidden">
      
//       {/* LEFT: COMPLEX FIGMA INTERFACE CARD CONTAINER */}
//       <div className="lg:col-span-6 relative flex justify-center lg:justify-start pt-6 pb-12" data-aos="fade-up">
        
//         {/* Main Membership Tier Stack Base Card */}
//         <div className="w-full max-w-[380px] bg-white rounded-[32px] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.06)] border border-slate-100 relative z-10">
//           <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
//             Your Membership Tier
//           </span>
//           <h3 className="text-3xl font-extrabold text-blue-600 tracking-tight mt-1 mb-6">
//             Premium
//           </h3>

//           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
//             Features
//           </p>
//           <ul className="space-y-4 text-xs md:text-sm font-semibold text-slate-700">
//             <li className="flex items-center gap-3">
//               <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] shrink-0">✓</span>
//               Up to 25 active job posts
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] shrink-0">✓</span>
//               Premium Placement & Visibility
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] shrink-0">✓</span>
//               Messaging anyone, unlimited
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] shrink-0">✓</span>
//               Unlimited invites
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] shrink-0">✓</span>
//               View all applicants
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] shrink-0">✓</span>
//               Unlimited invites to jobseekers
//             </li>
//           </ul>
//         </div>

//         {/* Floating RemoteRecruit Blue Emblem Badge */}
//         <div className="absolute right-[10%] sm:right-[20%] lg:right-4 top-16 w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 shadow-xl shadow-blue-500/20 z-20 flex items-center justify-center border-4 border-white transform transition-transform duration-500 hover:scale-110">
//           <div className="text-white text-xs font-black tracking-tighter flex flex-col items-center leading-none">
//             <span>R</span><span>R</span>
//           </div>
//         </div>

//         {/* Floating PayPal Upcoming Payment Pill */}
//         <div className="absolute left-[5%] sm:left-[15%] lg:-left-4 bottom-4 bg-white rounded-2xl p-3.5 pr-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 z-20 flex items-center gap-3 animate-bounce [animation-duration:3s]">
//           <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-black text-xs flex items-center justify-center shrink-0">
//             P
//           </div>
//           <div className="min-w-0">
//             <p className="text-[10px] font-bold text-slate-400 tracking-wide leading-none">Upcoming Payment In...</p>
//             <p className="text-xs font-extrabold text-slate-800 mt-1">14 Days - $79.99</p>
//           </div>
//         </div>

//       </div>

//       {/* RIGHT: TEXT WRAPPER COLUMN */}
//       <div className="lg:col-span-6 space-y-5 lg:pl-8 text-left" data-aos="fade-left">
//         <div>
//           <span className="inline-block bg-sky-50 text-sky-500 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
//             Actually Fee Free
//           </span>
//         </div>

//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
//           Fee-Free Forever
//         </h2>

//         <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
//           We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved.
//         </p>
//       </div>

//     </section>
//   );
// }
