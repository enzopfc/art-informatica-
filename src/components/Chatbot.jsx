import { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('initial');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Olá! Bem-vindo à Art Informática. Em que posso ajudar?");
      setCurrentStep('initial');
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { 
      type: 'bot', 
      text, 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { 
      type: 'user', 
      text, 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  const handleOptionClick = (option, text) => {
    addUserMessage(text);
    
    setTimeout(() => {
      switch (option) {
        case 'financeiro':
          addBotMessage("Certo! Clique no botão abaixo para falar diretamente com nosso setor financeiro pelo WhatsApp:");
          setTimeout(() => {
            setMessages(prev => [...prev, {
              type: 'whatsapp',
              text: 'Falar com Financeiro',
              url: 'https://wa.me/5519382720799?text=' + encodeURIComponent('Olá! Preciso falar com o setor financeiro da Art Informática.'),
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
            showFinalOptions();
          }, 1000);
          break;

        case 'orcamentos':
          addBotMessage("Ok! Preencha este formulário rápido para pedir seu orçamento:");
          setTimeout(() => {
            setShowForm(true);
          }, 1000);
          break;

        case 'suporte':
          addBotMessage("Nosso suporte técnico está disponível pelos seguintes canais:");
          setTimeout(() => {
            addBotMessage("📞 Telefone: (19) 3827-2079\n📱 WhatsApp: Clique no botão abaixo");
            setTimeout(() => {
              setMessages(prev => [...prev, {
                type: 'whatsapp',
                text: 'Suporte WhatsApp',
                url: 'https://wa.me/5519382720799?text=' + encodeURIComponent('Olá! Preciso de suporte técnico da Art Informática.'),
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }]);
              showFinalOptions();
            }, 1000);
          }, 1000);
          break;

        case 'outros':
          addBotMessage("Um atendente humano vai falar com você em breve. Aguarde!");
          setTimeout(() => {
            addBotMessage("Enquanto isso, você pode entrar em contato conosco pelo WhatsApp:");
            setTimeout(() => {
              setMessages(prev => [...prev, {
                type: 'whatsapp',
                text: 'Falar com Atendente',
                url: 'https://wa.me/5519382720799?text=' + encodeURIComponent('Olá! Preciso falar sobre outros assuntos com a Art Informática.'),
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }]);
              showFinalOptions();
            }, 1000);
          }, 1500);
          break;

        case 'voltar':
          addBotMessage("Como posso ajudá-lo?");
          setCurrentStep('initial');
          break;

        case 'novo_atendimento':
          setMessages([]);
          setShowForm(false);
          setFormData({ name: '', email: '', description: '' });
          setTimeout(() => {
            addBotMessage("Olá! Bem-vindo à Art Informática. Em que posso ajudar?");
            setCurrentStep('initial');
          }, 500);
          break;
      }
    }, 500);
  };

  const showFinalOptions = () => {
    setTimeout(() => {
      setCurrentStep('final');
    }, 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.description) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Por favor, insira um e-mail válido!');
      return;
    }

    setShowForm(false);
    addBotMessage(`Obrigado, ${formData.name}! Recebemos sua solicitação de orçamento:`);
    
    setTimeout(() => {
      addBotMessage(`📧 E-mail: ${formData.email}\n📝 Descrição: ${formData.description}`);
      
      setTimeout(() => {
        addBotMessage("Entraremos em contato em breve! Você também pode acompanhar pelo WhatsApp:");
        
        setTimeout(() => {
          const message = `Olá! Sou ${formData.name} e enviei uma solicitação de orçamento pelo site. E-mail: ${formData.email}. Descrição: ${formData.description}`;
          setMessages(prev => [...prev, {
            type: 'whatsapp',
            text: 'Acompanhar no WhatsApp',
            url: 'https://wa.me/5519382720799?text=' + encodeURIComponent(message),
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }]);
          showFinalOptions();
        }, 1000);
      }, 1000);
    }, 1000);

    // Reset form
    setFormData({ name: '', email: '', description: '' });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const initialOptions = [
    { key: 'financeiro', text: '💰 Financeiro' },
    { key: 'orcamentos', text: '📋 Orçamentos' },
    { key: 'suporte', text: '🔧 Suporte técnico' },
    { key: 'outros', text: '💬 Outros assuntos' }
  ];

  const finalOptions = [
    { key: 'voltar', text: '🔄 Voltar ao menu' },
    { key: 'novo_atendimento', text: '✨ Novo atendimento' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Icon */}
      <div 
        className={`w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'scale-0' : 'scale-100 animate-pulse-soft'
        }`}
        onClick={() => setIsOpen(true)}
      >
        <i className="fas fa-comments text-white text-xl"></i>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="gradient-bg text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Art Informática</h3>
              <p className="text-sm opacity-90">Atendimento Online</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.type === 'whatsapp' ? (
                  <a
                    href={message.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp max-w-xs"
                  >
                    <i className="fab fa-whatsapp"></i>
                    {message.text}
                  </a>
                ) : (
                  <div className={`max-w-xs p-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-primary-500 text-white rounded-br-sm' 
                      : 'bg-white text-gray-800 shadow-sm rounded-bl-sm'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Options/Form */}
          <div className="p-4 bg-white border-t border-gray-200">
            {showForm ? (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Descreva o que você precisa"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                >
                  Enviar Orçamento
                </button>
              </form>
            ) : (
              <div className="space-y-2">
                {(currentStep === 'initial' ? initialOptions : finalOptions).map((option) => (
                  <button
                    key={option.key}
                    onClick={() => handleOptionClick(option.key, option.text)}
                    className="w-full p-3 text-left bg-gray-100 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors duration-300 text-sm font-medium"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;