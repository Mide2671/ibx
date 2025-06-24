import React from "react";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">IBX</h3>
          <p className="text-sm text-gray-400">
            Streetwear meets confidence. Curated looks for bold souls.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/shop" className="hover:text-orange-500 transition">
                Shop
              </a>
            </li>
            <li>
              <a
                href="/collections"
                className="hover:text-orange-500 transition"
              >
                Collections
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-orange-500 transition">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Help / Policies */}
        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/shipping" className="hover:text-orange-500 transition">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-orange-500 transition">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-orange-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-orange-500 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <div className="flex gap-4 mt-2 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} IBX Wear. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
