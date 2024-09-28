import Testimonial from "./Testimonial";


const Opinions = () => {
    const testimonials = [
      {
        image: 'https://img.europapress.es/fotoweb/fotonoticia_20240623165307_690.jpg', 
        name: 'Gran Duque de Luxemburgo',
        title: '',
        quote: 'Su compromiso con la excelencia, su enfoque colaborativo y su capacidad para transformar ideas en resultados tangibles han sido fundamentales para desarrollar una investigacioen ejemplar sobre la importancia de la regeneración forestal ante al cambio climático.'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBKdki-298KXIeoGwiMRKel_Q1hyjyUwtew&s', 
        name: 'Christian Hueschke',
        title: 'AMAGNO Sales Director',
        quote: 'Destacado consultor internacional cuya excepcional trayectoria y experiencia han dejado una huella significativa en nuestra empresa. Su influencia y liderazgo son testimonio de su destacada contribución a la consultoría internacional.'
      }
    ];
  
    return (
      <div className="bg-slate-900 py-10">
        <h2 className="text- text-3xl font-bold text-white mb-8">
          Opiniones internacionales
        </h2>
        <div className="space-y-8">
    
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
              
            />
            
            
          ))}
          
        </div>
      </div>
    );
  };

export default Opinions