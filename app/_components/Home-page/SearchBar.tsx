"use client";

import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl px-4 mx-auto">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="
          w-full
          flex
          items-center
          gap-3
          h-14
          px-5
          bg-gray-100
          border
          border-gray-200
          rounded-2xl
          hover:bg-gray-50
          focus-within:bg-white
          focus-within:border-gray-300
          focus-within:shadow-sm
          transition-all
          duration-200
        "
      >
        {/* Search Icon */}
        <Search
          size={20}
          className="text-gray-500 flex-shrink-0"
          strokeWidth={2}
        />

        {/* Input */}
        <input
          type="text"
          placeholder="Search products, stores..."
          className="
            w-full
            bg-transparent
            outline-none
            text-gray-800
            placeholder:text-gray-500
            text-sm
            md:text-base
            font-medium
          "
        />
      </form>
    </div>
  );
};

export default SearchBar;