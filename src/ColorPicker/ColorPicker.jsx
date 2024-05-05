import React, { useState } from 'react';

const colors = [
  { name: 'Red', code: '#FF0000' },
  { name: 'Green', code: '#00FF00' },
  { name: 'Blue', code: '#0000FF' }
];

const ColorDisplay = ({ selectedColor }) => {
  return (
    <div style={{ width: '100px', height: '100px', backgroundColor: selectedColor }}></div>
  );
};

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null); 

  const handleColorClick = (colorCode) => {
    setSelectedColor(colorCode);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <ColorDisplay selectedColor={selectedColor} />
      <div>
        {colors.map((color, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '5px', cursor: 'pointer' }} onClick={() => handleColorClick(color.code)}>
            <div style={{ width: '30px', height: '30px', backgroundColor: color.code }}></div>
            <span>{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
