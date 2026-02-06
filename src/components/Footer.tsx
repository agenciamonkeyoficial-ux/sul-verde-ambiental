import { Phone, Mail, MapPin, Leaf } from 'lucide-react';
import logo from '@/assets/logo-sul-verde.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="bg-primary py-12">
        <div className="container-custom px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Precisa de Consultoria Ambiental?
              </h3>
              <p className="text-primary-foreground/80">
                Entre em contato com nossa equipe de especialistas.
              </p>
            </div>
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:bg-background/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Fale Conosco Agora
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container-custom px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div className="lg:col-span-2">
              <img 
                src={logo} 
                alt="Sul Verde Ambiental" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-background/70 text-sm leading-relaxed max-w-md mb-4">
                Consultoria Ambiental, Gestão de Resíduos e Segurança do Trabalho. 
                Oferecemos soluções práticas, ágeis e eficazes para empresas e empreendimentos.
              </p>
              <div className="flex items-center gap-2 text-background/60 text-sm">
                <Leaf className="w-4 h-4" />
                <span>Meio Ambiente • Gestão de Resíduos</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-background mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-background/70 hover:text-background text-sm transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#quem-somos" className="text-background/70 hover:text-background text-sm transition-colors">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-background/70 hover:text-background text-sm transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#clientes" className="text-background/70 hover:text-background text-sm transition-colors">
                    Clientes
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-background/70 hover:text-background text-sm transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-background mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-background/70 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>(41) 99999-9999</span>
                </li>
                <li className="flex items-center gap-2 text-background/70 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>contato@sulverdeambiental.com.br</span>
                </li>
                <li className="flex items-start gap-2 text-background/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Curitiba, PR - Brasil</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-background/10 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-background/60 text-sm text-center md:text-left">
                © {currentYear} Sul Verde Ambiental. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  LGPD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
