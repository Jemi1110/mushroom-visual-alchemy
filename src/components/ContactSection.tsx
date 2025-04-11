
import { useState } from 'react';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const { data, error } = await supabase.from('consultas').insert([
        {
          nombre: formData.name,
          correo: formData.email,
          mensaje: formData.message,
        },
      ]);
  
      if (error) throw error;
  
      toast({
        title: "Formulario enviado correctamente",
        description: "Nos pondremos en contacto contigo pronto.",
        variant: "default",
      });
  
      // Reiniciar formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar a Supabase:', error);
      toast({
        title: "Error al enviar formulario",
        description: "Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">
            Hablemos de tu <span className="text-mushroom-green-dark">Proyecto</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">¿Listo para destacar en el mundo digital?</h3>
              <p className="text-gray-600 mb-8">
                Cuéntanos sobre tu proyecto y te ayudaremos a crear una landing page que impacte y convierta.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mushroom-green-dark/10 flex items-center justify-center mt-1">
                    <Check size={14} className="text-mushroom-green-dark" />
                  </div>
                  <p className="text-gray-700">Diseño personalizado que refleja tu marca</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mushroom-green-dark/10 flex items-center justify-center mt-1">
                    <Check size={14} className="text-mushroom-green-dark" />
                  </div>
                  <p className="text-gray-700">Enfoque en conversión y experiencia de usuario</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mushroom-green-dark/10 flex items-center justify-center mt-1">
                    <Check size={14} className="text-mushroom-green-dark" />
                  </div>
                  <p className="text-gray-700">Optimizado para dispositivos móviles</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mushroom-green-dark/10 flex items-center justify-center mt-1">
                    <Check size={14} className="text-mushroom-green-dark" />
                  </div>
                  <p className="text-gray-700">Código limpio y optimizado para velocidad</p>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-mushroom-green-dark focus:border-mushroom-green-dark"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-mushroom-green-dark focus:border-mushroom-green-dark"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-mushroom-green-dark focus:border-mushroom-green-dark"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-mushroom-green-dark text-white py-3 px-6 rounded-lg hover:bg-mushroom-green-deep transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
