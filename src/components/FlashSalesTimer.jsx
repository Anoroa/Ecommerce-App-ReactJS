import Countdown from "react-countdown";

const FlashSalesTimer = () => {
  const saleEndTime = new Date("2026-03-20T23:59:59Z");

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-red-500 font-semibold">Sale Ended</span>;
    }

    return (
      <div className="flex flex-wrap items-end gap-3 sm:gap-4">
        <TimeBox label="Days" value={days} />
        <Colon />
        <TimeBox label="Hours" value={hours} />
        <Colon />
        <TimeBox label="Minutes" value={minutes} />
        <Colon />
        <TimeBox label="Seconds" value={seconds} />
      </div>
    );
  };

  return <Countdown date={saleEndTime} renderer={renderer} />;
};

const TimeBox = ({ label, value }) => (
  <div className="flex flex-col items-center min-w-12">
    <span className="text-xs text-gray-500 mb-1 font-medium font-poppins">
      {label}
    </span>
    <h1 className="font-inter font-bold leading-none text-lg sm:text-xl md:text-2xl">
      {String(value).padStart(2, "0")}
    </h1>
  </div>
);

const Colon = () => (
  <span className="text-xl sm:text-2xl font-bold text-red-500 pb-1">:</span>
);

export default FlashSalesTimer;
