import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Guhan-Portfolio',
      description:
        'A personal portfolio built with React.js, highlighting my skills, creative tools, and projects in one interactive space.',
      technologies: ['React.js', 'Tailwind css'],
      github: 'https://github.com/g-guhan5/Guhan-portfolio.git',
      live: '#',
    },
    {
      title: 'MOBILE PHONE DETECTION SYSTEM',
      description:
        'Mini Project - YOLOv8-Based Mobile Detection — A Step Toward Intelligent Monitoring Systems.',
      technologies: ['Python','OpenCv'],
      github: 'https://github.com/g-guhan5/Mobilephone-Detection.py.git',
      live: '#',
    },
    {
      title: 'AI-POWERED PENETRATION TESTING',
      description:
        'Major Project - AI-Driven Penetration Testing Framework for Proactive Network & System Security.',
      technologies: [],
      github: '#',
      live: '#',
    },
    {
      title: 'Web Development Intern – Rategle Technologies',
      description:
        'Completed a short-term internship focused on frontend development, where I gained basic knowledge of coding and web development concepts.',
      technologies: ['React.js','Tailwind css'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
