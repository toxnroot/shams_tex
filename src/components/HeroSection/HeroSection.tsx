"use client";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  // Button component
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/products");
  };
  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-dvh max-h-full text-white bg-black"
    style={{
          backgroundImage: `url('https://res.cloudinary.com/do88eynar/image/upload/v1746891177/ryhgysby9mz1ebgrw48m.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
    >
      {/* Using placeholder image instead of the Cloudinary URL */}
      <div 
        className="w-full min-h-dvh max-h-full bg-gradient-to-b from-[#0000007a] to-transparent flex flex-col items-center justify-center gap-3"
        
      >
        {/* Logo placeholder */}
        <div 
          className="w-64 h-64 relative"
          style={{
            backgroundImage: `url('/logo.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Heading */}
        <h1 className="text-5xl uppercase text-amber-500" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          SHAMS TEX
        </h1>
        
        {/* CTA Button */}
        <div className="flex gap-4 mt-4">
        <Button click={handleContactClick} text="Contsact Us" ></Button>
      <Button click={handleButtonClick} text="Shop Now" ><ArrowRight /></Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;