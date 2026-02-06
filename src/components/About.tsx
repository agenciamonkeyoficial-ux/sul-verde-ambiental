import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const values = [
  'Honestidade',
  'Respeito',
  'Trabalho',
  'Transparência',
  'Confiança',
  'Eficiência',
];

const About = () => {
  return (
    <section id="quem-somos" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
              Quem Somos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experiência e Comprometimento em{' '}
              <span className="text-primary">Soluções Ambientais</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nascida com o objetivo de oferecer soluções práticas em Consultoria Ambiental e 
              Segurança do Trabalho, a Sul Verde Ambiental é uma empresa que tem como foco a 
              qualidade no atendimento das necessidades de seus clientes de maneira ágil e eficaz.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Para que isto seja possível, contamos com uma experiente Equipe Multidisciplinar e 
              a experiência de mais de uma década de seu fundador na condução de processos de 
              Licenciamento de Obras e Gestão Ambiental junto aos órgãos competentes — Municipal, 
              Estadual e Federal.
            </p>

            {/* Values Pills */}
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Mission/Vision/Values Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Missão
                  </h3>
                  <p className="text-muted-foreground">
                    Oferecer soluções práticas em consultoria ambiental, segurança do trabalho, 
                    gestão e planejamento sustentável.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Visão
                  </h3>
                  <p className="text-muted-foreground">
                    Ser referência em qualidade e atendimento, buscando atender de maneira ágil 
                    as necessidades de nossos clientes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Valores
                  </h3>
                  <p className="text-muted-foreground">
                    Honestidade, Respeito, Trabalho, Transparência, Confiança e Eficiência 
                    guiam todas as nossas ações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
