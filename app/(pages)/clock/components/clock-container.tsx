"use client";

import React from "react";
import {
  getHourDegrees,
  getMinuteDegrees,
  getSecondDegrees,
} from "../utils/angle-utils";
import { ClockNumbers } from "./clock-numbers";
import { HourHand } from "./hour-hand";
import { MinuteHand } from "./minute-hand";
import { SecondHand } from "./second-hand";

// Props pro ClockContainer
interface ClockContainerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export const ClockContainer: React.FC<ClockContainerProps> = ({
  hours,
  minutes,
  seconds,
}) => {
  const validHours = Math.max(0, Math.min(23, hours || 0));
  const validMinutes = Math.max(0, Math.min(59, minutes || 0));
  const validSeconds = Math.max(0, Math.min(59, seconds || 0));

  const hourDegrees = getHourDegrees(validHours, validMinutes);
  const minuteDegrees = getMinuteDegrees(validMinutes);
  const secondDegrees = getSecondDegrees(validSeconds);

  const twelveHourFormat = validHours % 12 === 0 ? 12 : validHours % 12;

  const isMinuteHandVisible = !(validMinutes === 0 && twelveHourFormat === 12);

  return (
    <div className="relative w-full max-w-[384px]  aspect-square rounded-full border  shadow ">
      <ClockNumbers />

      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full" />

      <HourHand degrees={hourDegrees} />

      <MinuteHand degrees={minuteDegrees} isVisible={isMinuteHandVisible} />

      <SecondHand degrees={secondDegrees} />
    </div>
  );
};
