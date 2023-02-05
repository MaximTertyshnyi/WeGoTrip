export function getPrevYear(dateStr: string) { // date format - 2020-01-01
  return (parseInt(dateStr.slice(0, 4)) - 1) + dateStr.slice(4);
}
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export function dateStringToRussianFormat (date: string) {
  return (new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).replace(/\s*г\./, ""))
}

export function dateStrToInt(dateStr: string): number {
  return parseInt(dateStr.replaceAll('-', ''));
}

export function getArrayBetweenDates<T extends { date: string }>(
  arr: T[],
  startDate: string,
  endDate: string,
) {
  const indexToStartFrom = arr.findIndex(
    ({ date }) => dateStrToInt(date) >= dateStrToInt(startDate)
  );

  if (indexToStartFrom < 0) return [];

  let resultArr: T[] = [];
  let i = indexToStartFrom;
  let currentDate = dateStrToInt(arr[i].date);
  const endDateInt = dateStrToInt(endDate);

  while (currentDate <= endDateInt) {
    resultArr.push(arr[i]);
    i++;

    if (!arr[i]) break;
    
    currentDate = dateStrToInt(arr[i].date);
  }

  return resultArr;
};