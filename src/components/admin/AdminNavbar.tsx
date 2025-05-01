
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

type AdminNavbarProps = {
  onLogout: () => void;
};

const AdminNavbar = ({ onLogout }: AdminNavbarProps) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-school-blue" />
            <span className="ml-2 text-xl font-bold text-school-blue-dark">Evergreen Admin</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-school-blue transition-colors">
              View Site
            </Link>
            <Button 
              variant="ghost" 
              onClick={onLogout}
              className="text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
