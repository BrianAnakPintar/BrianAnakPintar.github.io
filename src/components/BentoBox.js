import React from 'react';

const BentoBox = ({ items }) => {
  return (
    <div className="bento-box">
      {items.map((item, index) => (
        <div className="bento-item" key={index} style={{ backgroundColor: item.color }}>
          <div className="item-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoBox;