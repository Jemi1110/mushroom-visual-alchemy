
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/9a118d41-bb97-4c55-8448-c73dfcc39b99.png" 
              alt="MUSHROOM" 
              className="h-12 mb-6 brightness-0 invert" 
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Agencia creativa especializada en landing pages de alto impacto visual para marcas emergentes, startups y profesionales digitales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-mushroom-green-dark transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-mushroom-green-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-mushroom-green-dark transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-mushroom-green-dark transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Landing Pages</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Diseño Visual</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Optimización</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                contacto@mushroom.com
              </li>
              <li className="text-gray-400">
                +34 123 456 789
              </li>
              <li className="text-gray-400">
                Madrid, España
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MUSHROOM. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
