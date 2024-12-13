import React from 'react';
import type { GreetingCard } from '../types';
import { templates } from '../data/templates';

interface CardPreviewProps {
  card: GreetingCard;
  onMessageChange: (message: string) => void;
}

export default function CardPreview({ card, onMessageChange }: CardPreviewProps) {
  const currentTemplate = templates.find(t => t.id === card.templateId);

  return (
    <div 
      className="h-96 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${currentTemplate?.background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-8">
        <textarea
          className={`w-full h-full bg-transparent ${card.font} ${card.color} text-2xl text-center resize-none focus:outline-none`}
          value={card.message}
          onChange={(e) => onMessageChange(e.target.value)}
          placeholder="Enter your message..."
        />
      </div>
    </div>
  );
}