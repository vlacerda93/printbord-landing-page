import React, { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';
import { MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `
Você é a Tácia, a assistente virtual super simpática e prestativa da gráfica digital Print Bord, localizada em Recife - PE.
O seu objetivo é ajudar os clientes a tirarem dúvidas sobre os produtos (adesivos, fardamentos, brindes, comunicação visual, papelaria corporativa, foto produtos, etc).
Seja sempre gentil, use emojis, e foque em mostrar que a Print Bord tem qualidade premium e agilidade (mais de 500 produtos disponíveis).
Não forneça preços exatos de forma alguma. Diga que o valor varia com a quantidade e formato, e convide o cliente a chamar no WhatsApp (81) 99706-7025 para um orçamento detalhado e rápido.
Responda de forma curta e direta, não escreva textos muito longos.
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: 'Olá! Sou a Tácia, assistente da Print Bord. Como posso ajudar você hoje com seus materiais gráficos? ✨' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        throw new Error('API Key não configurada. Configure o .env local.');
      }

      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: SYSTEM_PROMPT 
      });
      
      // Filter out the initial greeting if it doesn't match the strict history requirements,
      // but generative-ai handles it fine if we map it properly.
      const chatHistory = messages.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));

      const chat = model.startChat({
        history: chatHistory,
      });

      const result = await chat.sendMessage(userText);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error('Erro no chatbot:', error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: 'Desculpe, estou com um probleminha técnico no momento. Por favor, nos chame no WhatsApp: (81) 99706-7025!' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbotWrapper}>
      {!isOpen && (
        <button 
          className={styles.chatButton} 
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat"
        >
          <MessageCircle size={30} />
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <div className={styles.headerInfo}>
              <h3>Tácia 🤖</h3>
              <p>Assistente Print Bord</p>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className={styles.messagesArea}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.botMessage}`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className={styles.typingIndicator}>
                <div className={styles.typingDot}></div>
                <div className={styles.typingDot}></div>
                <div className={styles.typingDot}></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.inputArea} onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida..."
              className={styles.input}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendBtn} disabled={!input.trim() || isLoading}>
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
