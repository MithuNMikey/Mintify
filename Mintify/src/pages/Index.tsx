
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CollectionSection from '@/components/CollectionSection';
import CategoriesSection from '@/components/CategoriesSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

// Mock data for trending and top collections with Web3/blockchain/NFT-related images
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

const topCollections = [
  {
    id: '5',
    name: 'Cyber Punks',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80',
    price: 3.2,
    currency: 'ETH',
    creator: 'cyber_creator',
    likes: 982,
    views: 4532
  },
  {
    id: '6',
    name: 'Mystic Realms',
    image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?auto=format&fit=crop&w=800&q=80',
    price: 1.8,
    currency: 'ETH',
    creator: 'mystic_arts',
    likes: 765,
    views: 2189
  },
  {
    id: '7',
    name: 'Future Worlds',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
    price: 0.75,
    currency: 'ETH',
    creator: 'future_labs',
    likes: 345,
    views: 1298
  },
  {
    id: '8',
    name: 'Genesis Collection',
    image: 'https://images.unsplash.com/photo-1639803781576-607aaf1e3f94?auto=format&fit=crop&w=800&q=80',
    price: 5.4,
    currency: 'ETH',
    creator: 'genesis_nft',
    likes: 1234,
    views: 5678
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <CollectionSection 
          title="Trending NFTs"
          description="The hottest NFTs trending right now"
          collections={trendingCollections}
          viewAllLink="/trending"
        />
        <CategoriesSection />
        <CollectionSection 
          title="Top Collections"
          description="The most valuable collections in the marketplace"
          collections={topCollections}
          viewAllLink="/top-collections"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
