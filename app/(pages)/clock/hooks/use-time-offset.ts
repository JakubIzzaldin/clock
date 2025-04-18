"use client";

import { useCallback, useState } from "react";

export function useTimeOffset() {
  const [offset, setOffset] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTimeOffset = useCallback(async () => {
    setLoading(true);
    setError(null);
    setOffset(null);
    try {
      const response = await fetch("/api/time-offset");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
      const data = await response.json();
      const ntpTimestamp = data.ntpTimestamp;

      if (typeof ntpTimestamp !== "number") {
        throw new Error("Invalid NTP timestamp received from server");
      }

      const clientTime = new Date();
      const clientOffset = clientTime.getTime() - ntpTimestamp;
      setOffset(clientOffset);
    } catch (err) {
      console.error("Failed to fetch/calculate offset:", err);
      setError(
        err instanceof Error ? err.message : "Unknown error fetching offset"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return { offset, error, loading, fetchTimeOffset };
}
