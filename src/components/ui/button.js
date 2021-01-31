import React from 'react';

const button = ({ clicked, label = 'Button' }) => {
  return <button onClick={clicked}>{label}</button>;
};

export default button;
