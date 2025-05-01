
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Trash, Edit, File, Image } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Spring Arts Festival Coming Next Month',
    date: new Date().toISOString(),
    category: 'Events',
    excerpt: 'Join us for our annual Spring Arts Festival featuring student performances, art exhibitions, and interactive workshops for the community.',
    image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Robotics Team Wins State Championship',
    date: new Date().toISOString(),
    category: 'Achievements',
    excerpt: 'Our robotics team "TechTitans" secured first place at the State Robotics Championship and will advance to nationals in May.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22731c2eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const NewsFeed = () => {
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<NewsItem | null>(null);
  const { toast } = useToast();

  // Form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Events');
  const [excerpt, setExcerpt] = useState('');
  const [image, setImage] = useState('');

  const handleAddNew = () => {
    setIsEditing(false);
    setCurrentItem(null);
    setTitle('');
    setCategory('Events');
    setExcerpt('');
    setImage('');
  };

  const handleEdit = (item: NewsItem) => {
    setIsEditing(true);
    setCurrentItem(item);
    setTitle(item.title);
    setCategory(item.category);
    setExcerpt(item.excerpt);
    setImage(item.image);
  };

  const handleDelete = (id: string) => {
    setNews(news.filter(item => item.id !== id));
    toast({
      title: "Item Deleted",
      description: "The news item has been removed.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && currentItem) {
      // Update existing
      const updatedNews = news.map(item => 
        item.id === currentItem.id ? 
          { ...item, title, category, excerpt, image } : 
          item
      );
      setNews(updatedNews);
      toast({
        title: "Item Updated",
        description: "The news item has been updated successfully.",
      });
    } else {
      // Add new
      const newItem: NewsItem = {
        id: Date.now().toString(),
        title,
        category,
        date: new Date().toISOString(),
        excerpt,
        image: image || 'https://images.unsplash.com/photo-1581094794329-c8112a89f597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      };
      setNews([...news, newItem]);
      toast({
        title: "Item Added",
        description: "The new item has been added successfully.",
      });
    }
    
    // Reset form
    setTitle('');
    setCategory('Events');
    setExcerpt('');
    setImage('');
    setIsEditing(false);
    setCurrentItem(null);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Manage News & Announcements</h2>
        <Button onClick={handleAddNew}>Add New Item</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? 'Edit News Item' : 'Add News Item'}</CardTitle>
          <CardDescription>
            {isEditing ? 'Update the details of this news item.' : 'Create a new news or announcement item.'}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter news title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Events">Events</SelectItem>
                  <SelectItem value="Achievements">Achievements</SelectItem>
                  <SelectItem value="Campus">Campus</SelectItem>
                  <SelectItem value="Academic">Academic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Content</Label>
              <Textarea 
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Enter news content"
                required
                rows={4}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <div className="flex gap-2">
                <Input 
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Enter image URL"
                  className="flex-1"
                />
                <Button type="button" variant="outline" className="flex items-center gap-2">
                  <Image size={16} />
                  Browse
                </Button>
              </div>
              <p className="text-xs text-gray-500">Recommended size: 800x400 pixels</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => {
                setIsEditing(false);
                setCurrentItem(null);
                setTitle('');
                setCategory('Events');
                setExcerpt('');
                setImage('');
              }}>
                Cancel
              </Button>
              <Button type="submit">{isEditing ? 'Save Changes' : 'Add Item'}</Button>
            </div>
          </CardFooter>
        </form>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-4">Current News & Announcements</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{formatDate(item.date)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(item)}>
                      <Edit size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(item.id)}>
                      <Trash size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NewsFeed;
