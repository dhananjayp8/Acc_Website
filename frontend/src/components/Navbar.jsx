
// import React, { useState } from "react";
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons
// import logo from '../assets/logo.png';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between p-4">
//       <div className="flex items-center">
//         <img
//           src={logo}
//           alt="Logo with a shield containing a book, a graduation cap, and a letter S"
//           className="h-12 w-12"
//         />
//       </div>
//       {/* Increase space between items and increase font size */}
//       <div className="flex items-center space-x-12 hidden md:flex">
//         <Link to="/" className="text-black hover:underline text-xl">
//           Home
//         </Link>
//         <Link to="/course" className="text-black hover:underline text-xl">
//           Courses
//         </Link>
//         <a href="#" className="text-black hover:underline text-xl">
//           Resources
//         </a>
//         {/* <a href="#" className="text-black hover:underline text-xl">
//           Contact
//         </a> */}
//         <Link to="/contact-us" className="block text-black mb-2 text-xl">
//             Contact
//           </Link>
//         <a href="#" className="text-black hover:underline text-xl">
//           Store
//         </a>
//         <i className="fas fa-shopping-bag text-black">
//           <span className="ml-1 text-black">(0)</span>
//         </i>
//       </div>
//       <div className="flex items-center md:hidden">
//         <i className="fas fa-shopping-bag text-black"></i>
//         <span className="ml-1 text-black">(0)</span>
//         <span className="ml-4 text-black cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
//           <i className="fas fa-bars"></i>
//         </span>
//       </div>
//       {isOpen && (
//         <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 md:hidden">
//           <Link to="/" className="block text-black mb-2 text-xl">
//             Home
//           </Link>
//           <Link to="/course" className="block text-black mb-2 text-xl">
//             Courses
//           </Link>
//           <a href="#" className="block text-black mb-2 text-xl">
//             Resources
//           </a>
//           <Link to="/contact-us" className="block text-black mb-2 text-xl">
//             Contact
//           </Link>
//           {/* <a href="#" className="block text-black mb-2 text-xl">
//             Contact
//           </a> */}
//           <a href="#" className="block text-black text-xl">
//             Store
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo with a shield containing a book, a graduation cap, and a letter S"
          className="h-12 w-12"
        />
      </div>
      {/* Increase space between items and increase font size */}
      <div className="flex items-center space-x-8 hidden md:flex"> {/* Adjusted space-x to 8 */}
        <Link to="/" className="text-black hover:underline text-xl">
          Home
        </Link>
        <Link to="/course" className="text-black hover:underline text-xl">
          Courses
        </Link>
        <a href="#" className="text-black hover:underline text-xl">
          Resources
        </a>
        <Link to="/contact-us" className="text-black hover:underline text-xl">
          Contact
        </Link>
        <a href="#" className="text-black hover:underline text-xl">
          Store
        </a>
        <i className="fas fa-shopping-bag text-black">
          <span className="ml-1 text-black">(0)</span>
        </i>
      </div>
      <div className="flex items-center md:hidden">
        <i className="fas fa-shopping-bag text-black"></i>
        <span className="ml-1 text-black">(0)</span>
        <span className="ml-4 text-black cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 md:hidden">
          <Link to="/" className="block text-black mb-2 text-xl">
            Home
          </Link>
          <Link to="/course" className="block text-black mb-2 text-xl">
            Courses
          </Link>
          <a href="#" className="block text-black mb-2 text-xl">
            Resources
          </a>
          <Link to="/contact-us" className="block text-black mb-2 text-xl">
            Contact
          </Link>
          <a href="#" className="block text-black mb-2 text-xl">
            Store
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
