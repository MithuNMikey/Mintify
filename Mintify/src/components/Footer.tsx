
import React from 'react';
import { Layers, Twitter, Instagram, Youtube, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Layers className="w-8 h-8 text-nft-primary" />
              <span className="text-xl font-bold gradient-text">Mintify</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The world's first and largest decentralized marketplace for NFT's
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-white" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-white" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-muted-foreground hover:text-white" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-white" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-white" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/explore" className="text-muted-foreground hover:text-white">Explore</Link></li>
              <li><Link to="/nfts" className="text-muted-foreground hover:text-white">All NFTs</Link></li>
              <li><Link to="/collections" className="text-muted-foreground hover:text-white">Collections</Link></li>
              <li><Link to="/create" className="text-muted-foreground hover:text-white">Create NFT</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">My Account</h3>
            <ul className="space-y-3">
              <li><Link to="/profile" className="text-muted-foreground hover:text-white">Profile</Link></li>
              <li><Link to="/favorites" className="text-muted-foreground hover:text-white">Favorites</Link></li>
              <li><Link to="/watchlist" className="text-muted-foreground hover:text-white">Watchlist</Link></li>
              <li><Link to="/settings" className="text-muted-foreground hover:text-white">Settings</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-muted-foreground hover:text-white">Help Center</Link></li>
              <li><Link to="/platform-status" className="text-muted-foreground hover:text-white">Platform Status</Link></li>
              <li><Link to="/partners" className="text-muted-foreground hover:text-white">Partners</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-white">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mintify, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
