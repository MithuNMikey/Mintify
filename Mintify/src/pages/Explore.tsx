import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NFTCard from '@/components/NFTCard';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Slider 
} from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { CheckIcon, ChevronDownIcon, FilterIcon } from 'lucide-react';

// Mock data for NFTs with Web3/blockchain/NFT-related image URLs
const mockNFTs = [
  {
    id: '1',
    name: 'Cosmic Voyagers #001',
    image: 'https://images.unsplash.com/photo-1644760152927-0d6639c99b09?auto=format&fit=crop&w=800&q=80',
    price: 0.89,
    currency: 'ETH',
    creator: 'cosmic_artist',
    likes: 432,
    views: 1256
  },
  {
    id: '2',
    name: 'Neon Dystopia #054',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80',
    price: 1.25,
    currency: 'ETH',
    creator: 'neon_creator',
    likes: 321,
    views: 982
  },
  {
    id: '3',
    name: 'Abstract Dreams #212',
    image: 'https://images.unsplash.com/photo-1647507422958-23af8e3bcc9c?auto=format&fit=crop&w=800&q=80',
    price: 0.55,
    currency: 'ETH',
    creator: 'dream_factory',
    likes: 189,
    views: 703
  },
  {
    id: '4',
    name: 'Digital Wilderness #078',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=800&q=80',
    price: 2.1,
    currency: 'ETH',
    creator: 'wild_digital',
    likes: 567,
    views: 1432
  },
  {
    id: '5',
    name: 'Cyber Punks #042',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80',
    price: 3.2,
    currency: 'ETH',
    creator: 'cyber_creator',
    likes: 982,
    views: 4532
  },
  {
    id: '6',
    name: 'Mystic Realms #099',
    image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?auto=format&fit=crop&w=800&q=80',
    price: 1.8,
    currency: 'ETH',
    creator: 'mystic_arts',
    likes: 765,
    views: 2189
  },
  {
    id: '7',
    name: 'Future Worlds #133',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
    price: 0.75,
    currency: 'ETH',
    creator: 'future_labs',
    likes: 345,
    views: 1298
  },
  {
    id: '8',
    name: 'Genesis Collection #001',
    image: 'https://images.unsplash.com/photo-1639803781576-607aaf1e3f94?auto=format&fit=crop&w=800&q=80',
    price: 5.4,
    currency: 'ETH',
    creator: 'genesis_nft',
    likes: 1234,
    views: 5678
  }
];

const Explore = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Explore NFTs</h1>
            <Button 
              variant="outline"
              className="md:hidden flex items-center gap-2"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <FilterIcon className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Sidebar (hidden on mobile) */}
            <div className={`md:w-1/4 md:block ${filterOpen ? 'block' : 'hidden'}`}>
              <div className="glass-card p-5 rounded-xl sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Filters</h3>
                
                <Accordion type="single" collapsible defaultValue="price">
                  <AccordionItem value="price" className="border-b border-white/10">
                    <AccordionTrigger className="text-base py-3">Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="py-2">
                        <Slider
                          defaultValue={[0, 10]}
                          max={10}
                          step={0.1}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="my-6"
                        />
                        <div className="flex justify-between items-center text-sm">
                          <span>{priceRange[0]} ETH</span>
                          <span>{priceRange[1]} ETH</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="collections" className="border-b border-white/10">
                    <AccordionTrigger className="text-base py-3">Collections</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 py-2">
                        {['Cosmic Voyagers', 'Neon Dystopia', 'Abstract Dreams', 'Digital Wilderness'].map((collection) => (
                          <div key={collection} className="flex items-center">
                            <div className="flex h-5 items-center">
                              <input
                                id={`collection-${collection}`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-white/20 text-nft-primary"
                              />
                            </div>
                            <label
                              htmlFor={`collection-${collection}`}
                              className="ml-2 text-sm font-medium"
                            >
                              {collection}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="categories" className="border-b border-white/10">
                    <AccordionTrigger className="text-base py-3">Categories</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 py-2">
                        {['Art', 'Photography', 'Music', 'Games'].map((category) => (
                          <div key={category} className="flex items-center">
                            <div className="flex h-5 items-center">
                              <input
                                id={`category-${category}`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-white/20 text-nft-primary"
                              />
                            </div>
                            <label
                              htmlFor={`category-${category}`}
                              className="ml-2 text-sm font-medium"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="chains" className="border-b border-white/10">
                    <AccordionTrigger className="text-base py-3">Blockchain</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 py-2">
                        {['Ethereum', 'Polygon', 'Base', 'Solana'].map((chain) => (
                          <div key={chain} className="flex items-center">
                            <div className="flex h-5 items-center">
                              <input
                                id={`chain-${chain}`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-white/20 text-nft-primary"
                              />
                            </div>
                            <label
                              htmlFor={`chain-${chain}`}
                              className="ml-2 text-sm font-medium"
                            >
                              {chain}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="mt-6">
                  <Button className="w-full nft-button">Apply Filters</Button>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
                <Tabs defaultValue="all" className="w-full md:w-auto">
                  <TabsList className="bg-muted/20">
                    <TabsTrigger value="all">All NFTs</TabsTrigger>
                    <TabsTrigger value="art">Art</TabsTrigger>
                    <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
                    <TabsTrigger value="photography">Photography</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select defaultValue="recent">
                    <SelectTrigger className="w-40 bg-card/50">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Recently Added</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {mockNFTs.map((nft) => (
                  <NFTCard
                    key={nft.id}
                    id={nft.id}
                    name={nft.name}
                    image={nft.image}
                    price={nft.price}
                    currency={nft.currency}
                    creator={nft.creator}
                    likes={nft.likes}
                    views={nft.views}
                  />
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button variant="outline" className="px-8 py-2 border-white/20 bg-white/5 hover:bg-white/10">
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
