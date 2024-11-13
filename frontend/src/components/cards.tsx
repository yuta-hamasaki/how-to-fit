// components/Card.tsx
import React from 'react';

interface CardProps {
  id:string;
  title?: string;
  describe?: string;
  image?: string;
  imageAlt?: string;
  onClick?: () => void;
  className?: string;
  hoverable?: boolean;
  variant?:'bordered' | 'elevated';
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  describe,
  image,
  imageAlt = 'card image',
  onClick,
  className = '',
  hoverable = false,
  variant = 'elevated'
}) => {
  const baseStyles = "bg-white rounded-lg overflow-hidden";
  const hoverStyles = hoverable ? "transition-transform duration-200 hover:scale-105 cursor-pointer" : "";
  const variantStyles = {
    bordered: "border border-gray-200",
    elevated: "shadow-md"
  };

  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="w-full relative pt-[56.25%]">
          <img
            src={image}
            alt={imageAlt}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-4">
        {/* Title */}
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {title}
          </h3>
        )}

        {/* Subtitle */}
        {describe && (
          <p className="text-sm text-gray-500 mb-3">
            {describe}
          </p>
        )}

      </div>
    </div>
  );
};

export default Card;