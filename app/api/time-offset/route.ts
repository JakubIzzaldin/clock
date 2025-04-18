import { NextResponse } from "next/server";
// @ts-expect-error ntp-client nemá oficiální typy
import ntpClient from "ntp-client";

// Použijeme veřejný NTP pool server
const NTP_SERVER = "pool.ntp.org";
const NTP_PORT = 123;

export async function GET() {
  try {
    const ntpTime: Date = await new Promise((resolve, reject) => {
      ntpClient.getNetworkTime(
        NTP_SERVER,
        NTP_PORT,
        (err: Error | null, date: Date | null) => {
          if (err) {
            console.error("NTP Error:", err);
            return reject(new Error("Failed to get NTP time"));
          }
          if (!date) {
            return reject(new Error("NTP server did not return a date"));
          }
          resolve(date);
        }
      );
    });

    // Vrátíme čas NTP serveru jako timestamp
    return NextResponse.json({ ntpTimestamp: ntpTime.getTime() });
  } catch (error) {
    console.error("Error fetching time offset:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
