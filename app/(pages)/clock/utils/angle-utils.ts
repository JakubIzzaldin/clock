// Funkce pro převod hodin na stupně
export const getHourDegrees = (hours: number, minutes: number): number => {
  const twelveHourFormat = hours % 12;
  return twelveHourFormat * 30 + minutes * 0.5;
};

// Funkce pro převod minut na stupně
export const getMinuteDegrees = (minutes: number): number => {
  return minutes * 6;
};

// Funkce pro převod sekund na stupně
export const getSecondDegrees = (seconds: number): number => {
  return seconds * 6;
};

export interface HandAngles {
  hourMinuteAngle: number;
  minuteSecondAngle: number;
  hourSecondAngle: number;
}

export function getAngleBetweenHands(time: {
  hours: number;
  minutes: number;
  seconds: number;
}): HandAngles {
  // Převod na 12-hodinový formát
  const { hours, minutes, seconds } = time;

  const resultHours = hours % 12;

  // Výpočet úhlů pro každou ručičku
  const hourAngle = resultHours * 30 + minutes * 0.5 + seconds * (0.5 / 60);
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const secondAngle = seconds * 6;

  // Funkce pro výpočet úhlu mezi dvěma ručičkami
  const calculateAngle = (angle1: number, angle2: number): number => {
    const angle = Math.abs(angle1 - angle2);
    return angle > 180 ? 360 - angle : angle;
  };

  return {
    hourMinuteAngle: calculateAngle(hourAngle, minuteAngle),
    minuteSecondAngle: calculateAngle(minuteAngle, secondAngle),
    hourSecondAngle: calculateAngle(hourAngle, secondAngle),
  };
}
