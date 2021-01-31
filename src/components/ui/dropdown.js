import React from 'react';

const dropdown = ({ name, options, label, change }) => {
  return (
    <>
      <label for={name}>{label}</label>
      <select
        name={name}
        id={name}
        onChange={(event) => {
          change(event.target.value);
        }}
      >
        {options.map((option) => {
          return <option value={option.value}>{option.value}</option>;
        })}
      </select>
    </>
  );
};

export default dropdown;
