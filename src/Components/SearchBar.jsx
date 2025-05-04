import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        className="border p-2 w-full"
        type="text"
        placeholder="Search Products"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
