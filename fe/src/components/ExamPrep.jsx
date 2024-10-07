// import React from 'react';

// const ExamBlock = () => {
//     return (
//         <div className="flex flex-col items-center py-10 bg-gray-100">
//             <h1 className="text-4xl font-bold mb-2">Exam Preparation</h1>
//             <p className="text-gray-600 mb-8 text-center">Explore our resources for 12th and engineering competitive exams.</p>
//             {/* Flex wraps into a column on small screens, and remains in a row on large screens */}
//             <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 items-center">
//                 <img 
//                     src="https://placehold.co/200x300" 
//                     alt="A blue and black polo shirt with a logo" 
//                     className="rounded-lg shadow-lg" 
//                 />
//                 <img 
//                     src="https://placehold.co/200x300" 
//                     alt="Logo of Maharashtra Common Entrance Test" 
//                     className="rounded-lg shadow-lg" 
//                 />
//                 <img 
//                     src="https://placehold.co/200x300" 
//                     alt="A shield logo with various symbols" 
//                     className="rounded-lg shadow-lg" 
//                 />
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                     <div className="flex items-center mb-4">
//                         <img 
//                             src="https://placehold.co/40x40" 
//                             alt="Logo" 
//                             className="w-10 h-10 rounded-full mr-2" 
//                         />
//                         <div>
//                             <h2 className="text-lg font-semibold">Narayan Ghanwat</h2>
//                         </div>
//                     </div>
//                     <img 
//                         src="https://placehold.co/200x200" 
//                         alt="QR code for payment" 
//                         className="mb-2" 
//                     />
//                     <p className="text-gray-600">UPI ID: ghanwatnarayan5-2@oksbi</p>
//                     <p className="text-gray-600">Amount: ₹1.00</p>
//                     <p className="text-gray-600">Scan to pay with any UPI app</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExamBlock;
import React from 'react';
import logo from '../assets/logo.png';
import tshirt from '../assets/t-shirt.png';
import cet from '../assets/mhtcet.png';
import payment from '../assets/payment.png';

const ExamBlock = () => {
    return (
        <div className="flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold mb-2">Exam Preparation</h1>
            <p className="text-gray-600 mb-8">Explore our resources for 12th and engineering competitive exams.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <img 
                    src={tshirt} 
                    alt="A blue and black polo shirt with a logo" 
                    className="rounded-lg shadow-lg" 
                    style={{ width: '200px', height: '300px', objectFit: 'cover' }} 
                />
                <img 
                    src={cet} 
                    alt="Logo of Maharashtra Common Entrance Test" 
                    className="rounded-lg shadow-lg" 
                    style={{ width: '200px', height: '300px', objectFit: 'cover' }} 
                />
                <img 
                    src={logo} 
                    alt="A shield logo with various symbols" 
                    className="rounded-lg shadow-lg" 
                    style={{ width: '200px', height: '300px', objectFit: 'cover' }} 
                />
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg" style={{ width: '200px', height: '300px' }}>
                    <div className="flex items-center mb-2">
                        <img 
                            src={payment} 
                            alt="QR code for payment" 
                            className="mr-2" 
                            style={{ width: '100%', height: 'auto' }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamBlock;
