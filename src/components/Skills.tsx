import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'HTML/CSS', 'Tailwind CSS', 'JavaScript'],
    },
    {
      category: 'Technical Tools', skills: ['Excel', 'Power BI', 'Pandas', 'NumPy']
    },
    {
      category: 'Other Tools', skills: ['Photoshop', 'Capcut Desktop', 'Picsart']
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I have a growing set of skills in Data Analyst, web development,Graphic Design and video editing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-slide-in-left"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
