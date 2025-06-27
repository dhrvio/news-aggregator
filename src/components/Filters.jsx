import { useState, useEffect } from 'react';
import { fetchSources } from '../services/newsApi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const categories = [
  "general", "business", "entertainment",
  "health", "science", "sports", "technology"
];

export default function Filters({ onFilterChange }) {
  const [sources, setSources] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    sources: '',
    from: ''
  });

  useEffect(() => {
    const loadSources = async () => {
      try {
        const data = await fetchSources();
        setSources(data);
      } catch (error) {
        console.error('Failed to load sources:', error);
      }
    };
    loadSources();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDateChange = (date) => {
    const formattedDate = date ? date.toISOString().split('T')[0] : '';
    const newFilters = {
      ...filters,
      from: formattedDate
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClear = () => {
    const resetFilters = {
      category: '',
      sources: '',
      from: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Filter News</h3>
        <button
          onClick={handleClear}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 mr-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
            />
          </svg>
          Clear Filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 text-black focus:border-blue-400 transition-all max-h-48 overflow-y-auto"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Sources Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">News Source</label>
          <select
            name="sources"
            value={filters.sources}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 text-black focus:border-blue-400 transition-all max-h-48 overflow-y-auto"
          >
            <option value="">All Sources</option>
            {sources.map(source => (
              <option key={source.id} value={source.id}>
                {source.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Published After</label>
          <DatePicker
            selected={filters.from ? new Date(filters.from) : null}
            onChange={handleDateChange}
            maxDate={new Date()}
            placeholderText="Select a date"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 text-black focus:border-blue-400 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
