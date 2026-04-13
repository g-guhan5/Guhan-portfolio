import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      icon: GraduationCap,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Your University Name',
      duration: '2021 - 2025',
      description: 'Relevant coursework: Data Structures, Algorithms, Database Management, Web Development, Machine Learning',
      achievement: 'CGPA: 8.5/10',
    },
    {
      icon: BookOpen,
      degree: 'Higher Secondary Education',
      institution: 'Your School Name',
      duration: '2019 - 2021',
      description: 'Science stream with Mathematics and Computer Science',
      achievement: 'Percentage: 92%',
    },
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'Full Stack Web Development - Coursera',
    'Machine Learning Specialization - Andrew Ng',
    'React - The Complete Guide',
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
          </div>

          <div className="space-y-6 mb-12">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className="p-6 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                    <edu.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground mb-2">{edu.description}</p>
                    <p className="text-accent font-semibold">{edu.achievement}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-accent rounded-lg">
                <Award className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <Card className="p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
