import React from 'react';

const Combobox = ({ onSelect, onChange, data }) => {
  // Implementirajte logiku Combobox komponente
  return (
    <select onChange={onChange} onSelect={onSelect}>
      {data.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Combobox;