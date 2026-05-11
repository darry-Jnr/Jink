import React from 'react';
import { Store, User } from 'lucide-react';
import Logo from '../ui/Logo';

const TopBar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center">
          <Logo variant="black" />
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-2">

          {/* Become a Seller */}
          <a
            href="https://business.thejink.store"
            aria-label="Become a Seller"
            className="flex items-center gap-2 bg-gray-100 border border-gray-200 hover:bg-gray-200 text-gray-800 px-4 h-10 rounded-2xl transition-all active:scale-95"
          >
            <Store size={18} strokeWidth={1.5} />
            <span className="hidden sm:inline text-xs tracking-widest">
              Become a Seller
            </span>
          </a>

          {/* Profile */}
          <a
            href="/profile"
            aria-label="User Profile"
            className="flex items-center justify-center  bg-gray-100 border border-gray-200 hover:bg-gray-200 text-gray-800 w-10 h-10 rounded-2xl transition-all active:scale-95"
          >
            <User size={18} strokeWidth={1.5} />
          </a>

        </div>
      </div>
    </header>
  );
};

export default TopBar;