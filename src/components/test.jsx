import Countdown from "react-countdown";

export default function Timer() {
  const targetDate = new Date("2025-10-10T00:00:00");

  return (
    <div className="flex gap-6 justify-center items-center text-center">
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{String(days).padStart(2, "0")}</span>
              <span className="text-sm text-gray-500">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{String(hours).padStart(2, "0")}</span>
              <span className="text-sm text-gray-500">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{String(minutes).padStart(2, "0")}</span>
              <span className="text-sm text-gray-500">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{String(seconds).padStart(2, "0")}</span>
              <span className="text-sm text-gray-500">Seconds</span>
            </div>
          </div>
        )}
      />
    </div>
  );
}
