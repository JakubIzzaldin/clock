"use client";
import { useMemo } from "react";
import { AngleChecker } from "./components/angle-checker";
import { ClockContainer } from "./components/clock-container";
import { TimeOffsetChecker } from "./components/time-offset-checker";
import { useCurrentTime } from "./hooks/use-current-time";
import { getAngleBetweenHands } from "./utils/angle-utils";

export default function Home() {
  const { hours, minutes, seconds } = useCurrentTime();

  const { hourMinuteAngle, minuteSecondAngle, hourSecondAngle } = useMemo(
    () =>
      getAngleBetweenHands({
        hours,
        minutes,
        seconds,
      }),
    [hours, minutes, seconds]
  );

  return (
    <main className="flex h-full flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Clock</h1>
      <ClockContainer hours={hours} minutes={minutes} seconds={seconds} />
      <div className="grid grid-cols-2 gap-4 w-full">
        <TimeOffsetChecker />
        <AngleChecker
          hourMinuteAngle={hourMinuteAngle}
          minuteSecondAngle={minuteSecondAngle}
          hourSecondAngle={hourSecondAngle}
        />
      </div>
    </main>
  );
}
