import React from 'react';
import { Camera, Music, Share2, Calendar, Save } from 'lucide-react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

function ActionButton({ icon, label, color, onClick }: ActionButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center px-4 py-2 ${color} text-white rounded-lg hover:opacity-90`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
}

export default function ActionButtons() {
  return (
    <div className="flex space-x-4">
      <ActionButton
        icon={<Camera className="w-4 h-4" />}
        label="Add Photo"
        color="bg-blue-500"
        onClick={() => {}}
      />
      <ActionButton
        icon={<Music className="w-4 h-4" />}
        label="Add Music"
        color="bg-purple-500"
        onClick={() => {}}
      />
      <ActionButton
        icon={<Share2 className="w-4 h-4" />}
        label="Share"
        color="bg-green-500"
        onClick={() => {}}
      />
      <ActionButton
        icon={<Calendar className="w-4 h-4" />}
        label="Schedule"
        color="bg-orange-500"
        onClick={() => {}}
      />
      <ActionButton
        icon={<Save className="w-4 h-4" />}
        label="Save Draft"
        color="bg-gray-500"
        onClick={() => {}}
      />
    </div>
  );
}