"use client";

import Link from "next/link";
import { useState } from "react";

// Footer navigation items
const footerNavItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

// Social links
const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", icon: "𝕏" },
  { href: "https://github.com", label: "GitHub", icon: "⚡" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "in" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <footer className="border-t border-(--border) bg-(--bg-primary)">
      <div className="container px-4 mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-(--accent) rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-(--text-primary)">
                BlogSpace
              </span>
            </div>
            <p className="text-(--text-secondary) mb-6 max-w-xs">
              A modern blogging platform for sharing ideas, stories, and knowledge with the world.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-(--border) rounded-md flex items-center justify-center text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-colors"
                  aria-label={social.label}
                >
                  <span className="font-semibold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-(--text-primary) mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerNavItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-(--text-secondary) hover:text-(--accent) transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-(--text-primary) mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              {["Technology", "Lifestyle", "Travel", "Productivity", "Health"].map((category, index) => (
                <li key={index}>
                  <a
                    href={`/blog/category/${category.toLowerCase()}`}
                    className="text-(--text-secondary) hover:text-(--accent) transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-(--text-primary) mb-4">
              Newsletter
            </h3>
            <p className="text-(--text-secondary) mb-4">
              Subscribe to get the latest posts and updates directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-(--border) rounded-md bg-(--bg-primary) text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-(--accent) transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-(--accent) text-white py-2 px-4 rounded-md hover:bg-(--accent-hover) transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-(--border) mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-(--text-secondary) text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BlogSpace. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="/privacy"
              className="text-(--text-secondary) hover:text-(--accent) transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-(--text-secondary) hover:text-(--accent) transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-(--text-secondary) hover:text-(--accent) transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}