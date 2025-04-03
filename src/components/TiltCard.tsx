
import { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
}

const TiltCard = ({ 
  children, 
  className = "", 
  tiltAmount = 10,
  glareEnabled = true 
}: TiltCardProps) => {
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / centerY * tiltAmount;
    const tiltY = (centerX - x) / centerX * tiltAmount;
    
    setTiltPosition({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTiltPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: tiltPosition.x,
        rotateY: tiltPosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      {children}
      
      {glareEnabled && isHovering && (
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-10 pointer-events-none"
          style={{
            transform: `rotate(${tiltPosition.y * 5}deg)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
