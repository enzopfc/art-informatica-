const Sections = () => {
  const services = [
    {
      icon: 'fas fa-pen',
      title: 'Papelaria',
      items: [
        'Material escolar e escritório',
        'Canetas, lápis e marcadores',
        'Cadernos e agendas',
        'Papel A4, sulfite e especiais',
        'Produtos para arte e desenho'
      ]
    },
    {
      icon: 'fas fa-laptop',
      title: 'Informática',
      items: [
        'Computadores e notebooks',
        'Periféricos (mouse, teclado, monitor)',
        'Impressoras e cartuchos',
        'Peças e componentes',
        'Cabos e acessórios'
      ]
    },
    {
      icon: 'fas fa-tools',
      title: 'Suporte Técnico',
      items: [
        'Manutenção de computadores',
        'Instalação de softwares',
        'Formatação e backup',
        'Limpeza e otimização',
        'Diagnóstico de problemas'
      ]
    },
    {
      icon: 'fas fa-print',
      title: 'Impressão',
      items: [
        'Impressão colorida e P&B',
        'Cópias e digitalizações',
        'Plastificação',
        'Encadernação',
        'Material gráfico personalizado'
      ]
    }
  ];

  const features = [
    {
      icon: 'fas fa-users',
      title: 'Atendimento Personalizado',
      description: 'Equipe especializada para melhor atendê-lo'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Produtos de Qualidade',
      description: 'Trabalhamos apenas com marcas reconhecidas'
    },
    {
      icon: 'fas fa-clock',
      title: 'Agilidade',
      description: 'Rapidez na entrega e execução dos serviços'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="gradient-bg text-white pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Art Informática
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-300 font-semibold">
              Sua papelaria e informática em um só lugar
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-100">
              Oferecemos produtos de qualidade e serviços especializados para atender 
              todas as suas necessidades em papelaria e informática.
            </p>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Conheça nossos serviços
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Quem Somos
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
              <p>
                A Art Informática é uma empresa consolidada no mercado, especializada em produtos 
                de papelaria e soluções em informática. Com anos de experiência, oferecemos 
                atendimento personalizado e produtos de qualidade para pessoas físicas e jurídicas.
              </p>
              <p>
                Nossa missão é fornecer soluções completas que atendam às necessidades dos nossos 
                clientes, seja para uso pessoal, escolar, empresarial ou técnico. Trabalhamos com 
                as melhores marcas do mercado e contamos com uma equipe especializada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center animate-slide-up">
                <div className="text-4xl text-primary-500 mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Nossos Serviços
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:border-primary-200 border-2 border-transparent">
                <div className="text-center mb-6">
                  <div className="text-4xl text-primary-500 mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 text-gray-600">
                      <i className="fas fa-check text-primary-500 mt-1 flex-shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Entre em Contato
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-primary-500 mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Endereço</h3>
                    <p className="text-gray-600">
                      R. XV de Novembro, 566<br />
                      Santa Rosa, Artur Nogueira – SP<br />
                      CEP: 13163-190
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-primary-500 mt-1">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Telefone</h3>
                    <p className="text-gray-600">(19) 3827-2079</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-green-500 mt-1">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">WhatsApp</h3>
                    <a 
                      href="https://wa.me/5519382720799" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <i className="fab fa-whatsapp"></i>
                      (19) 3827-2079
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="card">
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
                Horário de Funcionamento
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Segunda a Sexta:</span>
                  <span className="text-primary-600 font-semibold">08:30 – 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Sábado:</span>
                  <span className="text-primary-600 font-semibold">09:00 – 13:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">Domingo:</span>
                  <span className="text-red-500 font-semibold">Fechado</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                <div className="flex items-center space-x-3 text-primary-700">
                  <i className="fas fa-info-circle"></i>
                  <span className="font-medium">Estamos sempre prontos para atendê-lo!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;