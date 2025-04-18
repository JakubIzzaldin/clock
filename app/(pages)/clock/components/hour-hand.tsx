import React from "react";

interface HourHandProps {
  degrees: number;
}

export const HourHand: React.FC<HourHandProps> = ({ degrees }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 w-1 h-[20%] origin-bottom bg-gray-800 rounded-full"
      style={{
        transform: `translate(-50%, -100%) rotate(${degrees}deg)`,
      }}
    />
  );
};
