import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'guhanguhan5070@gmail.com',
      link: 'mailto:guhanguhan5070@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8825607013',
      link: 'tel:+91 8825607013',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamilnadu, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/g-guhan5',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/guhan-g-17509530a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or partnerships.
              Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-gradient-primary rounded-lg mb-3">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    {item.label}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 animate-fade-in">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex justify-center gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
              <p className="text-muted-foreground">
                Or send me an email directly at{' '}
                <a
                  href="mailto:your.email@example.com"
                  className="text-primary hover:underline"
                >
                  guhanguhan5070@gmail.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
