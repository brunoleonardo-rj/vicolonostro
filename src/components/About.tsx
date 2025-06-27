import React from 'react';
import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde 2010, o Vicolo Nostro tem sido um refúgio da autêntica culinária italiana em São Paulo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Localizado no charmoso bairro Jardim das Acácias, o Vicolo Nostro nasceu do sonho de 
              trazer os sabores autênticos da Itália para o Brasil. Nosso nome, que significa "nosso beco" 
              em italiano, reflete a atmosfera íntima e acolhedora que criamos.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada prato é preparado com ingredientes selecionados e receitas tradicionais passadas 
              de geração em geração. Nossa paixão pela gastronomia italiana se reflete em cada detalhe, 
              desde a massa fresca feita diariamente até os vinhos cuidadosamente escolhidos.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-gray-800">Qualidade</h3>
                <p className="text-sm text-gray-600">Ingredientes premium</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-gray-800">Paixão</h3>
                <p className="text-sm text-gray-600">Tradição italiana</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-gray-800">Família</h3>
                <p className="text-sm text-gray-600">Ambiente acolhedor</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Interior do restaurante"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm font-semibold">Anos de Tradição</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;