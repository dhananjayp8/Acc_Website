

// import React from 'react';

// function Contact() {
//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-start space-x-0 md:space-x-16">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <h1 className="text-4xl font-bold mb-4">Contact Apna Competitive Corner</h1>
//               <p className="text-gray-600 mb-6">
//                 For inquiries related to exam preparation, connect with us easily through the provided contact options.
//               </p>
//               <div className="mb-4">
//                 <h2 className="font-bold">Get in Touch</h2>
//                 <p>8308767109</p>
//               </div>
//               <div>
//                 <h2 className="font-bold">Support</h2>
//                 <p>contact@apnacompetitivecorner.com</p>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <form className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700">Enter your first name</label>
//                   <input
//                     type="text"
//                     placeholder="Your first name here"
//                     className="w-full border border-gray-300 rounded p-2"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Provide your email address*</label>
//                   <input
//                     type="email"
//                     placeholder="Your email address here"
//                     className="w-full border border-gray-300 rounded p-2"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Your message or query*</label>
//                   <textarea
//                     placeholder="Type your message here"
//                     className="w-full border border-gray-300 rounded p-2 h-24"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="text-white rounded px-4 py-2"
//                   style={{ backgroundColor: '#457b9d', borderRadius: '20px' }}
//                 >
//                   Submit your information now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center items-center h-screen bg-white p-4">
//         <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
//           <div className="max-w-md">
//             <h1 className="text-4xl font-bold text-black mb-2">Contact Us</h1>
//             <p className="text-lg text-gray-700 mb-4">
//               Reach out to us for any inquiries regarding our competitive exam preparation resources for 12th and engineering students.
//             </p>
//             <div className="mb-4">
//               <h2 className="text-lg font-bold text-black">Location</h2>
//               <p className="text-lg text-gray-700">Ahilyanagar, Maharashtra, India</p>
//             </div>
//             <div>
//               <h2 className="text-lg font-bold text-black">Hours</h2>
//               <p className="text-lg text-gray-700">9 AM - 5 PM</p>
//             </div>
//           </div>
//           <div>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.182217274204!2d-72.5320196845445!3d42.1014839792066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e7b1b1b1b1b1%3A0x89e6e7b1b1b1b1b1!2sHilltop%20St%2C%20Springfield%2C%20MA%2001128%2C%20USA!5e0!3m2!1sen!2sin!4v1633024800000!5m2!1sen!2sin"
//               width="400"
//               height="300"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               title="Google Map"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;



import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto p-8 mt-8 mb-16"> {/* Added mt-8 for top margin */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32">
                <div className="md:w-1/2 mb-8 md:mb-0 md:mr-16">
                    <h1 className="text-3xl font-bold mb-4">Contact Apna Competitive Corner</h1>
                    <p className="mb-4">For inquiries related to exam preparation, connect with us easily through the provided contact options.</p>
                    <div className="mb-4">
                        <h2 className="font-bold">Get in Touch</h2>
                        <p>8308767109</p>
                    </div>
                    <div>
                        <h2 className="font-bold">Support</h2>
                        <p>contact@apnacompetitivecorner.com</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="firstName">Enter your first name</label>
                            <input className="w-full border border-gray-300 p-2 rounded" type="text" id="firstName" placeholder="Your first name here" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="email">Provide your email address*</label>
                            <input className="w-full border border-gray-300 p-2 rounded" type="email" id="email" placeholder="Your email address here" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="message">Your message or query*</label>
                            <textarea className="w-full border border-gray-300 p-2 rounded" id="message" placeholder="Type your message here"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="text-white rounded px-4 py-2"
                            style={{ backgroundColor: '#457b9d', borderRadius: '20px' }}
                        >
                            Submit your information now
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:mr-16">
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <p className="mb-4">Reach out to us for any inquiries regarding our competitive exam preparation resources for 12th and engineering students.</p>
                    <div className="mb-4">
                        <h2 className="font-bold">Location</h2>
                        <p>Ahilyanagar, Maharashtra, India</p>
                    </div>
                    <div>
                        <h2 className="font-bold">Hours</h2>
                        <p>9 AM - 5 PM</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.4194154846813!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sHilltop%20St%2C%20Springfield%2C%20MA%2001128%2C%20USA!5e0!3m2!1sen!2sin!4v1633024800000!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
