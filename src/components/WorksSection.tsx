
import { useEffect, useRef } from 'react';

const works = [
  {
    title: "BrainBoost",
    category: "SaaS Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "EcoVibe",
    category: "Landing Page Corporativa",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "FinLedger",
    category: "Startup Homepage",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SportSync",
    category: "Producto Digital",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const WorksSection = () => {
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
    <section id="works" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">
          Proyectos <span className="text-mushroom-green">Destacados</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {works.map((work, index) => (
            <div 
              key={index}
              ref={el => (revealRefs.current[index] = el)}
              className="group cursor-pointer reveal overflow-hidden rounded-xl card-shadow"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-mushroom-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-sm tracking-wider">{work.category}</p>
                    <h3 className="text-2xl font-bold mt-2">{work.title}</h3>
                    <button className="mt-4 px-6 py-2 border border-mushroom-lime rounded-full hover:bg-mushroom-lime hover:text-mushroom-dark transition-colors">
                      Ver detalle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
