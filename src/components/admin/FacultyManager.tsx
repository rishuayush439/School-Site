
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Trash, Edit, Image } from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

const mockFaculty: FacultyMember[] = [
  {
    id: '1',
    name: 'Dr. Emily Johnson',
    position: 'Principal',
    bio: 'Dr. Johnson has over 15 years of experience in education leadership and is committed to fostering a dynamic learning environment.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '2',
    name: 'Prof. Michael Rodriguez',
    position: 'Science Department Head',
    bio: 'With a Ph.D. in Physics and 10 years of teaching experience, Prof. Rodriguez leads our award-winning science program.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const FacultyManager = () => {
  const [faculty, setFaculty] = useState<FacultyMember[]>(mockFaculty);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState<FacultyMember | null>(null);
  const { toast } = useToast();

  // Form state
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');

  const handleAddNew = () => {
    setIsEditing(false);
    setCurrentMember(null);
    setName('');
    setPosition('');
    setBio('');
    setImage('');
  };

  const handleEdit = (member: FacultyMember) => {
    setIsEditing(true);
    setCurrentMember(member);
    setName(member.name);
    setPosition(member.position);
    setBio(member.bio);
    setImage(member.image);
  };

  const handleDelete = (id: string) => {
    setFaculty(faculty.filter(member => member.id !== id));
    toast({
      title: "Faculty Removed",
      description: "The faculty member has been removed successfully.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && currentMember) {
      // Update existing
      const updatedFaculty = faculty.map(member => 
        member.id === currentMember.id ? 
          { ...member, name, position, bio, image } : 
          member
      );
      setFaculty(updatedFaculty);
      toast({
        title: "Faculty Updated",
        description: "The faculty information has been updated successfully.",
      });
    } else {
      // Add new
      const newMember: FacultyMember = {
        id: Date.now().toString(),
        name,
        position,
        bio,
        image: image || 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      };
      setFaculty([...faculty, newMember]);
      toast({
        title: "Faculty Added",
        description: "The new faculty member has been added successfully.",
      });
    }
    
    // Reset form
    setName('');
    setPosition('');
    setBio('');
    setImage('');
    setIsEditing(false);
    setCurrentMember(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Manage Faculty & Staff</h2>
        <Button onClick={handleAddNew}>Add New Faculty</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? 'Edit Faculty Member' : 'Add Faculty Member'}</CardTitle>
          <CardDescription>
            {isEditing ? 'Update faculty information.' : 'Add a new faculty or staff member.'}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input 
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Enter position or title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea 
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Enter short biography"
                required
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Profile Image URL</Label>
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
              <p className="text-xs text-gray-500">Recommended size: 500x500 pixels</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => {
                setIsEditing(false);
                setCurrentMember(null);
                setName('');
                setPosition('');
                setBio('');
                setImage('');
              }}>
                Cancel
              </Button>
              <Button type="submit">{isEditing ? 'Save Changes' : 'Add Faculty'}</Button>
            </div>
          </CardFooter>
        </form>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-4">Current Faculty & Staff</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {faculty.map((member) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.position}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(member)}>
                      <Edit size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(member.id)}>
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

export default FacultyManager;
