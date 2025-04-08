
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Hero = () => {
  // Add useEffect to load Vimeo Player script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="pt-40 md:pt-48 pb-16 md:pb-24 bg-white">
      <div className="chaasms-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-chaasms-dark leading-tight font-playfair">
              The Definitive Channel Strategy Framework for Modern ISVs
            </h1>
            
            <p className="text-xl text-chaasms-text max-w-2xl leading-relaxed">
              Navigate the complex world of channel partnerships, ecosystems, and marketplace strategies with clarity and structure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button className="btn-primary rounded-md shadow-md hover:shadow-lg transition-all">
                Book a Consultation
              </Button>
              
              <Link to="/framework-overview">
                <Button 
                  variant="outline" 
                  className="btn-secondary group rounded-md"
                >
                  Explore the Framework
                  <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-full">
              <div className="rounded-lg overflow-hidden shadow-lg border border-chaasms-midgray/20">
                <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                  <iframe 
                    src="https://player.vimeo.com/video/1073421210?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                    style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                    title="Channel Ecosystem Success"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1920 250" className="w-full h-auto fill-current text-chaasms-lightgray">
          <path d="M1920,144.5l0,105.5l-1920,0l0,-105.5c0,0 570,-90 960,0C1340,234.5 1920,144.5 1920,144.5z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
