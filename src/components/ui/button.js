import React from 'react';

const button = ({ clicked, label = 'Button', request }) => {
  return <button onClick={() => clicked(request)}>{label}</button>;
};

export default button;
