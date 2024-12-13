import React from 'react';
import { suggestedMessages } from '../data/messages';

interface MessageSuggestionsProps {
  onSelect: (message: string) => void;
}

export default function MessageSuggestions({ onSelect }: MessageSuggestionsProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 mb-2">Message Suggestions</h3>
      <div className="grid grid-cols-2 gap-4">
        {suggestedMessages.map((message, index) => (
          <button
            key={index}
            onClick={() => onSelect(message)}
            className="text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            {message}
          </button>
        ))}
      </div>
    </div>
  );
}