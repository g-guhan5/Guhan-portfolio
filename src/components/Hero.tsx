import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Guhan G
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Frontend Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={25} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
