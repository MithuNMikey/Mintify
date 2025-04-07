
import React from 'react';
import { Link } from "react-router-dom";
import { 
  Palette, 
  Camera, 
  Gamepad2, 
  Music, 
  Trophy, 
  Film, 
  Building, 
  Ticket 
} from "lucide-react";

const categories = [
  {
    name: 'Art',
    icon: <Palette className="h-6 w-6" />,
    color: 'from-purple-500 to-blue-500',
    link: '/category/art'
  },
  {
    name: 'Photography',
    icon: <Camera className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-400',
    link: '/category/photography'
  },
  {
    name: 'Gaming',
    icon: <Gamepad2 className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-400',
    link: '/category/gaming'
  },
  {
    name: 'Music',
    icon: <Music className="h-6 w-6" />,
    color: 'from-red-500 to-pink-500',
    link: '/category/music'
  },
  {
    name: 'Sports',
    icon: <Trophy className="h-6 w-6" />,
    color: 'from-orange-500 to-amber-400',
    link: '/category/sports'
  },
  {
    name: 'Virtual Worlds',
    icon: <Film className="h-6 w-6" />,
    color: 'from-violet-500 to-purple-400',
    link: '/category/virtual-worlds'
  },
  {
    name: 'Real Estate',
    icon: <Building className="h-6 w-6" />,
    color: 'from-cyan-500 to-blue-400',
    link: '/category/real-estate'
  },
  {
    name: 'Collectibles',
    icon: <Ticket className="h-6 w-6" />,
    color: 'from-amber-500 to-yellow-400',
    link: '/category/collectibles'
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.link}
              className="NFT-hover"
            >
              <div className="glass-card flex flex-col items-center justify-center text-center p-6 h-full aspect-square rounded-xl overflow-hidden">
                <div className={`p-3 rounded-full mb-3 bg-gradient-to-br ${category.color}`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
