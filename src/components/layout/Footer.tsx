import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Santa_Clara_County_Seal.png" alt="Santa Clara County Seal" className="h-8 w-8 mr-2" />
              <span className="text-sm font-semibold">Santa Clara County</span>
            </div>
            <p className="text-xs mt-1">
              Homeless Prediction & Prevention System
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs">
              &copy; {currentYear} Santa Clara County. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end mt-2 space-x-4">
              <a href="#" className="text-xs hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-xs hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-xs hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;