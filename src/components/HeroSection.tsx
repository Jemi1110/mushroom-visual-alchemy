
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-singa leading-tight">
              Diseñamos{' '}
              <span className="text-mushroom-green-dark">experiencias</span>{' '}
              digitales que conectan
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              MUSHROOM es una agencia creativa de Lima, Perú, especializada en landing pages de alto impacto visual para marcas emergentes, startups y profesionales digitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-mushroom-green-dark text-white px-8 py-3 rounded-full hover:bg-mushroom-green-deep transition-all flex items-center justify-center gap-2 hoverable"
              >
                Comencemos <ArrowRight size={18} />
              </a>
              <a 
                href="#works" 
                className="border-2 border-mushroom-green-dark text-mushroom-green-dark px-8 py-3 rounded-full hover:bg-mushroom-green-dark hover:text-white transition-all flex items-center justify-center"
              >
                Ver proyectos
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-mushroom-accent/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-mushroom-green-dark/20 rounded-full filter blur-3xl"></div>
            <img 
              src="/lovable-uploads/3a39fbf6-0597-47b3-990f-46e22291ecd8.png" 
              alt="MUSHROOM Design" 
              className="w-full h-auto rounded-xl shadow-2xl relative z-10"
            />
          </div>
        </div>
        
        <div className="flex flex-col items-center mt-24">
          <p className="text-lg text-gray-500 font-medium mb-8">CONFIARON EN NOSOTROS</p>
          <div className="flex flex-wrap justify-center gap-12">
            <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
