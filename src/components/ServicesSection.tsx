
import { useEffect, useRef } from 'react';
import { Monitor, PenTool, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-10 h-10 text-mushroom-green-dark" />,
    title: "Landing Pages",
    description: "Diseñamos landing pages atractivas y efectivas que convierten visitantes en clientes potenciales."
  },
  {
    icon: <PenTool className="w-10 h-10 text-mushroom-green-dark" />,
    title: "Diseño Visual",
    description: "Creamos identidades visuales impactantes y coherentes para potenciar tu marca."
  },
  {
    icon: <LineChart className="w-10 h-10 text-mushroom-green-dark" />,
    title: "Optimización",
    description: "Analizamos y optimizamos el rendimiento para maximizar la conversión."
  }
];

const ServicesSection = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      revealRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">
          Nuestros <span className="text-mushroom-green-dark">Servicios</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => (revealRefs.current[index] = el)}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          ref={el => (revealRefs.current[3] = el)}
          className="mt-20 p-10 bg-mushroom-green-dark text-white rounded-xl reveal"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">¿Necesitas una landing page única y efectiva?</h3>
            <p className="text-lg mb-8">
              En MUSHROOM nos especializamos en crear landing pages personalizadas que representan la esencia de tu marca y atraen a tu audiencia ideal.
            </p>
            <a href="#contact" className="inline-block bg-white text-mushroom-green-dark px-8 py-3 rounded-full font-medium hover:bg-mushroom-accent transition-colors duration-300">
              Solicita una consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
