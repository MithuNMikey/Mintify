
import React from 'react';
import { Users, ShoppingBag, Layers, BarChart3 } from 'lucide-react';

const stats = [
  {
    title: 'Creators',
    value: '15K+',
    icon: <Users className="h-8 w-8" />,
    description: 'Artists worldwide'
  },
  {
    title: 'NFTs',
    value: '200K+',
    icon: <Layers className="h-8 w-8" />,
    description: 'Digital collectibles'
  },
  {
    title: 'Trades',
    value: '$42M+',
    icon: <ShoppingBag className="h-8 w-8" />,
    description: 'Trading volume'
  },
  {
    title: 'Growth',
    value: '32%',
    icon: <BarChart3 className="h-8 w-8" />,
    description: 'Monthly increase'
  }
];

const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl"
            >
              <div className="bg-gradient-to-r from-nft-primary to-nft-secondary p-3 rounded-lg inline-block mb-4">
                {stat.icon}
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-3xl font-bold">{stat.value}</h3>
              </div>
              <p className="text-lg font-medium">{stat.title}</p>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
