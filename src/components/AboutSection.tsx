
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Users, GraduationCap, School } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { value: '50+', label: 'Years of Excellence', icon: School },
    { value: '95%', label: 'College Acceptance Rate', icon: GraduationCap },
    { value: '15:1', label: 'Student-Teacher Ratio', icon: Users },
    { value: '40+', label: 'Academic Programs', icon: Book },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="section-title">About Evergreen Academy</h2>
          <p className="text-lg text-gray-700 mb-6">
            Since 1970, we've been committed to providing an exceptional educational experience
            that inspires students to develop intellectually, socially, and ethically.
          </p>
          <p className="text-lg text-gray-700">
            Our dedicated faculty, rigorous curriculum, and supportive community create an
            environment where every student can thrive and achieve their full potential.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-school-gray border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-10 w-10 text-school-purple" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-school-blue-dark mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h3 className="section-subtitle">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Evergreen Academy, we are dedicated to inspiring a lifelong love of learning, 
              fostering intellectual curiosity, and empowering students to become thoughtful, 
              responsible global citizens who make meaningful contributions to society.
            </p>
            <h3 className="section-subtitle">Our Vision</h3>
            <p className="text-gray-700">
              We envision being a leading educational institution that nurtures the whole child, 
              balancing academic excellence with character development, preparing students to 
              meet the challenges of a rapidly changing world with confidence and integrity.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Campus building" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Students working together" 
                className="rounded-lg shadow-md h-48 w-full object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Library" 
                className="rounded-lg shadow-md h-48 w-full object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Science lab" 
                className="rounded-lg shadow-md h-48 w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
