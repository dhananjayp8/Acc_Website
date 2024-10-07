import React from 'react';
import cet from '../assets/cet.png';
import mock from '../assets/mock.png';

function Services() {
  return (
    <div className="bg-teal-100">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Exam Preparation Services</h1>
        <p className="text-gray-600 mt-2">
          We provide comprehensive resources for 12th and engineering students to excel in competitive exams.
        </p>

        {/* Card Section */}
        <div className="flex flex-col md:flex-row justify-center mt-10 space-y-6 md:space-y-0 md:space-x-6">
          {/* Study Materials Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <img
              src={cet}
              alt="Logos of various educational institutions"
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Study Materials</h2>
            <p className="text-gray-600 mt-2">
              Access curated study materials designed to enhance your understanding and boost your performance in exams.
            </p>
          </div>

          {/* Mock Tests Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <img
              src={mock}
              alt="MHT-CET 2024 Mock Test Online Batch banner"
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Mock Tests</h2>
            <p className="text-gray-600 mt-2">
              Experience realistic exam conditions with our extensive range of mock tests tailored for your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
