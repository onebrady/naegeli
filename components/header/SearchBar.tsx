"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  className?: string;
  mobile?: boolean;
}

export default function SearchBar({ className = "", mobile = false }: SearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Search query:", searchQuery);
  };

  const handleClear = () => {
    setSearchQuery("");
    if (mobile) {
      setIsExpanded(false);
    }
  };

  if (mobile) {
    return (
      <>
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Open search"
          >
            <Search className="w-5 h-5 text-slate-700" />
          </button>
        ) : (
          <div className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 p-4 z-50 animate-in slide-in-from-top duration-300">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  autoFocus
                />
              </div>
              <button
                type="button"
                onClick={handleClear}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </form>
          </div>
        )}
      </>
    );
  }

  // Desktop search bar
  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
        style={{ minWidth: "240px" }}
      />
      {searchQuery && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>
      )}
    </form>
  );
}
