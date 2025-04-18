import { cn } from "@/app/utils/cn";
import React from "react";

interface MinuteHandProps {
  degrees: number;
  isVisible: boolean;
}

export const MinuteHand: React.FC<MinuteHandProps> = ({
  degrees,
  isVisible,
}) => {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 w-0.5 h-[30%] origin-bottom bg-gray-800 rounded-full",
        {
          "h-0 invisible": !isVisible,
        }
      )}
      style={{
        transform: `translate(-50%, -100%) rotate(${degrees}deg)`,
      }}
    />
  );
};
