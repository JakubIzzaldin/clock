"use client";

import { useTimeOffset } from "../hooks/use-time-offset";

export const TimeOffsetChecker = () => {
  const { offset, error, loading, fetchTimeOffset } = useTimeOffset();
  return (
    <div className="mt-8 text-center">
      <button
        onClick={fetchTimeOffset}
        disabled={loading}
        className="cursor-pointer px-4 py-2 border rounded-full border-gray-400 text-black mb-4"
      >
        {loading ? "Checking time offset..." : "Check Time Offset"}
      </button>

      <div className="min-h-[1.5em]">
        {" "}
        {/* Placeholder to prevent layout shift */}
        {error && <p className="text-red-500">Error: {error}</p>}
        {offset !== null && !error && (
          <p>
            Your clock offset from NTP: {offset > 0 ? "+" : ""}
            {offset} ms
          </p>
        )}
      </div>
    </div>
  );
};
