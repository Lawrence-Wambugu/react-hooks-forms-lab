import React from 'react';

const Filter = ({ search, onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
