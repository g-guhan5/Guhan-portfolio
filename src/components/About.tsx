import { Code2, Lightbulb, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Coding',
      description: 'I have a basic understanding of coding and basic web development concepts',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Always eager to learn and implement technologies and designing',
    },
    {
      icon: Lightbulb,
      title: 'Creative',
      description: 'Video editor focused on creating impactful and professional content.',
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fresher Computer Science student interested in Data Analyst and  Web Development, eager to
learn and contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-primary rounded-lg mb-4">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
