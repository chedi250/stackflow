import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { t, language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const greeting = {
        id: Date.now(),
        text: t('chatbot.greeting'),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([greeting]);
    }
  }, [isOpen, t]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;



    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Simulate API call to OpenRouter
      const response = await simulateOpenRouterAPI(inputValue, language);

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: t('chatbot.error'),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateOpenRouterAPI = async (message, lang) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple keyword-based responses for demo
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('support') || lowerMessage.includes('customer')) {
      return lang === 'fr' ?
        "Je recommande notre outil Customer Support AI ! Il peut gérer les demandes clients 24/7 avec un routage intelligent. Voulez-vous voir la démo ?" :
        lang === 'ar' ?
          "أنصح بأداة دعم العملاء بالذكاء الاصطناعي! يمكنها التعامل مع استفسارات العملاء على مدار الساعة مع التوجيه الذكي. هل تريد مشاهدة العرض التوضيحي؟" :
          "I recommend our Customer Support AI tool! It can handle customer inquiries 24/7 with intelligent routing. Would you like to see the demo?";
    }

    if (lowerMessage.includes('document') || lowerMessage.includes('pdf')) {
      return lang === 'fr' ?
        "Notre Document Automation Suite serait parfaite pour vous ! Elle traite automatiquement les documents avec l'IA. Consultez notre catalogue pour plus de détails." :
        lang === 'ar' ?
          "مجموعة أتمتة المستندات ستكون مثالية لك! تعالج المستندات تلقائياً بالذكاء الاصطناعي. تحقق من كتالوجنا لمزيد من التفاصيل." :
          "Our Document Automation Suite would be perfect for you! It processes documents automatically with AI. Check our catalog for more details.";
    }

    if (lowerMessage.includes('health') || lowerMessage.includes('medical') || lowerMessage.includes('santé')) {
      return lang === 'fr' ?
        "Nous avons un Assistant Médical IA spécialement conçu pour les professionnels de santé. Il aide avec la planification des patients et la gestion des dossiers médicaux." :
        lang === 'ar' ?
          "لدينا مساعد طبي بالذكاء الاصطناعي مصمم خصيصاً للمهنيين الصحيين. يساعد في جدولة المرضى وإدارة السجلات الطبية." :
          "We have a Medical Assistant AI specifically designed for healthcare professionals. It helps with patient scheduling and medical record management.";
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('learning') || lowerMessage.includes('éducation')) {
      return lang === 'fr' ?
        "Notre Tuteur IA Éducation offre un apprentissage personnalisé et une assistance aux devoirs. Parfait pour les étudiants et les établissements d'enseignement !" :
        lang === 'ar' ?
          "مدرس الذكاء الاصطناعي التعليمي يوفر تعلماً شخصياً ومساعدة في الواجبات المنزلية. مثالي للطلاب والمؤسسات التعليمية!" :
          "Our AI Education Tutor offers personalized learning and homework assistance. Perfect for students and educational institutions!";
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('prix')) {
      return lang === 'fr' ?
        "Nos outils vont de 1 999$ à 4 999$ en paiement unique, sans frais mensuels ! Nous offrons aussi un plan freemium avec 15 requêtes quotidiennes gratuites." :
        lang === 'ar' ?
          "أدواتنا تتراوح من 1,999$ إلى 4,999$ دفعة واحدة، بدون رسوم شهرية! نقدم أيضاً خطة مجانية مع 15 طلب يومي مجاني." :
          "Our tools range from $1,999 to $4,999 one-time payment, no monthly fees! We also offer a freemium plan with 15 free daily requests.";
    }

    return lang === 'fr' ?
      "Je peux vous aider à trouver l'outil d'automatisation parfait pour vos besoins ! Pouvez-vous me dire plus sur votre secteur d'activité ou vos défis spécifiques ?" :
      lang === 'ar' ?
        "يمكنني مساعدتك في العثور على أداة الأتمتة المثالية لاحتياجاتك! هل يمكنك إخباري المزيد عن قطاع عملك أو التحديات المحددة؟" :
        "I can help you find the perfect automation tool for your needs! Can you tell me more about your industry or specific challenges?";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center space-x-3"
        >
          <i className="fas fa-comments text-xl"></i>
          <span className="font-medium">{t('chatbot.askOurAI')}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[450px] h-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fas fa-robot"></i>
          <span className="font-semibold">{t('chatbot.assistantTitle')}</span>
        </div>
        <div className="flex items-center space-x-2">

          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 p-1 rounded"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
                }`}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs opacity-70">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('chatbot.placeholder')}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;