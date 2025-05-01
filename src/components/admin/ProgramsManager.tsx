
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Trash, Edit, File } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  features: string;
}

const mockPrograms: Program[] = [
  {
    id: '1',
    title: 'Elementary Education',
    description: 'Our elementary program focuses on building strong foundations in core subjects while nurturing curiosity and creativity.',
    features: 'Small class sizes, Personalized learning, Arts integration'
  },
  {
    id: '2',
    title: 'Middle School Program',
    description: 'The middle school program bridges elementary and high school, guiding students through a crucial developmental period.',
    features: 'Project-based learning, Leadership development, Advisory program'
  }
];

const ProgramsManager = () => {
  const [programs, setPrograms] = useState<Program[]>(mockPrograms);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProgram, setCurrentProgram] = useState<Program | null>(null);
  const { toast } = useToast();

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');

  const handleAddNew = () => {
    setIsEditing(false);
    setCurrentProgram(null);
    setTitle('');
    setDescription('');
    setFeatures('');
  };

  const handleEdit = (program: Program) => {
    setIsEditing(true);
    setCurrentProgram(program);
    setTitle(program.title);
    setDescription(program.description);
    setFeatures(program.features);
  };

  const handleDelete = (id: string) => {
    setPrograms(programs.filter(program => program.id !== id));
    toast({
      title: "Program Deleted",
      description: "The academic program has been removed.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && currentProgram) {
      // Update existing
      const updatedPrograms = programs.map(program => 
        program.id === currentProgram.id ? 
          { ...program, title, description, features } : 
          program
      );
      setPrograms(updatedPrograms);
      toast({
        title: "Program Updated",
        description: "The academic program has been updated successfully.",
      });
    } else {
      // Add new
      const newProgram: Program = {
        id: Date.now().toString(),
        title,
        description,
        features
      };
      setPrograms([...programs, newProgram]);
      toast({
        title: "Program Added",
        description: "The new academic program has been added successfully.",
      });
    }
    
    // Reset form
    setTitle('');
    setDescription('');
    setFeatures('');
    setIsEditing(false);
    setCurrentProgram(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Manage Academic Programs</h2>
        <Button onClick={handleAddNew}>Add New Program</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? 'Edit Program' : 'Add Academic Program'}</CardTitle>
          <CardDescription>
            {isEditing ? 'Update program details.' : 'Create a new academic program or course offering.'}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Program Title</Label>
              <Input 
                id="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter program title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Program Description</Label>
              <Textarea 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the academic program"
                required
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="features">Key Features</Label>
              <Textarea 
                id="features"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                placeholder="List key features, one per line or comma separated"
                rows={2}
              />
              <p className="text-xs text-gray-500">Enter key features separated by commas</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => {
                setIsEditing(false);
                setCurrentProgram(null);
                setTitle('');
                setDescription('');
                setFeatures('');
              }}>
                Cancel
              </Button>
              <Button type="submit">{isEditing ? 'Save Changes' : 'Add Program'}</Button>
            </div>
          </CardFooter>
        </form>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-4">Current Programs</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Program</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {programs.map((program) => (
              <TableRow key={program.id}>
                <TableCell className="font-medium">{program.title}</TableCell>
                <TableCell className="max-w-md truncate">{program.description}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(program)}>
                      <Edit size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(program.id)}>
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

export default ProgramsManager;
