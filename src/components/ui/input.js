import React from 'react';

const input = ({ label, type = 'text', id, value, change }) => {
  return (
    <>
      <label for={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => {
          change(event.target.value);
        }}
      />
    </>
  );
};

export default input;
