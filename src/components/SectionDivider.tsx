
interface SectionDividerProps {
  position: 'top' | 'bottom';
  color?: string;
  className?: string;
}

const SectionDivider = ({ position, color = 'white', className = '' }: SectionDividerProps) => {
  return (
    <div 
      className={`absolute left-0 w-full overflow-hidden h-16 ${
        position === 'top' ? 'top-0' : 'bottom-0'
      } ${className}`}
    >
      <svg 
        className="absolute w-full h-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        fill={color}
      >
        {position === 'top' ? (
          <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
        ) : (
          <path d="M1200 120L0 120 598.97 5.28 1200 120z"></path>
        )}
      </svg>
    </div>
  );
};

export default SectionDivider;
