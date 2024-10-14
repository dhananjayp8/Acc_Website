
import React from 'react';
import mock from '../assets/mocktest.png';
import studymaterials from '../assets/study.png';
import guidance from '../assets/guidance.png';
import sessions from '../assets/sessions.png';

const Course = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-4">Exam Preparation</h1>
            <p className="text-center text-gray-600 mb-12">Courses designed for 12th and engineering students' success.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                    <img src={mock} alt="Mock Tests" className="rounded-lg mb-4 w-[300px] h-[200px]" />
                    <h2 className="text-xl font-medium">Mock Tests <i className="fas fa-arrow-right"></i></h2>
                    <p className="text-gray-600 text-center">Practice with real exam simulations for better results.</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={studymaterials} alt="Study Materials" className="rounded-lg mb-4 w-[300px] h-[200px]" />
                    <h2 className="text-xl font-medium">Study Materials <i className="fas fa-arrow-right"></i></h2>
                    <p className="text-gray-600 text-center">Comprehensive resources for effective competitive exam preparation.</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={guidance} alt="Expert Guidance" className="rounded-lg mb-4 w-[300px] h-[200px]" />
                    <h2 className="text-xl font-medium">Expert Guidance <i className="fas fa-arrow-right"></i></h2>
                    <p className="text-gray-600 text-center">Learn from experienced educators and industry experts.</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={sessions} alt="Interactive Sessions" className="rounded-lg mb-4 w-[300px] h-[200px]" />
                    <h2 className="text-xl font-medium">Interactive Sessions <i className="fas fa-arrow-right"></i></h2>
                    <p className="text-gray-600 text-center">Engaging classes to enhance understanding and retention.</p>
                </div>
            </div>
        </div>
    );
};

export default Course;
