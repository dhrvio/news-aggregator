import { useState, useEffect } from 'react';

export default function SearchBar({ onSearch, initialQuery = '' }) {
  const [term, setTerm] = useState(initialQuery);

  // Debounce effect
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(term.trim());
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [term, onSearch]);

  const clearSearch = () => {
    setTerm('');
    onSearch('');
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-2xl">
      <div className="relative flex items-center">
        {/* Search Icon (inside input, on left) */}
        <div className="absolute left-3 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input with left padding for icon */}
        <input
          type="text"
          placeholder="Search for news..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="text-black w-full py-3 px-4 pl-10 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        {/* Clear Button */}
        {term && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}
