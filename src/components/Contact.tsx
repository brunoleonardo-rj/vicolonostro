import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visite-nos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Venha experimentar a autêntica culinária italiana em um ambiente acolhedor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 rounded-full p-3 flex-shrink-0">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                <p className="text-gray-300 leading-relaxed">
                  R. Jataituba, 29<br />
                  Jardim das Acácias<br />
                  São Paulo - SP<br />
                  CEP: 04704-090
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 rounded-full p-3 flex-shrink-0">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-gray-300">
                  <a href="tel:+551931997435" className="hover:text-yellow-400 transition-colors">
                    (19) 3199-7435
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 rounded-full p-3 flex-shrink-0">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horário de Funcionamento</h3>
                <div className="text-gray-300 space-y-1">
                  <p>Segunda a Quinta: 18h às 23h</p>
                  <p>Sexta e Sábado: 18h às 00h</p>
                  <p>Domingo: 18h às 22h</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 rounded-full p-3 flex-shrink-0">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reservas</h3>
                <p className="text-gray-300 mb-4">
                  Reserve sua mesa e garanta uma experiência inesquecível
                </p>
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                  Fazer Reserva
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;