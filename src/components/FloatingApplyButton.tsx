import React from 'react';
import { Mail } from 'lucide-react';

const FloatingApplyButton = ({ onApply }: { onApply: () => void }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={onApply}
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all"
      >
        <Mail size={24} />
      </button>
    </div>
  );
};

export default FloatingApplyButton;
