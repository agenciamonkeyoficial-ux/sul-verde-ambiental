import { Users, Clock, Award, FileCheck, HeadphonesIcon, TrendingUp } from 'lucide-react';

const differentials = [
  {
    icon: Users,
    title: 'Equipe Multidisciplinar',
    description: 'Profissionais especializados em diversas áreas da consultoria ambiental.',
  },
  {
    icon: Clock,
    title: 'Agilidade nos Processos',
    description: 'Conduzimos processos de forma rápida e eficiente junto aos órgãos competentes.',
  },
  {
    icon: Award,
    title: '+10 Anos de Experiência',
    description: 'Décadas de atuação em licenciamento e gestão ambiental no Paraná.',
  },
  {
    icon: FileCheck,
    title: 'Conformidade Garantida',
    description: 'Total conformidade com legislações municipais, estaduais e federais.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Atendimento Personalizado',
    description: 'Soluções sob medida para as necessidades específicas de cada cliente.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Comprovados',
    description: 'Histórico de sucesso em projetos de diversos portes e segmentos.',
  },
];

const Differentials = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Diferenciais
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que Escolher a Sul Verde Ambiental?
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos experiência técnica, agilidade e atendimento personalizado 
            para oferecer as melhores soluções em consultoria ambiental.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center mb-5">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
