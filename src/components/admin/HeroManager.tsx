
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Image } from 'lucide-react';

// Sample content
const initialHero = {
  heading: 'Nurturing Minds, Building Futures',
  subheading: 'Evergreen Academy provides a world-class education that prepares students for success in a rapidly changing world.',
  buttonPrimary: 'Explore Programs',
  buttonSecondary: 'Schedule a Visit',
  imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  caption: 'Creating tomorrow\'s leaders today'
};

const HeroManager = () => {
  const [hero, setHero] = useState(initialHero);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Content Updated",
      description: "Hero section has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Edit Hero Section</h2>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Hero Content</CardTitle>
            <CardDescription>
              Update the content displayed on the homepage hero section.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="heading">Heading</Label>
              <Input 
                id="heading" 
                value={hero.heading}
                onChange={(e) => setHero({...hero, heading: e.target.value})}
                placeholder="Enter main heading"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subheading">Subheading</Label>
              <Textarea 
                id="subheading"
                value={hero.subheading}
                onChange={(e) => setHero({...hero, subheading: e.target.value})}
                placeholder="Enter subheading text"
                rows={2}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buttonPrimary">Primary Button Text</Label>
                <Input 
                  id="buttonPrimary"
                  value={hero.buttonPrimary}
                  onChange={(e) => setHero({...hero, buttonPrimary: e.target.value})}
                  placeholder="Enter button text"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="buttonSecondary">Secondary Button Text</Label>
                <Input 
                  id="buttonSecondary"
                  value={hero.buttonSecondary}
                  onChange={(e) => setHero({...hero, buttonSecondary: e.target.value})}
                  placeholder="Enter button text"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Hero Image URL</Label>
              <div className="flex gap-2">
                <Input 
                  id="imageUrl"
                  value={hero.imageUrl}
                  onChange={(e) => setHero({...hero, imageUrl: e.target.value})}
                  placeholder="Enter image URL"
                  className="flex-1"
                />
                <Button type="button" variant="outline" className="flex items-center gap-2">
                  <Image size={16} />
                  Browse
                </Button>
              </div>
              <p className="text-xs text-gray-500">Recommended size: 1200x800 pixels</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="caption">Image Caption</Label>
              <Input 
                id="caption"
                value={hero.caption}
                onChange={(e) => setHero({...hero, caption: e.target.value})}
                placeholder="Enter image caption"
              />
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
          <CardDescription>How your hero section will appear</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-school-blue to-school-purple p-6 text-white">
              <div className="max-w-md">
                <h1 className="text-3xl font-bold mb-3">{hero.heading}</h1>
                <p className="text-white/90 mb-4">{hero.subheading}</p>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-white text-school-blue hover:bg-gray-100">
                    {hero.buttonPrimary}
                  </Button>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10">
                    {hero.buttonSecondary}
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={hero.imageUrl} 
                alt="Hero preview" 
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3">
                <p className="text-white font-medium">{hero.caption}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroManager;
