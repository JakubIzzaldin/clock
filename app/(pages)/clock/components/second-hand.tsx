import React from "react";

interface SecondHandProps {
  degrees: number;
}

export const SecondHand: React.FC<SecondHandProps> = ({ degrees }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 w-px h-[40%] origin-bottom bg-red-500 rounded-full"
      style={{
        transform: `translate(-50%, -100%) rotate(${degrees}deg)`,
      }}
    />
  );
};
