// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-blue-900 text-white py-8">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* Learn Section */}
//         <div className="mb-6 md:mb-0">
//           <h3 className="text-lg font-bold">Learn</h3>
//           <p className="text-sm mt-2">
//             Empowering students for competitive exam success.
//           </p>
//           {/* Social Icons */}
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-white hover:text-gray-400">
//               <i className="fab fa-youtube fa-lg"></i>
//             </a>
//             <a href="#" className="text-white hover:text-gray-400">
//               <i className="fab fa-instagram fa-lg"></i>
//             </a>
//             <a href="#" className="text-white hover:text-gray-400">
//               <i className="fas fa-link fa-lg"></i>
//             </a>
//             <a href="#" className="text-white hover:text-gray-400">
//               <i className="fab fa-linkedin fa-lg"></i>
//             </a>
//           </div>
//         </div>

//         {/* Achieve Section */}
//         <div className="mb-6 md:mb-0">
//           <h3 className="text-lg font-bold">Achieve</h3>
//           <p className="text-sm mt-2">+91 (830) 876 7109</p>
//           <p className="text-sm">info@apnacompetitivecorner.com</p>
//         </div>

//         {/* Excel Section */}
//         <div>
//           <h3 className="text-lg font-bold">Excel</h3>
//           <form className="mt-2">
//             <input
//               type="email"
//               placeholder="Your email for updates"
//               className="p-2 w-full md:w-auto rounded-lg bg-white text-gray-800 placeholder-gray-500"
//             />
//             <button
//               type="submit"
//               className="mt-2 md:mt-0 md:ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
//               Join our learning community
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="text-center mt-6 text-sm">
//         © 2024. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">Learn</h2>
                    <p className="mb-4">Empowering students for competitive exam success.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white text-2xl"><i className="fab fa-youtube"></i></a>
                        <a href="#" className="text-white text-2xl"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-white text-2xl"><i className="fas fa-link"></i></a>
                        <a href="#" className="text-white text-2xl"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">ACHIEVE</h2>
                    <p className="mb-2">+91 (830) 876 7109</p>
                    <p>info@apnacompetitivecorner.com</p>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">EXCEL</h2>
                    <form className="flex flex-col space-y-2">
                        <input 
                            type="email" 
                            placeholder="Your email for updates" 
                            className="p-2 rounded-md text-black" 
                        />
                        <button 
                            type="submit" 
                            className="bg-blue-600 text-white py-2 px-4 rounded-md">
                            Join our learning community
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>© 2024. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
