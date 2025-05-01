
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const NewsSection = () => {
  const currentDate = new Date();
  
  const news = [
    {
      title: "Spring Arts Festival Coming Next Month",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 2),
      category: "Events",
      excerpt: "Join us for our annual Spring Arts Festival featuring student performances, art exhibitions, and interactive workshops for the community.",
      image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Robotics Team Wins State Championship",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 5),
      category: "Achievements",
      excerpt: "Our robotics team 'TechTitans' secured first place at the State Robotics Championship and will advance to nationals in May.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22731c2eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "New Science Wing Construction Begins",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 10),
      category: "Campus",
      excerpt: "Construction has begun on our new state-of-the-art science wing, featuring advanced laboratories and classroom technology.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89f597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Events":
        return "bg-blue-100 text-blue-800";
      case "Achievements":
        return "bg-green-100 text-green-800";
      case "Campus":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="news" className="py-16 md:py-24 bg-school-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">News & Announcements</h2>
          <p className="text-lg text-gray-700">
            Stay updated with the latest happenings, achievements, and important announcements from our school community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {news.map((item, index) => (
            <Card key={index} className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={cn("font-normal", getCategoryColor(item.category))}>
                    {item.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                </div>
                <CardTitle className="text-xl font-bold text-school-blue-dark">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-school-blue hover:text-school-blue-dark hover:bg-blue-50 p-0">
                  Read more →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-school-blue hover:bg-school-blue-dark text-white">
            View All News
          </Button>
        </div>

        <div className="mt-16 p-6 bg-white rounded-lg shadow-md">
          <h3 className="section-subtitle text-center mb-6">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex-shrink-0 w-16 h-16 bg-school-purple-light rounded-lg flex flex-col items-center justify-center text-white">
                <span className="font-bold text-xl">15</span>
                <span className="text-xs">MAY</span>
              </div>
              <div>
                <h4 className="font-semibold text-school-blue-dark">Spring Concert</h4>
                <p className="text-gray-600 text-sm">7:00 PM - Main Auditorium</p>
                <p className="text-gray-700 mt-1">Annual performance by our music department featuring choir, band, and orchestra.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4">
              <div className="flex-shrink-0 w-16 h-16 bg-school-blue rounded-lg flex flex-col items-center justify-center text-white">
                <span className="font-bold text-xl">22</span>
                <span className="text-xs">MAY</span>
              </div>
              <div>
                <h4 className="font-semibold text-school-blue-dark">Science Fair</h4>
                <p className="text-gray-600 text-sm">9:00 AM - Science Building</p>
                <p className="text-gray-700 mt-1">Students present their research projects in our annual Science & Innovation Fair.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
