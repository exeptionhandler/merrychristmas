import React, { useState } from 'react';
import type { GreetingCard } from '../types';
import { templates } from '../data/templates';
import { fonts } from '../data/styles';
import CardPreview from './CardPreview';
import TemplateSelector from './TemplateSelector';
import ActionButtons from './ActionButtons';
import StyleControls from './StyleControls';
import MessageSuggestions from './MessageSuggestions';

export default function CardEditor() {
  const [card, setCard] = useState<GreetingCard>({
    id: crypto.randomUUID(),
    templateId: templates[0].id,
    message: templates[0].defaultMessage,
    font: fonts[0].value,
    color: 'text-white',
    recipients: [],
    isDraft: true
  });

  const updateCard = (updates: Partial<GreetingCard>) => {
    setCard(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <CardPreview 
            card={card}
            onMessageChange={(message) => updateCard({ message })}
          />

          <div className="p-6 space-y-6">
            <TemplateSelector
              selectedId={card.templateId}
              onSelect={(templateId) => updateCard({ templateId })}
            />

            <ActionButtons />

            <StyleControls
              selectedFont={card.font}
              selectedColor={card.color}
              onFontChange={(font) => updateCard({ font })}
              onColorChange={(color) => updateCard({ color })}
            />

            <MessageSuggestions
              onSelect={(message) => updateCard({ message })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}