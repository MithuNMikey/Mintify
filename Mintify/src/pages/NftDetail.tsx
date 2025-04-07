
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Heart,
  Share2,
  Eye,
  Tag,
  Clock,
  Shield,
  Info,
  BarChart3,
  List,
  RefreshCw
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Mock data with updated image URLs
const nftData = {
  id: '1',
  name: 'Cosmic Voyagers #001',
  description: 'A captivating piece from the Cosmic Voyagers collection, representing the boundless journey through the cosmos. This NFT combines ethereal elements with cosmic imagery to create a unique digital collectible.',
  image: 'https://images.unsplash.com/photo-1644760152927-0d6639c99b09?auto=format&fit=crop&w=1200&q=80',
  price: 0.89,
  currency: 'ETH',
  usdPrice: 3240,
  creator: {
    name: 'cosmic_artist',
    address: '0x1234...5678',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&q=80',
    verified: true
  },
  owner: {
    name: 'collector_prime',
    address: '0x8765...4321',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80',
  },
  collection: {
    name: 'Cosmic Voyagers',
    verified: true
  },
  blockchain: 'Ethereum',
  tokenId: '001',
  tokenStandard: 'ERC-721',
  createdDate: '2023-11-15T14:30:00Z',
  likes: 432,
  views: 1256,
  history: [
    {
      event: 'Minted',
      from: '0x0000...0000',
      to: '0x1234...5678',
      date: '2023-11-15T14:30:00Z',
      price: 0,
      txHash: '0xabc...123'
    },
    {
      event: 'Listed',
      from: '0x1234...5678',
      to: null,
      date: '2023-12-01T10:15:00Z',
      price: 0.89,
      txHash: '0xdef...456'
    }
  ]
};

const NftDetail = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  
  // In a real app, we would fetch the NFT data based on the ID
  const nft = nftData;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left column - NFT image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-nft-primary to-nft-secondary rounded-xl opacity-75 blur"></div>
                <div className="relative glass-card p-2 rounded-xl overflow-hidden">
                  <img 
                    src={nft.image} 
                    alt={nft.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="mt-8 glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contract Address</span>
                    <a href="#" className="text-nft-secondary hover:underline truncate max-w-[200px]">
                      0x1234...5678
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Token ID</span>
                    <span>{nft.tokenId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Token Standard</span>
                    <span>{nft.tokenStandard}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Blockchain</span>
                    <span>{nft.blockchain}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - NFT details */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-2">
                <Link 
                  to={`/collection/${nft.collection.name}`}
                  className="text-nft-secondary hover:underline"
                >
                  {nft.collection.name}
                </Link>
                {nft.collection.verified && (
                  <Badge variant="outline" className="text-nft-primary border-nft-primary">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{nft.name}</h1>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Owned by</span>
                  <Link
                    to={`/user/${nft.owner.address}`} 
                    className="text-nft-secondary hover:underline flex items-center gap-1"
                  >
                    <img 
                      src={nft.owner.avatar} 
                      alt={nft.owner.name}
                      className="w-5 h-5 rounded-full"
                    />
                    {nft.owner.name}
                  </Link>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  {nft.views} views
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1 ${liked ? 'text-red-500' : 'text-muted-foreground'}`}
                >
                  <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                  {liked ? nft.likes + 1 : nft.likes}
                </Button>
                
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="glass-card p-6 rounded-xl mb-8">
                <div className="flex items-center mb-2">
                  <Tag className="h-5 w-5 mr-2 text-nft-primary" />
                  <span className="text-muted-foreground">Current Price</span>
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-bold">{nft.price} {nft.currency}</span>
                  <span className="text-muted-foreground">(${nft.usdPrice})</span>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1 nft-button">Buy Now</Button>
                  <Button variant="outline" className="bg-white/5 border-white/20">
                    Make Offer
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="bg-muted/20 w-full">
                  <TabsTrigger value="description" className="flex-1">Description</TabsTrigger>
                  <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
                  <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <div className="glass-card p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <img 
                        src={nft.creator.avatar} 
                        alt={nft.creator.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium">{nft.creator.name}</span>
                          {nft.creator.verified && (
                            <Shield className="h-4 w-4 text-nft-primary" />
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">Creator</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{nft.description}</p>
                  </div>
                </TabsContent>
                <TabsContent value="properties" className="mt-4">
                  <div className="glass-card p-6 rounded-xl">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="glass-card p-3 rounded-lg border border-nft-primary/40 text-center">
                        <div className="text-xs text-nft-primary mb-1">BACKGROUND</div>
                        <div className="font-medium">Deep Space</div>
                        <div className="text-xs text-muted-foreground mt-1">14% have this trait</div>
                      </div>
                      <div className="glass-card p-3 rounded-lg border border-nft-secondary/40 text-center">
                        <div className="text-xs text-nft-secondary mb-1">RARITY</div>
                        <div className="font-medium">Legendary</div>
                        <div className="text-xs text-muted-foreground mt-1">3% have this trait</div>
                      </div>
                      <div className="glass-card p-3 rounded-lg border border-nft-accent/40 text-center">
                        <div className="text-xs text-nft-accent mb-1">EDITION</div>
                        <div className="font-medium">Genesis</div>
                        <div className="text-xs text-muted-foreground mt-1">10% have this trait</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="history" className="mt-4">
                  <div className="glass-card p-6 rounded-xl">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Event</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>From</TableHead>
                          <TableHead>To</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {nft.history.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              {item.event === 'Minted' ? (
                                <div className="flex items-center gap-1">
                                  <RefreshCw className="h-4 w-4 text-green-500" />
                                  {item.event}
                                </div>
                              ) : (
                                <div className="flex items-center gap-1">
                                  <Tag className="h-4 w-4 text-nft-primary" />
                                  {item.event}
                                </div>
                              )}
                            </TableCell>
                            <TableCell>
                              {item.price > 0 
                                ? `${item.price} ${nft.currency}` 
                                : '-'}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {item.from === '0x0000...0000' ? 'NullAddress' : item.from}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {item.to ? item.to : '-'}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {new Date(item.date).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NftDetail;
