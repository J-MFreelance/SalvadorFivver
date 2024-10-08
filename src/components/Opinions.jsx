import Testimonial from "./Testimonial";


const Opinions = () => {
    const testimonials = [
      {
        image: '/assets/person1.png', 
        name: 'Gran Duque de Luxemburgo',
        title: '',
        quote: 'Su compromiso con la excelencia, su enfoque colaborativo y su capacidad para transformar ideas en resultados tangibles han sido fundamentales para desarrollar una investigacioen ejemplar sobre la importancia de la regeneración forestal ante al cambio climático.'
      },
      {
        image: '/assets/person2.png', 
        name: 'Christian Hueschke',
        title: 'AMAGNO Sales Director',
        quote: 'Destacado consultor internacional cuya excepcional trayectoria y experiencia han dejado una huella significativa en nuestra empresa. Su influencia y liderazgo son testimonio de su destacada contribución a la consultoría internacional.'
      }
    ];
  
    return (
      <div  id='ecocitizen'className="bg-[#101034] py-10">
        <h2 className="text-3xl max-lg:px-4 font-bold text-white mb-8">
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