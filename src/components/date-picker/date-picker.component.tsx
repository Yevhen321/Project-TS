import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerProps } from './date-picker.types';

export const DatePickerComponent: React.FC<DatePickerProps> = ({
  closeOnScroll = true,
  dateFormat = 'yyyy/MM/dd',
  disabled,
  shouldCloseOnSelect = true,
  onlyCalendar = false,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        closeOnScroll={closeOnScroll}
        dateFormat={dateFormat}
        disabled={disabled}
        shouldCloseOnSelect={shouldCloseOnSelect}
        filterDate={isWeekday}
        inline={onlyCalendar}
      />
    </div>
  );
};
