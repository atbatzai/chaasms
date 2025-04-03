
import { AlertTriangle, TrendingUp, Shield, Zap, BarChart3, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ChallengePoint = ({ 
  title, 
  description,
  icon: Icon,
  color,
  index
}: { 
  title: string; 
  description: string;
  icon: React.ElementType;
  color: string;
  index: number;
}) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      className="premium-card hover:shadow-lg transition-all duration-300 border-l-4 rounded-r-lg overflow-hidden relative group"
      style={{ borderLeftColor: color }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
    >
      <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-gradient-to-tl from-gray-100 to-white rounded-full opacity-0 group-hover:opacity-40 transition-opacity"></div>
      <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-r from-transparent to-white/30"></div>
      
      <div className="flex items-start p-8">
        <div 
          className="icon-circle mr-5 flex-shrink-0 bg-gradient-to-br shadow-md group-hover:shadow-lg transition-all duration-300"
          style={{ 
            background: `linear-gradient(135deg, ${color}20, ${color}40)`,
            borderLeft: `1px solid ${color}30`
          }}
        >
          <Icon className="text-chaasms-dark" style={{ color }} size={22} />
        </div>
        
        <div>
          <h3 className="text-xl font-medium text-chaasms-dark mb-3 group-hover:text-chaasms-blue transition-colors">{title}</h3>
          <p className="text-chaasms-text">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ChallengeSection = () => {
  const challenges = [
    {
      title: "Ecosystem Complexity",
      description: "Navigating multiple marketplaces, platform partners, and traditional channel models simultaneously.",
      icon: Globe,
      color: "#4A6FA5"
    },
    {
      title: "Inconsistent Results",
      description: "Partner programs that generate unpredictable or underwhelming revenue contribution.",
      icon: TrendingUp,
      color: "#E67E22"
    },
    {
      title: "Resource Constraints",
      description: "Limited teams trying to manage growing partner ecosystems with inadequate tools.",
      icon: Shield,
      color: "#27AE60"
    },
    {
      title: "Partner Enablement Gaps",
      description: "Difficulty creating effective training and resources that partners actually use.",
      icon: Zap,
      color: "#8E44AD"
    },
    {
      title: "GTM Execution",
      description: "Challenges in implementing co-selling and co-marketing motions that deliver results.",
      icon: BarChart3,
      color: "#D35400"
    },
    {
      title: "Measuring ROI",
      description: "Inability to properly track and measure channel program performance and contribution.",
      icon: AlertTriangle,
      color: "#C0392B"
    }
  ];

  return (
    <section id="challenges" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-white/80 to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-soft-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -right-10 w-40 h-40 bg-soft-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-soft-purple/20 rounded-full blur-3xl"></div>
      
      <div className="chaasms-container relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-soft-orange/30 text-chaasms-dark text-sm mb-4">
            Industry Challenges
          </span>
          <h2 className="section-heading font-playfair">The Channel Challenge</h2>
          <p className="text-xl text-chaasms-text max-w-3xl mx-auto leading-relaxed">
            Today's ISVs face unprecedented complexity in building effective channel programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <ChallengePoint
              key={index}
              title={challenge.title}
              description={challenge.description}
              icon={challenge.icon}
              color={challenge.color}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="premium-card bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-md rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12 relative">
            <div className="absolute top-0 left-1/2 w-40 h-1 bg-gradient-to-r from-chaasms-blue/50 to-red-500/50 transform -translate-x-1/2"></div>
            <h3 className="text-2xl font-playfair text-chaasms-dark mb-4 pt-8">The Cost of Inaction</h3>
            <p className="text-chaasms-text max-w-2xl mx-auto">
              Without a structured channel framework, ISVs risk:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="p-8 bg-gradient-to-br from-red-50 to-white border-l-2 border-red-400 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-medium text-chaasms-dark mb-3">Lost Revenue Opportunities</h4>
              <p className="text-chaasms-text">Missing out on partner-influenced and partner-led revenue streams.</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-red-50 to-white border-l-2 border-red-400 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-medium text-chaasms-dark mb-3">Competitive Disadvantage</h4>
              <p className="text-chaasms-text">Falling behind competitors with more mature partner ecosystems.</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-red-50 to-white border-l-2 border-red-400 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-medium text-chaasms-dark mb-3">Wasted Investment</h4>
              <p className="text-chaasms-text">Resources allocated to channel activities without strategic returns.</p>
            </div>
          </div>
          
          <div className="text-center pb-8">
            <Button className="btn-primary bg-gradient-to-r from-chaasms-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all">
              Solve These Challenges
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengeSection;
