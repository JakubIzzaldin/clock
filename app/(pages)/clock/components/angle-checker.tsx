"use client";

import { useState } from "react";

interface AngleCheckerProps {
  hourMinuteAngle: number;
  minuteSecondAngle: number;
  hourSecondAngle: number;
}

export const AngleChecker: React.FC<AngleCheckerProps> = ({
  hourMinuteAngle,
  minuteSecondAngle,
  hourSecondAngle,
}) => {
  const [showAngles, setShowAngles] = useState(false);

  return (
    <div className="mt-8 text-center">
      <button
        onClick={() => setShowAngles((prev) => !prev)}
        className="cursor-pointer px-4 py-2 border rounded-full border-gray-400 text-black mb-4"
      >
        {showAngles
          ? "Skrýt úhly mezi ručičkami"
          : "Zobrazit úhly mezi ručičkami"}
      </button>

      <div className="min-h-[4.5em]">
        {showAngles && (
          <div className="space-y-2">
            <p>
              Úhel mezi hodinovou a minutovou ručičkou je{" "}
              {hourMinuteAngle?.toFixed(1)}°
            </p>
            <p>
              Úhel mezi minutovou a sekundovou ručičkou je{" "}
              {minuteSecondAngle?.toFixed(1)}°
            </p>
            <p>
              Úhel mezi hodinovou a sekundovou ručičkou je{" "}
              {hourSecondAngle?.toFixed(1)}°
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
