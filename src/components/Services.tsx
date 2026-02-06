import { Recycle, FileText, ShieldCheck, Building, Trash2, ClipboardList, HardHat, TreePine, FileSearch, Leaf } from 'lucide-react';

const services = [
  {
    icon: Recycle,
    title: 'TWM — Total Waste Management',
    description: 'Metodologia completa de gestão de resíduos, integrando ações normativas, operacionais, financeiras e de planejamento.',
  },
  {
    icon: FileText,
    title: 'Licenciamento Ambiental',
    description: 'Condução completa do processo de licenciamento, controlando impactos e assegurando conformidade desde o início.',
  },
  {
    icon: Building,
    title: 'PAAT — Projetos de Aterro e Terraplanagem',
    description: 'Planejamento e autorização de operações de movimentação do solo para obras de infraestrutura.',
  },
  {
    icon: ShieldCheck,
    title: 'PAA — Projetos de Autorização Ambiental',
    description: 'Elaboração e acompanhamento de documentos para autorização de atividades que interferem nos recursos ambientais.',
  },
  {
    icon: ClipboardList,
    title: 'PGRSS — Resíduos de Serviços de Saúde',
    description: 'Plano de gerenciamento para estabelecimentos de saúde, conforme exigências ambientais e sanitárias.',
  },
  {
    icon: HardHat,
    title: 'PGRCC — Resíduos da Construção Civil',
    description: 'Documento técnico que identifica e gerencia resíduos de construções, reformas e demolições.',
  },
  {
    icon: Trash2,
    title: 'PGRS — Resíduos Sólidos',
    description: 'Plano que identifica tipologia e quantidade de resíduos e indica formas corretas de manejo.',
  },
  {
    icon: TreePine,
    title: 'EIV — Estudo de Impacto de Vizinhança',
    description: 'Avaliação dos impactos ambientais, sociais e urbanísticos de empreendimentos sobre a vizinhança.',
  },
  {
    icon: FileSearch,
    title: 'RAP — Relatório Ambiental Preliminar',
    description: 'Estudo técnico para análise da viabilidade ambiental de empreendimentos potencialmente impactantes.',
  },
  {
    icon: Leaf,
    title: 'EIA — Estudo de Impacto Ambiental',
    description: 'Instrumento de proteção ambiental para atividades com alto potencial poluidor.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções Completas em Consultoria Ambiental
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos um portfólio completo de serviços para garantir a conformidade ambiental 
            do seu empreendimento com agilidade e eficiência.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-soft card-hover border border-border/50"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
