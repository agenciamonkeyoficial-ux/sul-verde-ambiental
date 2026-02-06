import jacomar from '@/assets/clientes/jacomar.jpeg';
import bora from '@/assets/clientes/bora.jpeg';
import colatusso from '@/assets/clientes/colatusso.jpeg';
import curitiba from '@/assets/clientes/curitiba.jpeg';
import armazemMaria from '@/assets/clientes/armazem-maria.jpeg';
import rudegon from '@/assets/clientes/rudegon.jpeg';
import zamprogna from '@/assets/clientes/zamprogna.jpeg';

const clients = [
  { name: 'Jacomar', logo: jacomar },
  { name: 'Bora Construções', logo: bora },
  { name: 'Colatusso', logo: colatusso },
  { name: 'Curitiba Supermercados', logo: curitiba },
  { name: 'Armazém da Maria', logo: armazemMaria },
  { name: 'Rudegon', logo: rudegon },
  { name: 'Zamprogna', logo: zamprogna },
];

const Clients = () => {
  return (
    <section id="clientes" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Nossos Clientes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empresas que Confiam em Nosso Trabalho
          </h2>
          <p className="text-lg text-muted-foreground">
            Atendemos empresas de diversos segmentos, oferecendo soluções personalizadas 
            para cada necessidade.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-card rounded-xl p-6 flex items-center justify-center h-28 shadow-soft border border-border/30 card-hover"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Mais de <strong className="text-foreground">50 empresas</strong> já confiam 
            na Sul Verde Ambiental para suas necessidades ambientais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
