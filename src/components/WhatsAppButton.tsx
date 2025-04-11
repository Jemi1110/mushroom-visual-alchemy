
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "123456789"; // Reemplaza con el número real
  const message = "Hola, me interesa conocer más sobre sus servicios.";
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare size={24} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
