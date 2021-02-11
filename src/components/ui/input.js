import React from 'react';

const input = ({ label, type = 'text', id, value, change }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        style={{ fontSize: '30px' }}
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
