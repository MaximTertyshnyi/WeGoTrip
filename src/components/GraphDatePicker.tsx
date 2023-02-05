import { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { BsCalendar } from "react-icons/bs";
import ru from "date-fns/locale/ru";
import { registerLocale } from "react-datepicker";
import "../const/customDatePickerWidth.css";

import "../index.css";
import { COLORS } from "../const/colors";
import { dateStringToRussianFormat, getPrevYear } from "../helpers";

registerLocale("ru", ru);

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  margin: 33px 32px 100px auto;

  @media (max-width: 1220px) {
    flex-direction: column;
    width: auto;
    gap: 20px;
    margin: 33px auto 60px auto;
  }

  @media (max-width: 890px) {
    flex-direction: column;
    width: auto;
    margin: 33px auto 60px auto;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  border: none;
`;

const StyledCalendarIcon = styled(BsCalendar)`
  font-size: 22px;
  margin-right: 5px;
  color: ${COLORS.SECONDARY_BLACK};
`;

const ConnectingText = styled.div`
  font-size: 14px;
  color: ${COLORS.SECONDARY_BLACK};
  margin: 0 35px;
`;

const DateContainer = styled.div`
  display: flex;
`;

interface IGraphDatePickerProps {
  handleChangeStartDate: (dateStr: string) => void;
  handleChangeEndDate: (dateStr: string) => void;
}

const GraphDatePicker = ({
  handleChangeStartDate,
  handleChangeEndDate,
}: IGraphDatePickerProps) => {
  const [startDate, setStartDate] = useState(new Date("2021-12-01"));
  const [endDate, setEndDate] = useState(new Date("2021-12-31"));

  useEffect(() => {
    handleChangeStartDate(new Date(startDate).toLocaleDateString("fr-CA"));
    handleChangeEndDate(new Date(endDate).toLocaleDateString("fr-CA"));
  }, [startDate, endDate]);

  // приведение endDate даты к формату РУ
  const endDateLastYearInRusFormat = useMemo(() => {
    const dateStringInFrCa = endDate.toLocaleDateString("fr-CA");
    const lastYearDateStringInFrCa = getPrevYear(dateStringInFrCa);
    return dateStringToRussianFormat(lastYearDateStringInFrCa);
  }, [dateStringToRussianFormat, endDate]);

  // приведение startDate даты к формату РУ
  const startDateLastYearInRusFormat = useMemo(() => {
    const dateStringInFrCa = startDate.toLocaleDateString("fr-CA");
    const lastYearDateStringInFrCa = getPrevYear(dateStringInFrCa);
    return dateStringToRussianFormat(lastYearDateStringInFrCa);
  }, [dateStringToRussianFormat, startDate]);

  return (
    <ButtonContainer>
      <DateContainer>
        <StyledCalendarIcon />
        <div className="customDatePickerWidth">
          <StyledDatePicker
            locale="ru"
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date);
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd MMMM yyyy"
            className="reat"
          />
        </div>
        <ConnectingText>—</ConnectingText>
        <StyledCalendarIcon />
        <div className="customDatePickerWidth">
          <StyledDatePicker
            locale="ru"
            selected={endDate}
            onChange={(date: Date) => {
              setEndDate(date);
            }}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd MMMM yyyy"
            className="reat"
          />
        </div>
      </DateContainer>
      <ConnectingText>vs</ConnectingText>
      <DateContainer className="reat">
        <StyledCalendarIcon />
        {startDateLastYearInRusFormat}
        <ConnectingText>—</ConnectingText>
        <StyledCalendarIcon />
        {endDateLastYearInRusFormat}
      </DateContainer>
    </ButtonContainer>
  );
};

export { GraphDatePicker };
