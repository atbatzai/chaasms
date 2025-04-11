
import { AlertTriangle, TrendingUp, Shield, Zap, BarChart3, Globe } from 'lucide-react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
      className="overflow-hidden relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
    >
      <Card className="shadow-md border border-gray-200 bg-white h-full transition-all duration-200 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gray-100 flex-shrink-0">
              <Icon className="text-chaasms-blue" size={24} />
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-chaasms-dark mb-2">{title}</h3>
              <p className="text-chaasms-text text-sm">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
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

  // Animation variants for the title section
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="challenges" className="section-padding bg-white">
      <div className="chaasms-container">
        <motion.div 
          className="text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-chaasms-dark text-sm mb-4">
            Industry Challenges
          </span>
          <h2 className="section-heading font-playfair">The Channel Challenge</h2>
          <p className="text-xl text-chaasms-text max-w-3xl mx-auto leading-relaxed">
            Today's ISVs face unprecedented complexity in building effective channel programs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default ChallengeSection;
