
import { useEffect, useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Conocemos tu marca, tus objetivos y tu audiencia para establecer la dirección estratégica."
  },
  {
    number: "02",
    title: "Estrategia",
    description: "Definimos la estructura, contenido y elementos clave para garantizar conversiones."
  },
  {
    number: "03",
    title: "Diseño",
    description: "Creamos una propuesta visual única y atractiva que refleje la identidad de tu marca."
  },
  {
    number: "04",
    title: "Desarrollo",
    description: "Convertimos el diseño en una landing page funcional, optimizada y responsiva."
  },
  {
    number: "05",
    title: "Lanzamiento",
    description: "Publicamos tu landing page y aseguramos que todo funcione correctamente."
  }
];

const ProcessSection = () => {
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
    <section id="process" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">
          Nuestro <span className="text-mushroom-green-dark">Proceso</span>
        </h2>
        
        <div className="mt-16 space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={el => (revealRefs.current[index] = el)}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 reveal`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-24 h-24 bg-mushroom-green-dark/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-mushroom-green-dark font-singa">{step.number}</span>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
