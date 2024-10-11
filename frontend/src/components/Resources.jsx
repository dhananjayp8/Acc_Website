// import React, { useState } from "react";

// const Resource = () => {
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100">
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//                 <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                     <img 
//                         src="https://placehold.co/600x400" 
//                         alt="Bay leaves and dried red chilies on a wooden surface" 
//                         className="w-full h-48 object-cover" 
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
//                         src="https://placehold.co/600x400" 
//                         alt="A jar filled with white rice on a wooden surface" 
//                         className="w-full h-48 object-cover" 
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
//                             src="https://placehold.co/600x400" 
//                             alt="Books and a cup of coffee on a table" 
//                             className="w-full h-48 object-cover" 
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
//                             src="https://placehold.co/600x400" 
//                             alt="A person writing notes in a notebook" 
//                             className="w-full h-48 object-cover" 
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

import React, { useState } from "react";

const Resource = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100 px-4 md:px-16 py-8">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img 
                        src="https://placehold.co/400x300" 
                        alt="Bay leaves and dried red chilies on a wooden surface" 
                        className="w-full h-64 object-cover" 
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-bold">Mastering Competitive Exams: Strategies for 12th and Engineering Students</h2>
                        <p className="text-sm mt-2">
                            Welcome to Apna Competitive Corner, an educational platform dedicated to helping 12th and engineering students excel in competitive exam preparation. Discover effective study techniques, resource materials, and tips to stay motivated on your journey to success. Unlock your potential and achieve your academic goals with our expert guidance.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">5/8/2024 · 1 min read</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img 
                        src="https://placehold.co/400x300" 
                        alt="A jar filled with white rice on a wooden surface" 
                        className="w-full h-64 object-cover" 
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-bold">Mastering Competitive Exams: Strategies for 12th and Engineering Students</h2>
                        <p className="text-sm mt-2">
                            Explore effective preparation techniques for competitive exams tailored for 12th and engineering students. Our educational platform offers resources, tips, and guidance to help you excel in your studies and achieve your academic goals. Join us to unlock your potential and succeed in your competitive journey.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">5/8/2024 · 1 min read</p>
                    </div>
                </div>
            </div>
            {showMore && (
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img 
                            src="https://placehold.co/400x300" 
                            alt="Books and a cup of coffee on a table" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Effective Study Techniques for Competitive Exams</h2>
                            <p className="text-sm mt-2">
                                Learn about various study techniques that can help you prepare effectively for competitive exams. From time management to active learning strategies, discover methods that can enhance your study sessions and improve your retention.
                            </p>
                            <p className="text-xs text-gray-500 mt-2">5/8/2024 · 2 min read</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img 
                            src="https://placehold.co/400x300" 
                            alt="A person writing notes in a notebook" 
                            className="w-full h-64 object-cover" 
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Resource Materials for Competitive Exam Preparation</h2>
                            <p className="text-sm mt-2">
                                Access a variety of resource materials that can aid in your competitive exam preparation. From textbooks to online courses, find the best resources that suit your learning style and help you cover the syllabus comprehensively.
                            </p>
                            <p className="text-xs text-gray-500 mt-2">5/8/2024 · 2 min read</p>
                        </div>
                    </div>
                </div>
            )}
            <button 
                onClick={() => setShowMore(!showMore)} 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

export default Resource;
