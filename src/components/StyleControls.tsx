import React from 'react';
import { fonts, colors } from '../data/styles';

interface StyleControlsProps {
  selectedFont: string;
  selectedColor: string;
  onFontChange: (font: string) => void;
  onColorChange: (color: string) => void;
}

export default function StyleControls({
  selectedFont,
  selectedColor,
  onFontChange,
  onColorChange
}: StyleControlsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Font Style</label>
        <select
          value={selectedFont}
          onChange={(e) => onFontChange(e.target.value)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {fonts.map(font => (
            <option key={font.value} value={font.value}>{font.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
        <select
          value={selectedColor}
          onChange={(e) => onColorChange(e.target.value)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {colors.map(color => (
            <option key={color.value} value={color.value}>{color.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}