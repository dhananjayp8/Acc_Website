

// import React, { useState } from "react";

// const Resource = () => {
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100 px-4 md:px-16 py-8">
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//                 <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                     <img 
//                         src="https://placehold.co/400x300" 
//                         alt="Bay leaves and dried red chilies on a wooden surface" 
//                         className="w-full h-64 object-cover" 
//                     />
//                     <div className="p-4">
//                         <h2 className="text-lg font-bold">Mastering Competitive Exams: Strategies for 12th and Engineering Students</h2>
//                         <p className="text-sm mt-2">
//                             Welcome to Apna Competitive Corner, an educational platform dedicated to helping 12th and engineering students excel in competitive exam preparation. Discover effective study techniques, resource materials, and tips to stay motivated on your journey to success. Unlock your potential and achieve your academic goals with our expert guidance.
//                         </p>
//                         <p className="text-xs text-gray-500 mt-2">5/8/2024 · 1 min read</p>
//                     </div>
//                 </div>
//                 <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                     <img 
//                         src="https://placehold.co/400x300" 
//                         alt="A jar filled with white rice on a wooden surface" 
//                         className="w-full h-64 object-cover" 
//                     />
//                     <div className="p-4">
//                         <h2 className="text-lg font-bold">Mastering Competitive Exams: Strategies for 12th and Engineering Students</h2>
//                         <p className="text-sm mt-2">
//                             Explore effective preparation techniques for competitive exams tailored for 12th and engineering students. Our educational platform offers resources, tips, and guidance to help you excel in your studies and achieve your academic goals. Join us to unlock your potential and succeed in your competitive journey.
//                         </p>
//                         <p className="text-xs text-gray-500 mt-2">5/8/2024 · 1 min read</p>
//                     </div>
//                 </div>
//             </div>
//             {showMore && (
//                 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
//                     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                         <img 
//                             src="https://placehold.co/400x300" 
//                             alt="Books and a cup of coffee on a table" 
//                             className="w-full h-64 object-cover" 
//                         />
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold">Effective Study Techniques for Competitive Exams</h2>
//                             <p className="text-sm mt-2">
//                                 Learn about various study techniques that can help you prepare effectively for competitive exams. From time management to active learning strategies, discover methods that can enhance your study sessions and improve your retention.
//                             </p>
//                             <p className="text-xs text-gray-500 mt-2">5/8/2024 · 2 min read</p>
//                         </div>
//                     </div>
//                     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                         <img 
//                             src="https://placehold.co/400x300" 
//                             alt="A person writing notes in a notebook" 
//                             className="w-full h-64 object-cover" 
//                         />
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold">Resource Materials for Competitive Exam Preparation</h2>
//                             <p className="text-sm mt-2">
//                                 Access a variety of resource materials that can aid in your competitive exam preparation. From textbooks to online courses, find the best resources that suit your learning style and help you cover the syllabus comprehensively.
//                             </p>
//                             <p className="text-xs text-gray-500 mt-2">5/8/2024 · 2 min read</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             <button 
//                 onClick={() => setShowMore(!showMore)} 
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
//                 {showMore ? 'Show Less' : 'Show More'}
//             </button>
//         </div>
//     );
// };

// export default Resource;


// import React, { useState } from "react";
// import bgimage from '../assets/bgresource.png';
// import mocktest from '../assets/mock.png';
// import sessions from '../assets/sessions.png';

// const Resource = () => {
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <div className="relative flex flex-col justify-center items-center min-h-screen p-6"
//              style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//             {/* Background overlay to ensure readability */}
//             <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

//             {/* Content container with z-index to overlay on background */}
//             <div className="relative z-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full max-w-5xl">
//                 {/* First Block */}
//                 <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300 ease-out">
//                     <img
//                         src={mocktest}
//                         alt="Bay leaves and dried red chilies on a wooden surface"
//                         className="w-full h-[200px] object-cover"
//                     />
//                     <div className="p-4">
//                         <h2 className="text-lg font-bold">
//                             Mastering Competitive Exams: Strategies for 12th and Engineering Students
//                         </h2>
//                         <p className="text-sm mt-2">
//                             Welcome to Apna Competitive Corner, an educational platform dedicated to helping 12th and engineering students excel in competitive exam preparation. Discover effective study techniques, resource materials, and tips to stay motivated on your journey to success.
//                         </p>
//                         <p className="text-xs text-gray-500 mt-2">5/8/2024 · 1 min read</p>
//                     </div>
//                 </div>

//                 {/* Second Block */}
//                 <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300 ease-out">
//                     <img
//                         src={sessions}
//                         alt="A jar filled with white rice on a wooden surface"
//                         className="w-full h-[200px] object-cover"
//                     />
//                     <div className="p-4">
//                         <h2 className="text-lg font-bold">
//                             Mastering Competitive Exams: Strategies for 12th and Engineering Students
//                         </h2>
//                         <p className="text-sm mt-2">
//                             Explore effective preparation techniques for competitive exams tailored for 12th and engineering students. Our educational platform offers resources, tips, and guidance to help you excel in your studies and achieve your academic goals.
//                         </p>
//                         <p className="text-xs text-gray-500 mt-2">5/8/2024 · 1 min read</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Show More Section */}
//             {showMore && (
//                 <div className="relative z-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full max-w-5xl mt-6">
//                     {/* Third Block */}
//                     <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300 ease-out">
//                         <img
//                             src="https://placehold.co/300x200"
//                             alt="Books and a cup of coffee on a table"
//                             className="w-full h-[200px] object-cover"
//                         />
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold">Effective Study Techniques for Competitive Exams</h2>
//                             <p className="text-sm mt-2">
//                                 Learn about various study techniques that can help you prepare effectively for competitive exams. From time management to active learning strategies, discover methods that can enhance your study sessions.
//                             </p>
//                             <p className="text-xs text-gray-500 mt-2">5/8/2024 · 2 min read</p>
//                         </div>
//                     </div>

//                     {/* Fourth Block */}
//                     <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300 ease-out">
//                         <img
//                             src="https://placehold.co/300x200"
//                             alt="A person writing notes in a notebook"
//                             className="w-full h-[200px] object-cover"
//                         />
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold">Resource Materials for Competitive Exam Preparation</h2>
//                             <p className="text-sm mt-2">
//                                 Access a variety of resource materials that can aid in your competitive exam preparation. From textbooks to online courses, find the best resources that suit your learning style.
//                             </p>
//                             <p className="text-xs text-gray-500 mt-2">5/8/2024 · 2 min read</p>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Show More/Less Button */}
//             <button
//                 onClick={() => setShowMore(!showMore)}
//                 className="relative z-10 mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg transform hover:scale-105 transition-transform duration-300 ease-out"
//             >
//                 {showMore ? 'Show Less' : 'Show More'}
//             </button>
//         </div>
//     );
// };

// export default Resource;



// import React, { useState } from "react";
// import bgimage from '../assets/bgresource.png';
// import mocktest from '../assets/mock.png';
// import sessions from '../assets/sessions.png';

// const Resource = () => {
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <div className="relative flex flex-col justify-center items-center min-h-screen p-6"
//             style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//             {/* Background overlay to ensure readability */}
//             <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

//             {/* Content container with z-index to overlay on background */}
//             <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full max-w-5xl">
//                 {/* First Block */}
//                 <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105"
//                     style={{ height: '280px' }}>
//                     <img
//                         src={mocktest}
//                         alt="Mock Test"
//                         className="w-full h-[120px] object-cover"
//                     />
//                     <div className="p-3">
//                         <h2 className="text-md font-bold">Mastering Competitive Exams: Strategies for 12th and Engineering Students</h2>
//                         <p className="text-sm mt-1">Welcome to Apna Competitive Corner, an educational platform dedicated to helping 12th and engineering students excel in competitive exam preparation.</p>
//                         <p className="text-xs text-gray-500 mt-1">5/8/2024 · 1 min read</p>
//                     </div>
//                 </div>

//                 {/* Second Block */}
//                 <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105"
//                     style={{ height: '280px' }}>
//                     <img
//                         src={sessions}
//                         alt="Sessions"
//                         className="w-full h-[120px] object-cover"
//                     />
//                     <div className="p-3">
//                         <h2 className="text-md font-bold">Mastering Competitive Exams: Strategies for 12th and Engineering Students</h2>
//                         <p className="text-sm mt-1">Explore effective preparation techniques for competitive exams tailored for 12th and engineering students. Resources, tips, and guidance to help you excel.</p>
//                         <p className="text-xs text-gray-500 mt-1">5/8/2024 · 1 min read</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Show More Section */}
//             {showMore && (
//                 <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full max-w-5xl mt-4">
//                     {/* Third Block */}
//                     <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105"
//                         style={{ height: '280px' }}>
//                         <img
//                             src="https://placehold.co/300x120"
//                             alt="Books and a cup of coffee"
//                             className="w-full h-[120px] object-cover"
//                         />
//                         <div className="p-3">
//                             <h2 className="text-md font-bold">Effective Study Techniques for Competitive Exams</h2>
//                             <p className="text-sm mt-1">Learn about various study techniques to help you prepare effectively for competitive exams. Time management and active learning strategies.</p>
//                             <p className="text-xs text-gray-500 mt-1">5/8/2024 · 2 min read</p>
//                         </div>
//                     </div>

//                     {/* Fourth Block */}
//                     <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105"
//                         style={{ height: '280px' }}>
//                         <img
//                             src="https://placehold.co/300x120"
//                             alt="Person writing notes"
//                             className="w-full h-[120px] object-cover"
//                         />
//                         <div className="p-3">
//                             <h2 className="text-md font-bold">Resource Materials for Competitive Exam Preparation</h2>
//                             <p className="text-sm mt-1">Access various resource materials for competitive exam preparation. From textbooks to online courses, find the best learning resources.</p>
//                             <p className="text-xs text-gray-500 mt-1">5/8/2024 · 2 min read</p>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Show More/Less Button */}
//             <button
//                 onClick={() => setShowMore(!showMore)}
//                 className="relative z-10 mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors duration-300 hover:bg-blue-600"
//             >
//                 {showMore ? 'Show Less' : 'Show More'}
//             </button>
//         </div>
//     );
// };

// export default Resource;




import React, { useState } from "react";
import bgimage from '../assets/bgresource.png';
import mocktest from '../assets/mock.png';
import sessions from '../assets/sessions.png';

const Resource = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div
            className="relative flex flex-col justify-center items-center min-h-screen p-6"
            style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Background overlay for readability */}
            <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

            {/* Main content container */}
            <div className="relative z-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-24 w-full max-w-5xl mt-4">
                {/* First Block */}
                <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 hover:shadow-xl transition duration-300 transform hover:scale-105">
                    <img
                        src={mocktest}
                        alt="Mock Test"
                        className="w-full h-[180px] object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-bold">
                            Mastering Competitive Exams: Strategies for 12th and Engineering Students
                        </h2>
                        <p className="text-sm mt-2">
                            Welcome to Apna Competitive Corner, an educational platform dedicated to helping 12th and engineering students excel in competitive exam preparation. Discover effective study techniques, resource materials, and tips to stay motivated on your journey to success.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">5/8/2024 · 1 min read</p>
                    </div>
                </div>

                {/* Second Block */}
                <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 hover:shadow-xl transition duration-300 transform hover:scale-105">
                    <img
                        src={sessions}
                        alt="Study Sessions"
                        className="w-full h-[180px] object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-bold">
                            Mastering Competitive Exams: Strategies for 12th and Engineering Students
                        </h2>
                        <p className="text-sm mt-2">
                            Explore effective preparation techniques for competitive exams tailored for 12th and engineering students. Our educational platform offers resources, tips, and guidance to help you excel in your studies and achieve your academic goals.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">5/8/2024 · 1 min read</p>
                    </div>
                </div>
            </div>

            {/* Show More Section */}
            {showMore && (
                <div className="relative z-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-24 w-full max-w-5xl mt-6">
                    {/* Third Block */}
                    <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <img
                            src={mocktest}
                            alt="Books and a cup of coffee on a table"
                            className="w-full h-[180px] object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Effective Study Techniques for Competitive Exams</h2>
                            <p className="text-sm mt-2">
                                Learn about various study techniques that can help you prepare effectively for competitive exams. From time management to active learning strategies, discover methods that can enhance your study sessions.
                            </p>
                            <p className="text-xs text-gray-500 mt-2">5/8/2024 · 2 min read</p>
                        </div>
                    </div>

                    {/* Fourth Block */}
                    <div className="bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <img
                            src={sessions}
                            alt="A person writing notes in a notebook"
                            className="w-full h-[180px] object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Resource Materials for Competitive Exam Preparation</h2>
                            <p className="text-sm mt-2">
                                Access a variety of resource materials that can aid in your competitive exam preparation. From textbooks to online courses, find the best resources that suit your learning style.
                            </p>
                            <p className="text-xs text-gray-500 mt-2">5/8/2024 · 2 min read</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Show More/Less Button */}
            <button
                onClick={() => setShowMore(!showMore)}
                className="relative z-10 mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

export default Resource;
