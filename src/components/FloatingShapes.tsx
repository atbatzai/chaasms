
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
}

const FloatingShapes = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  
  useEffect(() => {
    // Generate random shapes
    const shapeColors = [
      'from-soft-blue/40 to-soft-purple/30',
      'from-soft-green/40 to-soft-yellow/30',
      'from-soft-peach/40 to-soft-pink/30',
      'from-soft-purple/40 to-blue-300/30',
      'from-soft-yellow/40 to-soft-orange/30',
    ];
    
    const shapesData = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: `${Math.floor(Math.random() * 90)}%`,
      left: `${Math.floor(Math.random() * 90)}%`,
      size: `${Math.floor(Math.random() * 60) + 40}px`,
      color: shapeColors[Math.floor(Math.random() * shapeColors.length)],
      blur: `blur-${['md', 'lg', 'xl', '2xl', '3xl'][Math.floor(Math.random() * 5)]}`,
      rotate: `rotate-${Math.floor(Math.random() * 360)}`,
      animationDelay: `${Math.random() * 10}s`,
    }));
    
    setShapes(shapesData);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute bg-gradient-to-br ${shape.color} rounded-full ${shape.blur} ${shape.rotate} opacity-50`}
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
            animation: `floating 20s infinite ease-in-out`,
            animationDelay: shape.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
