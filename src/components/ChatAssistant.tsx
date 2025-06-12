
import React, { useState, useEffect } from 'react';
import { Bot, X, Send, Globe, Languages, AlertTriangle } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sendChatbotMessage } from '@/services/chatbotService';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  text: string;
  isBot: boolean;
  isError?: boolean;
}

const welcomeMessages = {
  en: "👋 Hello! I'm here to help you learn more about our greening education initiatives. What would you like to know?",
  fr: "👋 Bonjour! Je suis là pour vous aider à en apprendre davantage sur nos initiatives d'éducation écologique. Que souhaitez-vous savoir?",
  ar: "👋 مرحبًا! أنا هنا لمساعدتك في معرفة المزيد عن مبادرات التعليم الخضراء لدينا. ماذا تود أن تعرف؟",
  es: "👋 ¡Hola! Estoy aquí para ayudarte a aprender más sobre nuestras iniciativas de educación verde. ¿Qué te gustaría saber?"
};

const languageNames = {
  en: "English",
  fr: "Français",
  ar: "العربية",
  es: "Español"
};

const ChatAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [language, setLanguage] = useState<'en' | 'fr' | 'ar' | 'es'>('en');
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Reset messages when language changes
  useEffect(() => {
    setMessages([{ text: welcomeMessages[language], isBot: true }]);
  }, [language]);

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isBot: false }]);
    const userQuery = message;
    setMessage('');
    setIsLoading(true);
    
    try {
      // Send message to backend
      const response = await sendChatbotMessage(userQuery, language);
      
      if (response.error) {
        // Handle error response
        setMessages(prev => [
          ...prev, 
          { 
            text: `Error: ${response.error}. Please try again later.`, 
            isBot: true, 
            isError: true 
          }
        ]);
        toast({
          title: "Error",
          description: "Failed to get response from the chatbot.",
          variant: "destructive",
        });
      } else {
        // Add bot response
        setMessages(prev => [...prev, { text: response.response, isBot: true }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [
        ...prev, 
        { 
          text: "Sorry, I'm having trouble connecting to the server. Please try again later.", 
          isBot: true, 
          isError: true 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChat = () => {
    setShowLanguageDialog(true);
  };

  const handleSelectLanguage = (lang: 'en' | 'fr' | 'ar' | 'es') => {
    setLanguage(lang);
    setShowLanguageDialog(false);
    setIsChatOpen(true);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={handleOpenChat}
        className="fixed bottom-6 right-6 bg-[#6cb154] text-white p-4 rounded-full shadow-lg hover:bg-[#5a9f45] transition-colors duration-200 z-40"
        aria-label="Open Chat Assistant"
      >
        <Bot size={24} />
      </button>

      {/* Language Selection Dialog */}
      <Dialog open={showLanguageDialog} onOpenChange={setShowLanguageDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Languages size={20} className="text-[#6cb154]" />
              Choose Your Language
            </DialogTitle>
            <DialogDescription>
              Select your preferred language to chat with our assistant.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <RadioGroup 
              value={language} 
              onValueChange={(value: 'en' | 'fr' | 'ar' | 'es') => handleSelectLanguage(value)}
              className="flex flex-col space-y-3"
            >
              <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectLanguage("en")}>
                <RadioGroupItem value="en" id="en" />
                <label htmlFor="en" className="font-medium cursor-pointer flex-1">English</label>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectLanguage("fr")}>
                <RadioGroupItem value="fr" id="fr" />
                <label htmlFor="fr" className="font-medium cursor-pointer flex-1">Français</label>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectLanguage("es")}>
                <RadioGroupItem value="es" id="es" />
                <label htmlFor="es" className="font-medium cursor-pointer flex-1">Español</label>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectLanguage("ar")}>
                <RadioGroupItem value="ar" id="ar" />
                <label htmlFor="ar" className="font-medium cursor-pointer flex-1">العربية</label>
              </div>
            </RadioGroup>
          </div>
        </DialogContent>
      </Dialog>

      {/* Chat Dialog */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm bg-white rounded-xl shadow-xl z-50 border border-gray-200" dir={language === "ar" ? "rtl" : "ltr"}>
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">GEP Assistant</h3>
            <div className="flex items-center gap-2">
              <Select 
                value={language} 
                onValueChange={(value: 'en' | 'fr' | 'ar' | 'es') => setLanguage(value)}
              >
                <SelectTrigger className="w-[110px] h-8">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <Globe size={14} />
                      <span>{languageNames[language]}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent align={language === "ar" ? "end" : "start"}>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="h-96 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  msg.isBot
                    ? msg.isError 
                      ? 'bg-red-50 text-red-800 rounded-lg p-3'
                      : 'bg-gray-100 rounded-lg p-3'
                    : 'bg-[#e0f2cc] rounded-lg p-3 ml-auto'
                } max-w-[80%] ${msg.isBot ? '' : language === "ar" ? 'mr-auto' : 'ml-auto'}`}
              >
                {msg.isError && <AlertTriangle size={16} className="inline-block mr-1 mb-1" />}
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] mb-3">
                <div className="flex items-center space-x-2">
                  <div className="animate-pulse flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              disabled={isLoading}
              placeholder={
                language === "en" ? "Type your message..." : 
                language === "fr" ? "Tapez votre message..." :
                language === "ar" ? "اكتب رسالتك..." :
                "Escribe tu mensaje..."
              }
              className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#6cb154] focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className={`text-white p-2 rounded-lg transition-colors duration-200 ${
                isLoading 
                  ? 'bg-gray-400' 
                  : 'bg-[#6cb154] hover:bg-[#5a9f45]'
              }`}
              aria-label="Send Message"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
