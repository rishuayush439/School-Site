
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Elementary School",
      grades: "K-5",
      description: "Our elementary program fosters curiosity and builds a strong foundation in core subjects while nurturing social and emotional development.",
      features: ["Project-based learning", "Reading workshops", "STEM integration", "Arts exploration"]
    },
    {
      title: "Middle School",
      grades: "6-8",
      description: "Middle school students develop critical thinking and self-awareness during these formative years through an engaging, challenging curriculum.",
      features: ["Advanced math pathways", "Scientific inquiry", "Literary analysis", "Leadership development"]
    },
    {
      title: "High School",
      grades: "9-12",
      description: "Our college preparatory curriculum emphasizes academic excellence, intellectual growth, and preparation for future success.",
      features: ["AP/Honors courses", "College counseling", "Capstone projects", "Career internships"]
    },
    {
      title: "Arts Program",
      grades: "All grades",
      description: "Students explore creativity through a comprehensive arts curriculum including visual arts, music, theater, and digital media.",
      features: ["Studio instruction", "Performance opportunities", "Portfolio development", "Artist residencies"]
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-school-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Academic Programs</h2>
          <p className="text-lg text-gray-700">
            Our comprehensive educational programs are designed to challenge and inspire students at every level, 
            fostering intellectual growth and a love of learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-school-blue-dark">{program.title}</CardTitle>
                  <Badge className="bg-school-purple text-white">{program.grades}</Badge>
                </div>
                <CardDescription className="text-gray-600 pt-2">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-school-purple mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-school-blue text-school-blue hover:bg-school-blue hover:text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="section-subtitle mb-6">Specialized Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-school-blue-dark mb-3">Advanced Placement</h4>
              <p className="text-gray-700">
                Our extensive AP program offers 15+ courses, allowing students to earn college credit and stand out in the admission process.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-school-blue-dark mb-3">STEAM Initiative</h4>
              <p className="text-gray-700">
                Our integrated approach to Science, Technology, Engineering, Arts and Math prepares students for innovation and problem-solving.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-school-blue-dark mb-3">Global Studies</h4>
              <p className="text-gray-700">
                Students develop global awareness through language learning, international exchanges, and cross-cultural studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
