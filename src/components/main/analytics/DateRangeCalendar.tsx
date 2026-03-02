import { useState } from "react";

interface DateRangeCalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  onDateChange: (startDate: Date | null, endDate: Date | null) => void;
  onClose: () => void;
}

interface CalendarMonthProps {
  monthOffset: number;
  calendarMonth: Date;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (day: number, monthOffset: number) => void;
  isDateInRange: (day: number, monthOffset: number) => boolean;
  isDateSelected: (day: number, monthOffset: number) => boolean;
}

const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

const CalendarMonth = ({
  monthOffset,
  calendarMonth,
  onDateClick,
  isDateInRange,
  isDateSelected,
}: CalendarMonthProps) => {
  const displayDate = new Date(calendarMonth);
  displayDate.setMonth(displayDate.getMonth() + monthOffset);
  const daysInMonth = getDaysInMonth(displayDate);
  const firstDay = getFirstDayOfMonth(displayDate);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="w-72">
      <h5 className="text-sm font-semibold text-gray-900 mb-3 text-center">
        {displayDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </h5>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => (
          <button
            key={idx}
            onClick={() => day && onDateClick(day, monthOffset)}
            disabled={!day}
            className={`cursor-pointer p-2 text-xs rounded transition-colors ${
              !day
                ? "invisible"
                : isDateSelected(day, monthOffset)
                  ? "bg-[#c9a65e] text-white font-medium"
                  : isDateInRange(day, monthOffset)
                    ? "bg-[#e8dcc1] text-gray-900"
                    : "hover:bg-gray-100 text-gray-900 cursor-pointer"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const DateRangeCalendar = ({
  startDate,
  endDate,
  onDateChange,
  onClose,
}: DateRangeCalendarProps) => {
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  const handleDateClick = (day: number, monthOffset: number = 0) => {
    const selectedDate = new Date(calendarMonth);
    selectedDate.setMonth(selectedDate.getMonth() + monthOffset);
    selectedDate.setDate(day);

    if (!startDate || (startDate && endDate)) {
      onDateChange(selectedDate, null);
    } else if (selectedDate < startDate) {
      onDateChange(selectedDate, null);
    } else {
      onDateChange(startDate, selectedDate);
      onClose();
    }
  };

  const isDateInRange = (day: number, monthOffset: number = 0) => {
    if (!startDate) return false;
    const date = new Date(calendarMonth);
    date.setMonth(date.getMonth() + monthOffset);
    date.setDate(day);

    if (endDate) {
      return date >= startDate && date <= endDate;
    }
    return false;
  };

  const isDateSelected = (day: number, monthOffset: number = 0): boolean => {
    const date = new Date(calendarMonth);
    date.setMonth(date.getMonth() + monthOffset);
    date.setDate(day);

    return (
      (startDate !== null &&
        date.toDateString() === startDate.toDateString()) ||
      (endDate !== null && date.toDateString() === endDate.toDateString())
    );
  };

  return (
    <div className="right-0 absolute mt-2 bg-white border border-[#dcdfe5] rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-center justify-between mb-4 px-2">
        <button
          onClick={() => {
            const newDate = new Date(calendarMonth);
            newDate.setMonth(newDate.getMonth() - 1);
            setCalendarMonth(newDate);
          }}
          className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors self-baseline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <div className="flex gap-4">
          <CalendarMonth
            monthOffset={0}
            calendarMonth={calendarMonth}
            startDate={startDate}
            endDate={endDate}
            onDateClick={handleDateClick}
            isDateInRange={isDateInRange}
            isDateSelected={isDateSelected}
          />
          <CalendarMonth
            monthOffset={1}
            calendarMonth={calendarMonth}
            startDate={startDate}
            endDate={endDate}
            onDateClick={handleDateClick}
            isDateInRange={isDateInRange}
            isDateSelected={isDateSelected}
          />
        </div>
        <button
          onClick={() => {
            const newDate = new Date(calendarMonth);
            newDate.setMonth(newDate.getMonth() + 1);
            setCalendarMonth(newDate);
          }}
          className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors self-baseline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DateRangeCalendar;
