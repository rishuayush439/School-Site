
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Image } from 'lucide-react';

// Sample content
const initialAbout = {
  heading: 'Excellence in Education',
  subheading: 'Preparing Students for Success Since 1985',
  mission: 'At Evergreen Academy, our mission is to provide a transformative educational experience that nurtures intellectual curiosity, fosters personal growth, and inspires a lifelong commitment to learning and global citizenship.',
  vision: 'To be a leading educational institution that empowers students to become thoughtful, creative, and responsible individuals who contribute meaningfully to society.',
  values: 'Academic Excellence, Character Development, Community Engagement, Diversity and Inclusion',
  imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

const AboutManager = () => {
  const [about, setAbout] = useState(initialAbout);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Content Updated",
      description: "About section has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Edit About Section</h2>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>School Information</CardTitle>
            <CardDescription>
              Update the information displayed on the About section of your website.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="heading">Main Heading</Label>
              <Input 
                id="heading" 
                value={about.heading}
                onChange={(e) => setAbout({...about, heading: e.target.value})}
                placeholder="Enter main heading"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subheading">Subheading</Label>
              <Input 
                id="subheading"
                value={about.subheading}
                onChange={(e) => setAbout({...about, subheading: e.target.value})}
                placeholder="Enter subheading"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mission">Mission Statement</Label>
              <Textarea 
                id="mission"
                value={about.mission}
                onChange={(e) => setAbout({...about, mission: e.target.value})}
                placeholder="Enter mission statement"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="vision">Vision</Label>
              <Textarea 
                id="vision"
                value={about.vision}
                onChange={(e) => setAbout({...about, vision: e.target.value})}
                placeholder="Enter vision statement"
                rows={2}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="values">Core Values</Label>
              <Textarea 
                id="values"
                value={about.values}
                onChange={(e) => setAbout({...about, values: e.target.value})}
                placeholder="Enter core values, comma separated"
                rows={2}
              />
              <p className="text-xs text-gray-500">Enter values separated by commas</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Featured Image URL</Label>
              <div className="flex gap-2">
                <Input 
                  id="imageUrl"
                  value={about.imageUrl}
                  onChange={(e) => setAbout({...about, imageUrl: e.target.value})}
                  placeholder="Enter image URL"
                  className="flex-1"
                />
                <Button type="button" variant="outline" className="flex items-center gap-2">
                  <Image size={16} />
                  Browse
                </Button>
              </div>
              <p className="text-xs text-gray-500">Recommended size: 800x600 pixels</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>How your content will appear on the website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-bold text-school-blue-dark">{about.heading}</h3>
              <p className="text-lg text-school-purple mt-1">{about.subheading}</p>
              
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Our Mission</h4>
                  <p className="text-gray-600">{about.mission}</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Our Vision</h4>
                  <p className="text-gray-600">{about.vision}</p>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">Core Values</h4>
                <div className="flex flex-wrap gap-2">
                  {about.values.split(',').map((value, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {value.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutManager;
