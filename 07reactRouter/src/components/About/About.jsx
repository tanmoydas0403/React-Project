// import React from 'react'

// export default function About() {
//   return (
//       <div className="py-16 bg-white">
//           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//               <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//                   <div className="md:5/12 lg:w-5/12">
//                       <img
//                           src="./src/tanmoy.png"
//                           alt="image"
//                       />
//                   </div>
//                   <div className="md:7/12 lg:w-6/12">
//                       <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//                           Building Scalable Solutions with Passion
//                       </h2>
//                       <p className="mt-6 text-gray-600">
//                           TANMOY SOLUTION is a forward-thinking tech company committed to delivering innovative, 
//                           scalable, and reliable digital solutions. We specialize in software development, cloud services, 
//                           AI-powered applications, and IT consulting, helping businesses adapt and thrive in a 
//                           fast-changing digital world. Our team combines technical expertise with creative problem-solving 
//                           to design solutions that are secure, efficient, and user-friendly.
//                       </p>
//                       <p className="mt-4 text-gray-600">
//                           With a strong focus on quality and client success, we strive to build long-term partnerships 
//                           that create measurable value. At TANMOY SOLUTION, our mission is clear—to innovate, transform, 
//                           and empower organizations through technology.
//                       </p>
//                   </div>
//               </div>
//           </div>
//       </div>
//   );
// }

import React from 'react';

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Building Scalable Solutions with Passion
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            <span className="font-semibold text-orange-700">TANMOY SOLUTION</span> is a forward-thinking tech company committed to delivering innovative, scalable, and reliable digital solutions. We specialize in software development, cloud services, AI-powered applications, and IT consulting.
          </p>
          <p className="text-gray-700 text-lg">
            Our mission is clear — to innovate, transform, and empower organizations through technology. We build long-term partnerships that create measurable value.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-xl bg-white/30 backdrop-blur-md border border-white/20">
            <img
              src=".src/tanmoy.png"
              alt="Founder Tanmoy"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}