import React from 'react';

function DiwaliShoppingList() {
  const relatives = ['Relative 1', 'Relative 2', 'Relative 3']; // Add your relatives' names here

  return (
    <ol key="relativeList">
      {relatives.map((relative, index) => (
        <li key={`relativeListItem${index + 1}`}>{relative}</li>
      ))}
    </ol>
  );
}

export default DiwaliShoppingList;
