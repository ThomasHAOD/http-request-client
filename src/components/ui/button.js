import React from 'react';

const button = ({ clicked, label = 'Button', request }) => {
  return (
    <button style={{ fontSize: '30px' }} onClick={() => clicked(request)}>
      {label}
    </button>
  );
};

export default button;
