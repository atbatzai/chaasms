
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BenefitType } from '@/types/framework';

interface FrameworkBenefitsProps {
  benefits: BenefitType[];
}

const FrameworkBenefits = ({ benefits }: FrameworkBenefitsProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-medium text-chaasms-dark mb-12 text-center font-playfair">
        Why You Need a Comprehensive Framework
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
            className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-all group"
          >
            <div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-chaasms-blue">
              <span className="font-semibold">{index + 1}</span>
            </div>
            <h4 className="font-medium text-lg text-gray-800 mb-3 group-hover:text-chaasms-blue transition-colors">{benefit.title}</h4>
            <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
        
      <div className="pt-12 flex justify-center">
        <Button className="bg-chaasms-blue hover:bg-blue-700 rounded-md px-6 py-2 h-auto text-sm shadow-sm hover:shadow-md group transition-all">
          Explore the Framework
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default FrameworkBenefits;
