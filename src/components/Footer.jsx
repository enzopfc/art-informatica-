const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <i className="fas fa-store text-2xl text-blue-400"></i>
              <h3 className="text-xl font-bold">Art Informática</h3>
            </div>
            <p className="text-gray-300">
              Sua papelaria e informática em um só lugar
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                title="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                title="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://wa.me/5519382720799" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-primary-400"></i>
                <span>R. XV de Novembro, 566<br />Santa Rosa, Artur Nogueira – SP<br />13163-190</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-primary-400"></i>
                <span>(19) 3827-2079</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fab fa-whatsapp text-green-400"></i>
                <a 
                  href="https://wa.me/5519382720799" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  (19) 3827-2079
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horário de Funcionamento</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="font-medium">08:30 – 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-medium">09:00 – 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span className="font-medium text-red-400">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Art Informática. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;