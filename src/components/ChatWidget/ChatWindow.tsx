import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { Message, TeamMember } from './types';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import TeamMembers from './TeamMembers';
import { sendMessageToN8N } from '../../utils/chatApi';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Ana',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      role: 'Consultora'
    },
    {
      id: '2',
      name: 'Carla',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      role: 'Especialista'
    },
    {
      id: '3',
      name: 'Sofia',
      avatar: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      role: 'Atendente'
    }
  ];

  useEffect(() => {
    if (isOpen && !isInitialized) {
      const welcomeMessage: Message = {
        id: '1',
        text: 'Olá! Seja bem-vinda à DamaFace. Como podemos te ajudar a escalar o seu consultório?',
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      setIsInitialized(true);
    }
  }, [isOpen, isInitialized]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const response = await sendMessageToN8N(userMessage.text);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Desculpe, ocorreu um erro. Nossa equipe foi notificada e entraremos em contato em breve.',
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end p-4 z-50">
      <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl w-full max-w-md h-[80vh] md:h-[600px] md:mr-4 md:mb-4 flex flex-col animate-in slide-in-from-bottom-5 md:slide-in-from-right-5 duration-300 mb-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-t-2xl md:rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">DamaFace</h3>
            <p className="text-pink-100 text-sm">Converse Conosco</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-pink-100 transition-colors p-1 rounded-full hover:bg-pink-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {isInitialized && <TeamMembers members={teamMembers} />}
          
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <TypingIndicator />
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-end space-x-2">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none min-h-[48px] max-h-[120px] overflow-y-auto"
              disabled={isTyping}
              rows={1}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex-shrink-0"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Pressione Enter para enviar • Shift+Enter para quebrar linha
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;