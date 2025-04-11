import React, { useState } from 'react';
import Filter from './Filter';

const ShoppingList = ({ items }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter search={search} onSearchChange={handleSearchChange} />
      <div className="Items">
        {filteredItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
