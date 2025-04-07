import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import NFTCard from './NFTCard';
import { Link } from "react-router-dom";

// Mock data for trending collections with Web3/blockchain/NFT-related image URLs
const trendingCollections = [
  {
    id: '1',
    name: 'Cosmic Voyagers',
    image: 'https://images.unsplash.com/photo-1644760152927-0d6639c99b09?auto=format&fit=crop&w=800&q=80',
    price: 0.89,
    currency: 'ETH',
    creator: 'cosmic_artist',
    likes: 432,
    views: 1256
  },
  {
    id: '2',
    name: 'Neon Dystopia',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80',
    price: 1.25,
    currency: 'ETH',
    creator: 'neon_creator',
    likes: 321,
    views: 982
  },
  {
    id: '3',
    name: 'Abstract Dreams',
    image: 'https://images.unsplash.com/photo-1647507422958-23af8e3bcc9c?auto=format&fit=crop&w=800&q=80',
    price: 0.55,
    currency: 'ETH',
    creator: 'dream_factory',
    likes: 189,
    views: 703
  },
  {
    id: '4',
    name: 'Digital Wilderness',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=800&q=80',
    price: 2.1,
    currency: 'ETH',
    creator: 'wild_digital',
    likes: 567,
    views: 1432
  }
];

interface CollectionSectionProps {
  title: string;
  description?: string;
  collections: typeof trendingCollections;
  viewAllLink: string;
}

const CollectionSection = ({
  title,
  description,
  collections,
  viewAllLink
}: CollectionSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
          <Button asChild variant="ghost" className="text-muted-foreground">
            <Link to={viewAllLink}>
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <NFTCard
              key={collection.id}
              id={collection.id}
              name={collection.name}
              image={collection.image}
              price={collection.price}
              currency={collection.currency}
              creator={collection.creator}
              likes={collection.likes}
              views={collection.views}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
