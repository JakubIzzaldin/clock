import React from "react";

const numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const ClockNumbers: React.FC = () => {
  return (
    <>
      {numbers.map((number, index) => {
        const angle = index * 30 * (Math.PI / 180);
        const radius = 0.4;
        const x = Number((Math.sin(angle) * radius).toFixed(3));
        const y = Number((-Math.cos(angle) * radius).toFixed(3));

        return (
          <div
            key={number}
            className="absolute font-bold text-gray-800"
            style={{
              left: `calc(50% + ${x * 100}%)`,
              top: `calc(50% + ${y * 100}%)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {number}
          </div>
        );
      })}
    </>
  );
};
