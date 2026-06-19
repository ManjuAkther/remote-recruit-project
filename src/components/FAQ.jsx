//import React, { useState } from 'react';
import { useState } from "react";
export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Do I have to sign a long-term contract?",
      a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr"
    },
    {
      q: "Can I pay for a whole year upfront?",
      a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr"
    },
    {
      q: "What if I need help setting up my profile?",
      a:"Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr"
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Common Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-6 py-4 font-semibold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-xl text-slate-400">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// const FAQ = () => {
//     return (
//         <section className="p-10">
//       <h2 className="text-3xl text-center mb-6">
//         Common Questions
//       </h2>

//       <div className="space-y-4">
//         <div>
//           <h4 className="font-semibold">
//             Do I have to sign a long-term contract?
//           </h4>
//           <p className="text-gray-500">
//             No, you can cancel anytime.
//           </p>
//         </div>
//       </div>
//     </section>
//     );
// };

// export default FAQ;