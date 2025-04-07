
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  currency: string;
  creator: string;
  likes: number;
  views: number;
}

const NFTCard = ({
  id,
  name,
  image,
  price,
  currency,
  creator,
  likes,
  views
}: NFTCardProps) => {
  // Add error handling for images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80"; // Web3/blockchain/NFT fallback image
    e.currentTarget.onerror = null; // Prevent infinite error loop
  };

  return (
    <Link to={`/nft/${id}`}>
      <Card className="glass-card overflow-hidden NFT-hover">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-black/50 text-white">
              {price} {currency}
            </Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">by @{creator}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-muted-foreground gap-3">
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {likes}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {views}
              </span>
            </div>
            <Badge variant="outline" className="border-nft-primary text-nft-primary">
              Buy Now
            </Badge>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default NFTCard;
