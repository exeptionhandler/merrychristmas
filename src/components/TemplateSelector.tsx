import React from 'react';
import { templates } from '../data/templates';

interface TemplateSelectorProps {
  selectedId: string;
  onSelect: (templateId: string) => void;
}

export default function TemplateSelector({ selectedId, onSelect }: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {templates.map(template => (
        <button
          key={template.id}
          onClick={() => onSelect(template.id)}
          className={`aspect-video rounded-lg overflow-hidden ${
            selectedId === template.id ? 'ring-2 ring-blue-500' : ''
          }`}
        >
          <img 
            src={template.background} 
            alt={template.name}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}