// import React from 'react'

// export default function Contact() {
//     return (
//         <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
//             <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
//                 <div className="mt-8 overflow-hidden">
//                     <div className="grid grid-cols-1 md:grid-cols-2">
//                         <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
//                             <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
//                                 Get in touch: 
//                             </h1>
//                             <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
//                                 Fill in the form to start a conversation
//                             </p>

//                             <div className="flex items-center mt-8 text-gray-600">
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     stroke-width="1.5"
//                                     viewBox="0 0 24 24"
//                                     className="w-8 h-8 text-gray-500"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                                     />
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                                     />
//                                 </svg>
//                                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                     Shyamnagar, West Bengal, 743127
//                                 </div>
//                             </div>

//                             <div className="flex items-center mt-4 text-gray-600">
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     stroke-width="1.5"
//                                     viewBox="0 0 24 24"
//                                     className="w-8 h-8 text-gray-500"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                                     />
//                                 </svg>
//                                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                     +91 9330432085
//                                 </div>
//                             </div>

//                             <div className="flex items-center mt-2 text-gray-600">
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     stroke-width="1.5"
//                                     viewBox="0 0 24 24"
//                                     className="w-8 h-8 text-gray-500"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                     />
//                                 </svg>
//                                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                     ts@solution.org
//                                 </div>
//                             </div>
//                         </div>

//                         <form className="p-6 flex flex-col justify-center">
//                             <div className="flex flex-col">
//                                 <label for="name" className="hidden">
//                                     Full Name
//                                 </label>
//                                 <input
//                                     type="name"
//                                     name="name"
//                                     id="name"
//                                     placeholder="Full Name"
//                                     className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                                 />
//                             </div>

//                             <div className="flex flex-col mt-2">
//                                 <label for="email" className="hidden">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     id="email"
//                                     placeholder="Email"
//                                     className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                                 />
//                             </div>

//                             <div className="flex flex-col mt-2">
//                                 <label for="tel" className="hidden">
//                                     Number
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="tel"
//                                     id="tel"
//                                     placeholder="Telephone Number"
//                                     className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
//                             >
//                                 Submit
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Contact Info Panel */}
        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6 border border-white/20">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-700 text-lg">
            Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Shyamnagar, West Bengal, 743127</span>
            </div>

            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.516l1.13-2.257a1 1 0 011.21-.502l4.49 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9330432085</span>
            </div>

            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>ts@solution.org</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Send a Message</h2>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}