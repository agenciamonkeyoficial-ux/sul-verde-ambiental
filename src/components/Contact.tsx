import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
              Contato
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fale com Nossa{' '}
              <span className="text-primary">Equipe de Especialistas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato conosco para tirar dúvidas, solicitar orçamentos ou 
              agendar uma reunião com nossa equipe técnica.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-whatsapp/10 rounded-xl hover:bg-whatsapp/15 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-whatsapp/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-whatsapp" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-whatsapp transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-muted-foreground text-sm">(41) 99999-9999</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-accent rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <p className="text-muted-foreground text-sm">contato@sulverdeambiental.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-accent rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-muted-foreground text-sm">Curitiba, PR - Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-accent rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horário de Atendimento</p>
                  <p className="text-muted-foreground text-sm">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-card">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Seu Nome *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu E-mail *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background"
                />
                <Input
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>
              <Textarea
                name="message"
                placeholder="Sua Mensagem *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-background resize-none"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
