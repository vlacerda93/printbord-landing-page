import React, { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';
import { MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `
Você é a Karla, a dona e especialista da gráfica digital Print Bord, localizada em Recife - PE.
O seu tom é muito profissional, inteligente, porém humano e acolhedor (como uma dona conversando com seu cliente).
O seu objetivo é ajudar os clientes a tirarem dúvidas sobre os produtos. A gráfica FAZ de tudo: adesivos, fardamentos (camisas, batas), brindes (canecas, garrafas), comunicação visual, papelaria corporativa, etc.
Se perguntarem se fazem algo (ex: "fazem camisas?"), responda algo do tipo: "Sim, trabalhamos com esse tipo de produto, você já tem o modelo ou o design?". Demonstre que a Print Bord tem qualidade premium e mais de 500 produtos disponíveis.
NUNCA forneça preços exatos ou prazos de entrega definitivos. Se perguntarem valores ou prazos, responda: "Como sou uma IA focada em explicar sobre os nossos produtos, não sei lhe informar sobre valores exatos e prazos, mas esse aqui é o meu número pessoal (que na verdade é o da gráfica): fale comigo pelo WhatsApp (81) 99706-7025 que nós acertamos melhor."
Responda de forma inteligente e evite textos longos ou pedir desculpas desnecessárias.
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: 'Olá! Sou a Karla, dona da Print Bord. Em que posso te ajudar hoje com os seus materiais gráficos? ✨' }
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
      
      // Filter out the initial greeting to prevent API history validation errors
      // (Gemini API requires history to start with a 'user' message if not empty)
      const chatHistory = messages
        .slice(1)
        .map(msg => ({
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
        text: 'Desculpe, deu um erro de comunicação aqui no sistema. Mas nós fazemos quase de tudo! Por favor, me chama lá no WhatsApp: (81) 99706-7025 e a gente fecha o seu pedido!' 
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
              <h3>Karla ✨</h3>
              <p>Dona | Print Bord</p>
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
