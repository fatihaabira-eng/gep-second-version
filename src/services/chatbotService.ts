
import { supabase } from '@/lib/supabase';

export type ChatbotResponse = {
  response: string;
  error?: string;
};

/**
 * Sends a message to the chatbot and returns the response
 * @param query The user's message
 * @param language The language code (en, fr, ar, es)
 * @returns Promise with the chatbot's response
 */
export const sendChatbotMessage = async (
  query: string,
  language: 'en' | 'fr' | 'ar' | 'es' = 'en'
): Promise<ChatbotResponse> => {
  try {
    const { data, error } = await supabase.functions.invoke('chatbot', {
      body: { query, language },
    });

    if (error) {
      console.error('Error calling chatbot function:', error);
      return { response: '', error: error.message };
    }

    return data as ChatbotResponse;
  } catch (error) {
    console.error('Error in chatbot service:', error);
    return { 
      response: '', 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
};
