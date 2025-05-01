
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminNavbar from '@/components/admin/AdminNavbar';
import NewsFeed from '@/components/admin/NewsFeed';
import ProgramsManager from '@/components/admin/ProgramsManager';
import FacultyManager from '@/components/admin/FacultyManager';
import AboutManager from '@/components/admin/AboutManager';
import HeroManager from '@/components/admin/HeroManager';

const Admin = () => {
  // Basic auth state - in a real app, this would use a proper authentication system
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('admin_authenticated') === 'true';
  });

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar onLogout={handleLogout} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-school-blue-dark">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your website content</p>
        </div>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="hero">Hero Section</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="news">News & Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hero">
            <HeroManager />
          </TabsContent>
          
          <TabsContent value="about">
            <AboutManager />
          </TabsContent>
          
          <TabsContent value="programs">
            <ProgramsManager />
          </TabsContent>
          
          <TabsContent value="faculty">
            <FacultyManager />
          </TabsContent>
          
          <TabsContent value="news">
            <NewsFeed />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
