// src/components/Trademarks.jsx
import React from 'react';
import { FaFilter, FaCamera } from 'react-icons/fa';

const Trademarks = ({ trademarks = [] }) => {
  return (
    <div className="relative mt-32 p-4">
      {/* Decorative Line */}
      <div className="absolute top-[117.61px] left-1 w-[1440px] h-[6px] bg-[#EAF1FF]"></div>

      {/* Main Content */}
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              About {trademarks.length} Trademarks found for “nike”
            </h3>
            <p className="text-sm text-gray-600">
              Also try searching for:{' '}
              <span className="text-orange-500">nike*</span>,{' '}
              <span className="text-orange-500">*ike</span>
            </p>
          </div>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded flex items-center">
            <FaFilter className="mr-2" /> Filters
          </button>
        </div>
      </div>

      {trademarks.map((trademark, index) => (
        <div key={index} className="mt-4 bg-white p-4 rounded shadow">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={trademark.imageUrl || 'https://via.placeholder.com/100'}
                alt="Trademark"
                className="w-20 h-20"
              />
              <FaCamera className="absolute right-0 bottom-0 text-gray-500 bg-white rounded-full p-1" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">{trademark.name}</h4>
              <p className="text-sm text-gray-600">{trademark.company}</p>
              <p className="text-sm text-gray-600">
                {trademark.serialNumber} | {trademark.filingDate}
              </p>
            </div>
            <div className="ml-auto">
              <span
                className={`text-${
                  trademark.status === 'Live/Registered'
                    ? 'green-500'
                    : 'red-500'
                } font-semibold`}
              >
                {trademark.status}
              </span>
              <p className="text-sm text-gray-600">on {trademark.statusDate}</p>
              <p className="text-sm text-gray-600">{trademark.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trademarks;
