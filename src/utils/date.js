//Take a date text. Ej "2023-08-05 09:00:00"
export const isDateEqual = (baseDate, dateToCompare) =>
  new Date(baseDate).toDateString() === new Date(dateToCompare).toDateString();

const numToDayName = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

//Take a date text. Ej "2023-08-05 09:00:00"
const getDateNumber = (dateTxt) => new Date(dateTxt).getDay();

export const getDateName = (dateTxt) => numToDayName[getDateNumber(dateTxt)];
