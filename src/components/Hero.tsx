import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-yellow-400">VICOLO</span> NOSTRO
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          Autêntica culinária italiana no coração de São Paulo
        </p>
        <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto">
          Experimente os sabores tradicionais da Itália em um ambiente acolhedor e sofisticado
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Ver Cardápio
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Fazer Reserva
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;