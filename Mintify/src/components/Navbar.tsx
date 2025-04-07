
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Menu, 
  X, 
  Wallet as WalletIcon,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const connectWallet = () => {
    // In a real app, this would connect to MetaMask or WalletConnect
    setIsConnected(true);
  };

  return (
    <header className="w-full bg-background/70 backdrop-blur-lg sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Layers className="w-8 h-8 text-nft-primary" />
          <span className="text-xl font-bold gradient-text">Mintify</span>
        </Link>

        {/* Search - Desktop */}
        <div className="hidden md:flex relative max-w-md w-full mx-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search NFTs, collections, or artists..."
            className="pl-10 bg-muted/50 border-muted"
          />
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/explore" className="text-foreground/80 hover:text-foreground transition-colors">
            Explore
          </Link>
          <Link to="/create" className="text-foreground/80 hover:text-foreground transition-colors">
            Create
          </Link>
          <Button 
            onClick={connectWallet} 
            className="nft-button"
          >
            {isConnected ? (
              <>
                <span>0x12...3456</span>
              </>
            ) : (
              <>
                <WalletIcon className="mr-2 h-4 w-4" />
                <span>Connect Wallet</span>
              </>
            )}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 py-4 px-4">
          <div className="flex items-center mb-4">
            <Search className="absolute ml-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search NFTs..."
              className="pl-10 bg-muted/50 border-muted"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link to="/explore" className="text-foreground/80 hover:text-foreground py-2">
              Explore
            </Link>
            <Link to="/create" className="text-foreground/80 hover:text-foreground py-2">
              Create
            </Link>
            <Button 
              onClick={connectWallet} 
              className="nft-button w-full"
            >
              {isConnected ? (
                "0x12...3456"
              ) : (
                <>
                  <WalletIcon className="mr-2 h-4 w-4" />
                  <span>Connect Wallet</span>
                </>
              )}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
