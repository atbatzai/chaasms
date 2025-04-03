
import { useEffect, useState } from "react";

interface Shape {
  id: number;
  top: string;
  left: string;
  size: string;
  color: string;
  blur: string;
  rotate: string;
  animationDelay: string;
  type: 'circle' | 'square' | 'triangle' | 'wave';
  opacity: string;
}

const FloatingShapes = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  
  useEffect(() => {
    // Generate random shapes with more variety
    const shapeColors = [
      'from-soft-blue/40 to-soft-purple/30',
      'from-soft-green/40 to-soft-yellow/30',
      'from-soft-peach/40 to-soft-pink/30',
      'from-soft-purple/40 to-blue-300/30',
      'from-soft-yellow/40 to-soft-orange/30',
      'from-soft-blue/40 to-chaasms-blue/20',
    ];
    
    const shapeTypes = ['circle', 'square', 'triangle', 'wave'] as const;
    
    const shapesData = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: `${Math.floor(Math.random() * 90)}%`,
      left: `${Math.floor(Math.random() * 90)}%`,
      size: `${Math.floor(Math.random() * 80) + 40}px`,
      color: shapeColors[Math.floor(Math.random() * shapeColors.length)],
      blur: `blur-${['md', 'lg', 'xl', '2xl', '3xl'][Math.floor(Math.random() * 5)]}`,
      rotate: `rotate-${Math.floor(Math.random() * 360)}`,
      animationDelay: `${Math.random() * 10}s`,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      opacity: `${Math.random() * 0.3 + 0.3}`, // Between 0.3 and 0.6
    }));
    
    setShapes(shapesData);
  }, []);

  const renderShape = (shape: Shape) => {
    const commonStyles = {
      top: shape.top,
      left: shape.left,
      width: shape.size,
      height: shape.size,
      animation: `floating 20s infinite ease-in-out, pulse-glow 8s infinite ease-in-out`,
      animationDelay: shape.animationDelay,
      opacity: shape.opacity,
    };
    
    switch (shape.type) {
      case 'square':
        return (
          <div
            className={`absolute bg-gradient-to-br ${shape.color} rounded-md ${shape.blur} ${shape.rotate}`}
            style={commonStyles}
          />
        );
      case 'triangle':
        return (
          <div 
            className={`absolute ${shape.blur} ${shape.rotate}`}
            style={{
              ...commonStyles,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
              backgroundImage: `linear-gradient(to bottom right, ${shape.color.split(' ')[1].replace('from-', '')} 0%, ${shape.color.split(' ')[2].replace('to-', '')} 100%)`,
            }}
          />
        );
      case 'wave':
        return (
          <div 
            className={`absolute ${shape.blur} ${shape.rotate}`}
            style={{
              ...commonStyles,
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
              backgroundImage: `linear-gradient(to bottom right, ${shape.color.split(' ')[1].replace('from-', '')} 0%, ${shape.color.split(' ')[2].replace('to-', '')} 100%)`,
            }}
          />
        );
      case 'circle':
      default:
        return (
          <div
            className={`absolute bg-gradient-to-br ${shape.color} rounded-full ${shape.blur} ${shape.rotate}`}
            style={commonStyles}
          />
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => renderShape(shape))}
    </div>
  );
};

export default FloatingShapes;
