import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-yellow-400">VICOLO</span> NOSTRO
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Autêntica culinária italiana no coração de São Paulo desde 2010.
            </p>
            <div className="flex space-x-4">
              <div className="bg-yellow-400 rounded-full p-2">
                <Mail className="w-4 h-4 text-black" />
              </div>
              <div className="bg-yellow-400 rounded-full p-2">
                <Phone className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horários</h3>
            <div className="space-y-2 text-gray-400">
              <p>Segunda a Quinta: 18h às 23h</p>
              <p>Sexta e Sábado: 18h às 00h</p>
              <p>Domingo: 18h às 22h</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (19) 3199-7435
              </p>
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>
                  R. Jataituba, 29<br />
                  Jardim das Acácias<br />
                  São Paulo - SP<br />
                  CEP: 04704-090
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Cardápio
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center text-gray-400 space-y-2">
            <p className="font-semibold">RESTAURANTE VICOLO NOSTRO LTDA.</p>
            <p>CNPJ: 08.022.739/0001-06</p>
            <p>R. Jataituba, 29 - Jardim das Acácias - São Paulo - SP - CEP: 04704-090</p>
            <p>Telefone: (19) 3199-7435</p>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500">
              © 2024 Vicolo Nostro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;