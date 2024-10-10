import React from 'react';

function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Contact Apna Competitive Corner</h1>
            <p className="text-gray-600 mb-6">
              For inquiries related to exam preparation, connect with us easily through the provided contact options.
            </p>
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
                <label className="block text-gray-700">Enter your first name</label>
                <input
                  type="text"
                  placeholder="Your first name here"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Provide your email address*</label>
                <input
                  type="email"
                  placeholder="Your email address here"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Your message or query*</label>
                <textarea
                  placeholder="Type your message here"
                  className="w-full border border-gray-300 rounded p-2 h-24"
                ></textarea>
              </div>
              {/* Apply custom color style */}
              <button
                type="submit"
                className="text-white rounded px-4 py-2"
                style={{ backgroundColor: '#457b9d' }}
              >
                Submit your information now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
