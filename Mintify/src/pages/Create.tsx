
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  UploadCloud,
  Image as ImageIcon,
  Info,
  AlertTriangle
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Create = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    collection: '',
    royalty: '10',
    blockchain: 'ethereum',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 1500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!imagePreview) {
      toast({
        title: "Image Required",
        description: "Please upload an image for your NFT.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.name || !formData.description) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsCreating(true);
    
    // Simulate creation delay
    setTimeout(() => {
      toast({
        title: "NFT Created Successfully",
        description: "Your NFT has been minted and is now listed in the marketplace.",
        variant: "default"
      });
      
      setIsCreating(false);
      // In a real app, we would redirect to the NFT detail page
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Create New NFT</h1>
            <p className="text-muted-foreground mb-8">
              Create and mint your unique digital asset as an NFT on the blockchain
            </p>
            
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <form onSubmit={handleSubmit}>
                {/* Image Upload */}
                <div className="mb-8">
                  <label className="block mb-2 font-medium">
                    Image, Video, or Audio <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center">
                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="NFT Preview"
                          className="max-h-80 mx-auto rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={() => setImagePreview(null)}
                          className="mt-4"
                        >
                          Replace
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-center mb-4">
                          <UploadCloud className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground mb-2">
                          {isUploading ? 'Uploading...' : 'Drag and drop your file here, or click to browse'}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Supported formats: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV
                        </p>
                        <Button type="button" variant="outline" className="bg-white/5 border-white/20" disabled={isUploading}>
                          <label className="cursor-pointer">
                            {isUploading ? 'Uploading...' : 'Choose File'}
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*, video/*, audio/*"
                              onChange={handleImageChange}
                              disabled={isUploading}
                            />
                          </label>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Name & Description */}
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Item name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-muted/30"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="description" className="block mb-2 font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Provide a detailed description of your item"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="bg-muted/30 h-32"
                  />
                </div>
                
                {/* Collection */}
                <div className="mb-6">
                  <label htmlFor="collection" className="block mb-2 font-medium">
                    Collection
                  </label>
                  <Select
                    value={formData.collection}
                    onValueChange={(value) => handleSelectChange('collection', value)}
                  >
                    <SelectTrigger className="bg-muted/30">
                      <SelectValue placeholder="Select collection or create a new one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Create New Collection</SelectItem>
                      <SelectItem value="cosmic">Cosmic Voyagers</SelectItem>
                      <SelectItem value="neon">Neon Dystopia</SelectItem>
                      <SelectItem value="abstract">Abstract Dreams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Royalty */}
                  <div>
                    <label htmlFor="royalty" className="block mb-2 font-medium">
                      Royalties
                    </label>
                    <div className="relative">
                      <Input
                        id="royalty"
                        name="royalty"
                        type="number"
                        min="0"
                        max="15"
                        placeholder="10%"
                        value={formData.royalty}
                        onChange={handleInputChange}
                        className="bg-muted/30 pr-8"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        %
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Percentage of secondary sales you'll receive
                    </p>
                  </div>
                  
                  {/* Blockchain */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Blockchain
                    </label>
                    <Select
                      value={formData.blockchain}
                      onValueChange={(value) => handleSelectChange('blockchain', value)}
                    >
                      <SelectTrigger className="bg-muted/30">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="polygon">Polygon</SelectItem>
                        <SelectItem value="base">Base</SelectItem>
                        <SelectItem value="solana">Solana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center p-4 mb-8 bg-amber-900/20 border border-amber-500/20 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 shrink-0" />
                  <p className="text-sm">
                    Once your NFT is minted to the blockchain, you will not be able to edit or update any of its information.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="nft-button w-full py-6 text-lg"
                  disabled={isCreating || isUploading}
                >
                  {isCreating ? 'Creating NFT...' : 'Create NFT'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
