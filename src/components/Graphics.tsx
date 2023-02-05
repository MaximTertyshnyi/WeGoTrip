import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { GraphDatePicker } from "./GraphDatePicker";
import {
  dateStringToRussianFormat,
  getArrayBetweenDates,
  getPrevYear,
} from "../helpers";
import { getStats, IResponse } from "../api/stats";
import { useQuery } from "@tanstack/react-query";
import { COLORS } from "../const/colors";

const Container = styled.div`
  display: flex;
  text-align: center;
  gap: 50px;

  @media (max-width: 1630px) {
    flex-direction: column;
  }
`;

const ContainerBarChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.1px solid ${COLORS.BORDER_GRAY};
  border-radius: 8px;
  height: 279px;
  width: 600px;
  padding: 16px;

  @media (max-width: 1630px) {
    width: 590px;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    height: 265px;
    width: 300px;
    margin: 0 auto;
  }
`;

const ReportText = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: ${COLORS.BLACK};
  text-transform: uppercase;
  text-align: start;
  padding-bottom: 15px;
  margin: auto 0;
`;

const GraphSumm = styled.div`
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  color: ${COLORS.BLUE};
  text-align: start;
  display: flex;
  gap: 12px;
`;

const SummAndPercent = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const GraphPercent = styled.div`
  height: 24px;
  padding: 4px;
  font-weight: 400;
  font-size: 12px;
  background: ${COLORS.GREEN};
  border-radius: 4px;
  margin: auto 0;
  display: flex;
  align-items: center;
`;

const DifferencePreviousYear = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Graphics = () => {
  const { data: statsData } = useQuery<IResponse>({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  const [startDateStr, setStartDateStr] = useState("");
  const [endDateStr, setEndDateStr] = useState("");

  function handleChangeStartDate(dateStr: string) {
    setStartDateStr(dateStr);
  }

  function handleChangeEndDate(dateStr: string) {
    setEndDateStr(dateStr);
  }

  // endDate, которая прокидывается под график
  const endDateLastYearInRusFormat = useMemo(() => {
    const dateStringInFrCa = new Date(endDateStr).toLocaleDateString("fr-CA");
    return dateStringToRussianFormat(dateStringInFrCa);
  }, [dateStringToRussianFormat, endDateStr]);

  // startDate, которая прокидывается под график
  const startDateLastYearInRusFormat = useMemo(() => {
    const dateStringInFrCa = new Date(startDateStr).toLocaleDateString("fr-CA");
    return dateStringToRussianFormat(dateStringInFrCa);
  }, [dateStringToRussianFormat, startDateStr]);

  // массив продаж которые нам надо показать на графике
  const rangePurchases = useMemo(() => {
    if (startDateStr && endDateStr && statsData) {
      return getArrayBetweenDates(
        statsData.purchases,
        startDateStr,
        endDateStr
      );
    }
    return [];
  }, [statsData, startDateStr, endDateStr, getArrayBetweenDates]);

  // массив продаж которые нам надо показать на графике за прошлый год
  const lastYearRangePurchases = useMemo(() => {
    if (startDateStr && endDateStr && statsData) {
      return getArrayBetweenDates(
        statsData.purchases,
        getPrevYear(startDateStr),
        getPrevYear(endDateStr)
      );
    }
    return [];
  }, [statsData, startDateStr, endDateStr, getArrayBetweenDates, getPrevYear]);

  // сумма всех продаж
  const summValues = useMemo(() => {
    return rangePurchases.reduce((acc, date) => acc + date.value, 0);
  }, [rangePurchases]);

  // displayData хранит в себе startDate и endDate c данными из нужного массива, для использования в компоненьте графиков
  const displayData = useMemo(() => {
    return rangePurchases.map((purchaseData, i) => ({
      ...purchaseData,
      lastYearValue: lastYearRangePurchases[i]?.value,
    }));
  }, [rangePurchases, lastYearRangePurchases]);

  // сумма всех продаж за временной отрезок, предыдущего года
  const lastYearSummValues = useMemo(() => {
    return lastYearRangePurchases.reduce((acc, date) => acc + date.value, 0);
  }, [lastYearRangePurchases]);

  // процентное отображение прироста за выбранный период
  const precentSummValues = useMemo(() => {
    return (
      (rangePurchases.reduce((acc, date) => acc + date.value, 0) -
        lastYearRangePurchases.reduce((acc, date) => acc + date.value, 0)) /
      100
    );
  }, [lastYearRangePurchases]);

  // второй график с кликами  и просмотрами
  // массив просмотров и кликов которые нам надо показать на графике
  const rangeViewsAndClicks = useMemo(() => {
    if (startDateStr && endDateStr && statsData) {
      return getArrayBetweenDates(
        statsData.views_to_clicks,
        startDateStr,
        endDateStr
      );
    }
    return [];
  }, [statsData, startDateStr, endDateStr, getArrayBetweenDates]);

  // массив просмотров и кликов которые нам надо показать на графике за прошлый год
  const lastYearRangeViewsAndClicks = useMemo(() => {
    if (startDateStr && endDateStr && statsData) {
      return getArrayBetweenDates(
        statsData.views_to_clicks,
        getPrevYear(startDateStr),
        getPrevYear(endDateStr)
      );
    }
    return [];
  }, [statsData, startDateStr, endDateStr, getArrayBetweenDates, getPrevYear]);

  // displayClick хранит в себе startDate и endDate c данными из нужного массива, для использования в компоненьте графиков
  const displayClick = useMemo(() => {
    return rangeViewsAndClicks.map((viewstToClicks, i) => ({
      ...viewstToClicks,
      lastYearValue:
        lastYearRangeViewsAndClicks[i]?.view +
        lastYearRangeViewsAndClicks[i]?.click,
      valueAndClicks:
        rangeViewsAndClicks[i]?.view + rangeViewsAndClicks[i]?.click,
    }));
  }, [rangeViewsAndClicks, lastYearRangeViewsAndClicks]);

  ////// расчет процентов всех кликов
  const lastYearSummClicksAndViews = useMemo(() => {
    return (
      (rangeViewsAndClicks.reduce(
        (acc, date) => acc + date.view + date.click,
        0
      ) -
        lastYearRangeViewsAndClicks.reduce(
          (acc, date) => acc + date.view + date.click,
          0
        )) /
      100
    );
  }, [rangeViewsAndClicks, lastYearRangeViewsAndClicks]);

  ////// расчет отображения преобразований продаж "из - в" для просмотров за выбранный период
  const summViews = useMemo(() => {
    return rangeViewsAndClicks.reduce((acc, date) => acc + date.view, 0);
  }, [rangeViewsAndClicks]);

  ////// расчет отображения преобразований продаж "из - в" для просмотров за прошлый год
  const lastYearSummViews = useMemo(() => {
    return lastYearRangeViewsAndClicks.reduce(
      (acc, date) => acc + date.view,
      0
    );
  }, [lastYearRangeViewsAndClicks]);

  ////// расчет отображения преобразований кликов "из - в" для просмотров за выбранный период
  const summClicks = useMemo(() => {
    return rangeViewsAndClicks.reduce((acc, date) => acc + date.click, 0);
  }, [rangeViewsAndClicks]);

  ////// расчет отображения преобразований кликов "из - в" для просмотров за прошлый год
  const lastYearSummClicks = useMemo(() => {
    return lastYearRangeViewsAndClicks.reduce(
      (acc, date) => acc + date.click,
      0
    );
  }, [lastYearRangeViewsAndClicks]);

  return (
    <div>
      <GraphDatePicker
        handleChangeStartDate={handleChangeStartDate}
        handleChangeEndDate={handleChangeEndDate}
      />
      <Container>
        {displayData && (
          <ContainerBarChart>
            <div>
              <ReportText>Продажи</ReportText>
              <SummAndPercent>
                <GraphSumm>
                  {Math.trunc(summValues)}₽
                  <GraphPercent>{precentSummValues.toFixed(1)}%</GraphPercent>
                </GraphSumm>
                <ReportText style={{ color: "#4eaef4" }}>
                  {Math.trunc(lastYearSummValues)}₽
                </ReportText>
              </SummAndPercent>
            </div>
            <ResponsiveContainer width="100%" height={135}>
              <BarChart data={displayData} barSize={15}>
                <Bar dataKey="value" stackId="a" fill="#64B6F7" />
                <Bar dataKey="lastYearValue" stackId="a" fill="#b6deff" />
              </BarChart>
            </ResponsiveContainer>
            <DifferencePreviousYear style={{ marginTop: -30 }}>
              <ReportText>{startDateLastYearInRusFormat}</ReportText>
              <ReportText>{endDateLastYearInRusFormat}</ReportText>
            </DifferencePreviousYear>
          </ContainerBarChart>
        )}

        {displayClick && (
          <ContainerBarChart>
            <div>
              <ReportText>Просмотры → Клики</ReportText>
              <GraphSumm>{lastYearSummClicksAndViews.toFixed(1)}%</GraphSumm>

              <DifferencePreviousYear>
                <ReportText>
                  {lastYearSummViews} → {summViews}
                </ReportText>
                <ReportText style={{ color: "#757575" }}>
                  {lastYearSummClicks} → {summClicks}
                </ReportText>
              </DifferencePreviousYear>
            </div>
            <ResponsiveContainer width="100%" height={135}>
              <BarChart data={displayClick} barSize={15}>
                <Bar dataKey="valueAndClicks" stackId="a" fill="#64B6F7" />
                <Bar dataKey="lastYearValue" stackId="a" fill="#b6deff" />
              </BarChart>
            </ResponsiveContainer>
            <DifferencePreviousYear>
              <ReportText>{startDateLastYearInRusFormat}</ReportText>
              <ReportText>{endDateLastYearInRusFormat}</ReportText>
            </DifferencePreviousYear>
          </ContainerBarChart>
        )}
      </Container>
    </div>
  );
};
