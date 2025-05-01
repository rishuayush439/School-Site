
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const FacultySection = () => {
  const faculty = [
    {
      name: "Dr. Eleanor Wright",
      role: "Principal",
      image: "https://i.pravatar.cc/150?img=32",
      bio: "Ed.D in Educational Leadership with over 20 years of experience in education administration.",
      initials: "EW"
    },
    {
      name: "Prof. Michael Chen",
      role: "Science Department Chair",
      image: "https://i.pravatar.cc/150?img=11",
      bio: "Ph.D in Physics from Stanford University, former research scientist at NASA.",
      initials: "MC"
    },
    {
      name: "Dr. Amara Johnson",
      role: "English Department Chair",
      image: "https://i.pravatar.cc/150?img=23",
      bio: "Ph.D in Literature from Columbia University, published author of three books.",
      initials: "AJ"
    },
    {
      name: "Mr. Robert Garcia",
      role: "Mathematics Teacher",
      image: "https://i.pravatar.cc/150?img=53",
      bio: "M.S. in Mathematics, recipient of National Teacher of the Year Award.",
      initials: "RG"
    },
    {
      name: "Ms. Sarah Patel",
      role: "Art Director",
      image: "https://i.pravatar.cc/150?img=44",
      bio: "MFA from Rhode Island School of Design, practicing artist with exhibits nationwide.",
      initials: "SP"
    },
    {
      name: "Dr. Thomas Wilson",
      role: "Athletic Director",
      image: "https://i.pravatar.cc/150?img=60",
      bio: "Former professional athlete, Ph.D in Sports Science, certified strength trainer.",
      initials: "TW"
    }
  ];

  return (
    <section id="faculty" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Faculty</h2>
          <p className="text-lg text-gray-700">
            Our exceptional educators bring passion, expertise, and dedication to the classroom every day, 
            inspiring students to achieve their greatest potential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-bold text-school-blue-dark">{member.name}</CardTitle>
                <CardDescription className="text-school-purple font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-school-blue-dark font-semibold">
            Our faculty includes 45+ dedicated educators, with 80% holding advanced degrees in their fields.
          </p>
          <p className="mt-4 text-gray-700">
            Evergreen Academy educators regularly participate in professional development to stay current with 
            the latest educational research and practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
