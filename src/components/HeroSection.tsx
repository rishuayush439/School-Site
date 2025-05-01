
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, Clock } from 'lucide-react';

const HeroSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!date || !name || !email || !timeSlot) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Process the form (in a real app, this would send data to a server)
    toast({
      title: "Visit scheduled!",
      description: `Your visit is scheduled for ${date.toLocaleDateString()} at ${timeSlot}.`,
    });
    
    // Reset the form
    setDate(undefined);
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
    setTimeSlot('');
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-school-blue to-school-purple py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgxMmExIDEgMCAwIDEgMCAySDM4Yy0xLjEgMC0yLS45LTItMnptMC0xMmMwLTEuMS45LTIgMi0yaDEyYTEgMSAwIDAgMSAwIDJIMzhjLTEuMSAwLTItLjktMi0yek0xMiAzNGMwLTEuMS45LTIgMi0yaDEyYTEgMSAwIDAgMSAwIDJIMTRjLTEuMSAwLTItLjktMi0yek0xMiAyMmMwLTEuMS45LTIgMi0yaDEyYTEgMSAwIDAgMSAwIDJIMTRjLTEuMSAwLTItLjktMi0yelwiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Nurturing Minds, Building Futures
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg mx-auto md:mx-0">
              Evergreen Academy provides a world-class education that prepares students for success in a rapidly changing world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-white text-school-blue hover:bg-gray-100 text-lg px-6 py-6">
                Explore Programs
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="border-white text-white bg-white/10 hover:bg-white/20 text-lg px-6 py-6"
                  >
                    Schedule a Visit
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-[425px] max-h-[90vh] overflow-y-auto">
                  <form onSubmit={handleSubmit}>
                    <DialogHeader>
                      <DialogTitle>Schedule a Campus Visit</DialogTitle>
                      <DialogDescription>
                        Select a date and time for your campus tour. Our team will get in touch to confirm your appointment.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name*</Label>
                        <Input 
                          id="name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name" 
                          required
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email*</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email" 
                          required
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter your phone number" 
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label>Preferred Visit Date*</Label>
                        <div className="border rounded-md p-2 overflow-auto">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => {
                              // Disable weekends and past dates
                              const day = date.getDay();
                              return (
                                day === 0 || 
                                day === 6 || 
                                date < new Date(new Date().setHours(0, 0, 0, 0))
                              );
                            }}
                            className="mx-auto"
                          />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>Weekdays only</span>
                        </div>
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="time">Preferred Time*</Label>
                        <div className="relative">
                          <Clock className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            required
                          >
                            <option value="">Select a time</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="comments">Additional Comments</Label>
                        <Textarea 
                          id="comments"
                          value={comments} 
                          onChange={(e) => setComments(e.target.value)}
                          placeholder="Any questions or special requests?"
                          className="resize-none"
                          rows={3}
                        />
                      </div>
                    </div>
                    
                    <DialogFooter className="mt-4">
                      <Button type="submit" className="bg-school-blue hover:bg-school-blue-dark">
                        Submit Request
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            <div className="relative rounded-lg overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Students in classroom"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-semibold text-xl">Creating tomorrow's leaders today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
