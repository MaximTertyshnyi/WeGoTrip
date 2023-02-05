import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { BsCalendar } from "react-icons/bs";

import "../index.css";
import { COLORS } from "../const/colors";

const ButtonContainer = styled.div`
  display: flex;
  width: 500px;
  text-align: center;
  align-items: center;
  margin: 33px 32px 100px auto;

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
  width: 100%;
  color: ${COLORS.SECONDARY_BLACK};
`;

const ConnectingText = styled.div`
  font-size: 14px;
  color: ${COLORS.SECONDARY_BLACK};
  margin: 0 10px;
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

  return (
    <ButtonContainer>
      <DateContainer>
        <StyledCalendarIcon />
        <StyledDatePicker
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd MMMM yyyy"
          // уверен что тут нужен этот класс?
          className="reat"
        />
        <ConnectingText>—</ConnectingText>
        <StyledCalendarIcon />
        <StyledDatePicker
          selected={endDate}
          onChange={(date: Date) => {
            setEndDate(date);
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd MMMM yyyy"
          // уверен что тут нужен этот класс?
          className="reat"
        />
      </DateContainer>
      <ConnectingText>vs</ConnectingText>
      <DateContainer>
        <StyledCalendarIcon />
        {/* <DatePickerCustom
        selected={startVsDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startVsDate}
        endDate={endVsDate}
        dateFormat="dd MMMM yyyy"
        className="reat"
      /> */}
        <ConnectingText>—</ConnectingText>
        <StyledCalendarIcon />
        {/* <DatePickerCustom
        selected={endVsDate}
        // onChange={(date) => setStartDate(date)}
        onChange={data :}
        selectsEnd
        startDate={startVsDate}
        endDate={endVsDate}
        minDate={startVsDate}
        dateFormat="dd MMMM yyyy"
        className="reat"
      /> */}
      </DateContainer>
    </ButtonContainer>
  );
};

export { GraphDatePicker };
