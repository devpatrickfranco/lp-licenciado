import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface ChatBubbleProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ onClick, isOpen }) => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowWelcome(false);
    }
  }, [isOpen]);

  const handleWelcomeClose = () => {
    setShowWelcome(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Welcome Message */}
      {showWelcome && !isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 mr-2 animate-in slide-in-from-bottom-3 duration-500">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs relative">
            <button
              onClick={handleWelcomeClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
            <p className="text-sm text-gray-800 pr-6">
              Fale com um de nossos atendentes para saber mais.
            </p>
            <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatBubble;