// src/RangeSlider.js
import React, { useState } from 'react';
import './RangeSlider.css';

const RangeSlider = ({ min, max, step, initialValue }) => {
  const [value, setValue] = useState(initialValue || min);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="range-slider">
      <div className="range-slider-labels">
        <span>{min}</span>
        <span>{value}</span>
        <span>{max}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="range-slider-input"
      />
    </div>
  );
};

export default RangeSlider;

