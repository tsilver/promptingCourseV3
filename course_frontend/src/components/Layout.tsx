import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import aixLogo from '@/images/aix_logo.png';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'Prompting for Educators' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`${title} | Course`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-navy text-white h-16">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <div className="h-24 w-24 relative">
                <Image
                  src={aixLogo}
                  alt="AIxponential Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col ml-4">
                <span className="text-sm">
                  <span className="text-teal font-medium">presents:</span> 
                </span>
                <span className="text-xl font-bold">
                  Prompting for Educators
                </span>
              </div>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><Link href="/course" className="hover:text-teal transition">Course</Link></li>
                <li><Link href="/resources" className="hover:text-teal transition">Resources</Link></li>
                <li><Link href="/about" className="hover:text-teal transition">About</Link></li>
              </ul>
            </nav>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-light py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-slate text-sm">
                © {new Date().getFullYear()} <a href="http://aixponential.org" className="text-teal hover:text-teal-600 transition" target="_blank" rel="noopener noreferrer">AIxponential</a>
              </p>
              <p className="text-slate text-xs mt-1">
                This work is licensed under a{' '}
                <a 
                  href="https://creativecommons.org/licenses/by-nc-nd/4.0/" 
                  className="text-teal hover:text-teal-600 transition" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
                </a>
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-slate hover:text-teal transition">Terms</a>
              <a href="#" className="text-slate hover:text-teal transition">Privacy</a>
              <a href="#" className="text-slate hover:text-teal transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 