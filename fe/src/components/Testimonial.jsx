// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import profile1 from '../assets/logo.png'; // Example: replace with actual image path
// import profile2 from '../assets/t-shirt.png'; // Example: replace with actual image path
// import bgImage from '../assets/testimonial.png'; // Example: replace with actual background image path

// const Testimonial = () => {
//     return (
//         <div 
//             className="relative flex flex-col md:flex-row items-center justify-center h-screen" 
//             style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//         >
//             {/* Background Overlay */}
//             <div className="absolute inset-0 bg-black opacity-50"></div>
            
//             {/* Content */}
//             <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-4">
//                 <div className="text-white text-lg font-roboto">
//                     <div className="flex items-center justify-center mb-2">
//                         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//                     </div>
//                     <p>Apna Competitive Corner helped me excel in my exams with their comprehensive study materials and guidance.</p>
//                     <div className="mt-4">
//                         <img src={profile1} alt="Profile picture of Rahul S." className="rounded-full w-12 h-12 mx-auto mb-2" />
//                         <p>Rahul S.</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Testimonial 2 */}
//             <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-4">
//                 <div className="text-white text-lg font-roboto">
//                     <div className="flex items-center justify-center mb-2">
//                         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//                     </div>
//                     <p>The platform's resources and practice tests significantly boosted my confidence for the engineering entrance exams.</p>
//                     <div className="mt-4">
//                         <img src={profile2} alt="Profile picture of Sneha K." className="rounded-full w-12 h-12 mx-auto mb-2" />
//                         <p>Sneha K.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Testimonial;
import React from 'react';
import { FaStar } from 'react-icons/fa';
import profile1 from '../assets/logo.png'; // Example: replace with actual image path
import profile2 from '../assets/t-shirt.png'; // Example: replace with actual image path
import bgImage from '../assets/testimonial.png'; // Example: replace with actual background image path

const Testimonial = () => {
    return (
        <div 
            className="relative flex flex-col md:flex-row items-center justify-center h-[80vh] md:h-[60vh] max-w-8xl mx-auto gap-y-4 p-4" 
            style={{ 
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: 'cover', // Ensures the image covers the area
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat' // Prevents the image from repeating
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-45"></div>

            {/* Testimonial 1 */}
            <div className="flex-1 flex flex-col items-center justify-center text-center p-4 relative z-10">
                <div className="text-white text-lg font-roboto">
                    <div className="flex items-center justify-center mb-2">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p>Apna Competitive Corner helped me excel in my exams with their comprehensive study materials and guidance.</p>
                    <div className="mt-4">
                        <img src={profile1} alt="Profile picture of Rahul S." className="rounded-full w-12 h-12 mx-auto mb-2" />
                        <p>Rahul S.</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex-1 flex flex-col items-center justify-center text-center p-4 relative z-10">
                <div className="text-white text-lg font-roboto">
                    <div className="flex items-center justify-center mb-2">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p>The platform's resources and practice tests significantly boosted my confidence for the engineering entrance exams.</p>
                    <div className="mt-4">
                        <img src={profile2} alt="Profile picture of Sneha K." className="rounded-full w-12 h-12 mx-auto mb-2" />
                        <p>Sneha K.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
