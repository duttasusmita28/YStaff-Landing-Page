import React from "react";
import { SlSocialTwitter, SlSocialInstagram, SlSocialLinkedin} from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">YStaff</h2>
          <p className="text-gray-500">
            Your modern HR management partner — simplifying employee
            management with speed and clarity.
          </p>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Product</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-gray-800 cursor-pointer">Features</a></li>
            <li><a className="hover:text-gray-800 cursor-pointer">Pricing</a></li>
            <li><a className="hover:text-gray-800 cursor-pointer">Use Cases</a></li>
            <li><a className="hover:text-gray-800 cursor-pointer">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-gray-800 cursor-pointer">About Us</a></li>
            <li><a className="hover:text-gray-800 cursor-pointer">Careers</a></li>
            <li><a className="hover:text-gray-800 cursor-pointer">Blog</a></li>
            <li><a className="hover:text-gray-800 cursor-pointer">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-gray-800 cursor-pointer">Documentation</a></li>
            <li><a className="hover:text-gray-800 cursor-pointer">Guides</a></li>
            <li><a className="hover:text-gray-800 cursor-pointer">Support</a></li>
            <li><a className="hover:text-gray-800 cursor-pointer">API Docs</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t mt-8">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 YStaff — All Rights Reserved.
          </p>

          <div className="flex space-x-3 mt-2 sm:mt-0">
            <a>
              <SlSocialTwitter className="text-gray-500 text-shadow-md"/>
            </a>
            <a>
              <SlSocialInstagram className="text-gray-500 text-shadow-md"/>
            </a>
            <a>
              <SlSocialLinkedin className="text-gray-500 text-shadow-md"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
