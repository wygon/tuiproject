import { useState } from 'react';

interface CalendarProps {
  initialDate?: Date;
  startDate?: Date;
  endDate?: Date;
  onDateChange?: (start: Date, end: Date) => void;
}

const Calendar = ({ 
  initialDate = new Date(), 
  startDate, 
  endDate,
  onDateChange 
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(startDate || null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(endDate || null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  
  const daysOfWeek = ["Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob.", "Niedz."];
  const months = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
  ];
  
  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Get next month and year
  const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);
  const nextMonth = nextMonthDate.getMonth();
  const nextYear = nextMonthDate.getFullYear();
  
  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  
  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 2, 1));
  };
  
  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Get day of week (0-6) for first day of month
  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust to Monday-based week
  };
  
  // Handle date selection
  const handleDateClick = (year: number, month: number, day: number) => {
    const selectedDate = new Date(year, month, day);
    
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      // Start new selection
      setSelectedStartDate(selectedDate);
      setSelectedEndDate(null);
    } else {
      // Complete the selection
      if (selectedDate < selectedStartDate) {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(selectedDate);
      } else {
        setSelectedEndDate(selectedDate);
      }
    }
    
    // Call the onDateChange callback if both dates are selected
    if (selectedStartDate && onDateChange) {
      if (selectedDate < selectedStartDate) {
        onDateChange(selectedDate, selectedStartDate);
      } else {
        onDateChange(selectedStartDate, selectedDate);
      }
    }
  };
  
  // Handle date hover for range selection
  const handleDateHover = (year: number, month: number, day: number) => {
    if (selectedStartDate && !selectedEndDate) {
      setHoverDate(new Date(year, month, day));
    }
  };
  
  // Check if a date is selected (either start or end)
  const isDateSelected = (date: Date) => {
    if (!selectedStartDate) return false;
    
    if (selectedEndDate) {
      return (
        date.getDate() === selectedStartDate.getDate() &&
        date.getMonth() === selectedStartDate.getMonth() &&
        date.getFullYear() === selectedStartDate.getFullYear()
      ) || (
        date.getDate() === selectedEndDate.getDate() &&
        date.getMonth() === selectedEndDate.getMonth() &&
        date.getFullYear() === selectedEndDate.getFullYear()
      );
    }
    
    return (
      date.getDate() === selectedStartDate.getDate() &&
      date.getMonth() === selectedStartDate.getMonth() &&
      date.getFullYear() === selectedStartDate.getFullYear()
    );
  };
  
  // Check if a date is in the selected range
  const isDateInRange = (date: Date) => {
    if (!selectedStartDate) return false;
    
    const endDateToCheck = selectedEndDate || hoverDate;
    if (!endDateToCheck) return false;
    
    const isAfterStart = date > selectedStartDate;
    const isBeforeEnd = date < endDateToCheck;
    const isAfterEnd = date > endDateToCheck;
    const isBeforeStart = date < selectedStartDate;
    
    return (isAfterStart && isBeforeEnd) || (isAfterEnd && isBeforeStart);
  };
  
  // Generate calendar days for current month
  const renderCalendarDays = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = isDateSelected(date);
      const isInRange = isDateInRange(date);
      const isToday = 
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear();
      
      days.push(
        <div 
          key={`day-${day}`} 
          className="relative"
          onMouseEnter={() => handleDateHover(year, month, day)}
        >
          <button
            className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium focus:outline-none 
              ${isSelected 
                ? 'bg-black text-white' 
                : isInRange 
                  ? 'bg-gray-100' 
                  : isToday 
                    ? 'border border-gray-300' 
                    : ''}`}
            onClick={() => handleDateClick(year, month, day)}
          >
            {day}
          </button>
        </div>
      );
    }
    
    return days;
  };

  const formatDateRange = () => {
    if (!selectedStartDate) return '';
    
    const formatDate = (date: Date) => {
      return `${date.getDate()} ${months[date.getMonth()].toLowerCase()} ${date.getFullYear()}`;
    };
    
    if (!selectedEndDate) return formatDate(selectedStartDate);
    
    const nights = Math.floor((selectedEndDate.getTime() - selectedStartDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return `${nights} nocy w: Cymbark
${formatDate(selectedStartDate)} - ${formatDate(selectedEndDate)}`;
  };
  
  return (
    <div className="bg-white rounded-md shadow-sm max-w-md mx-auto">
      {selectedStartDate && (
        <div className="p-4 border-b">
          <div className="font-medium text-lg">{formatDateRange()}</div>
        </div>
      )}
      
      <div className="p-4 grid grid-cols-2 gap-8">
        {/* Current Month Calendar */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <button onClick={goToPreviousMonth} className="p-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <h2 className="text-sm font-medium">
              {months[currentMonth]} {currentYear}
            </h2>
            <div className="w-6"></div> {/* Spacer */}
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map(day => (
              <div key={day} className="h-8 text-xs text-center text-gray-500">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {renderCalendarDays(currentYear, currentMonth)}
          </div>
        </div>
        
        {/* Next Month Calendar */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-6"></div> {/* Spacer */}
            <h2 className="text-sm font-medium">
              {months[nextMonth]} {nextYear}
            </h2>
            <button onClick={goToNextMonth} className="p-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map(day => (
              <div key={day} className="h-8 text-xs text-center text-gray-500">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {renderCalendarDays(nextYear, nextMonth)}
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t flex items-center justify-between">
        <button className="p-2 border rounded">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </button>
        <button className="text-sm font-medium text-yellow-600">
          Wyczyść daty
        </button>
      </div>
    </div>
  );
};

export default Calendar;