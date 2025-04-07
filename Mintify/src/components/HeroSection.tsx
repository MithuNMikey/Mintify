import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background"></div>
      <div className="container relative mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center z-10">
        <div className="animate-float">
          <Badge className="mb-8 bg-white/10 backdrop-blur-md text-white border-none px-4 py-2 rounded-full flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Decentralized NFT Marketplace</span>
          </Badge>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Discover, Collect, and Sell <br className="hidden md:block" />Extraordinary NFTs
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Mintify is the world's first and largest NFT marketplace with everything you need to buy and sell digital art and collectibles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="nft-button px-8">
            <Link to="/explore">
              Explore
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="backdrop-blur-md bg-white/5 border-white/20">
            <Link to="/create">Create NFT</Link>
          </Button>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-nft-primary to-nft-secondary rounded-xl opacity-75 blur"></div>
          <div className="relative bg-card rounded-xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1200&q=80"
              alt="Featured NFT artwork"
              className="w-full max-w-3xl h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Badge = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`inline-flex items-center ${className}`} {...props}>
      {children}
    </div>
  );
};

export default HeroSection;
