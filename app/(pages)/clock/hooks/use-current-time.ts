"use client";

import { useEffect, useState } from "react";

export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCurrentTime(): Time {
  const [currentTime, setCurrentTime] = useState<Time>(() => {
    // Initial state from current time to avoid 00:00:00 flash
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  });

  useEffect(() => {
    // Funkce pro aktualizaci času
    const updateTime = () => {
      const now = new Date();
      setCurrentTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    // Nastavení intervalu pro aktualizaci času hodin (každou sekundu)
    const timeInterval = setInterval(updateTime, 1000);

    // Vyčištění intervalu při odmontování komponenty
    return () => {
      clearInterval(timeInterval);
    };
  }, []); // Spustí se jen jednou při montování

  return currentTime;
}
