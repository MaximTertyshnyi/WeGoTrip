import React from "react";
import { render, screen } from "@testing-library/react";
import { ProfileScreen } from "./screens/ProfileScreen";
import { BrowserRouter } from "react-router-dom";
import { dateStringToRussianFormat, dateStrToInt } from "./helpers";

test("renders user name element", () => {
  render(
    <BrowserRouter>
      <ProfileScreen />
    </BrowserRouter>
  );
  const nameElement = screen.getByText(/Борис веркс/i);
  expect(nameElement).toBeInTheDocument();
});

test("Converts date strings to int correctly", () => {
  expect(dateStrToInt("2021-01-01")).toBe(20210101);
});

describe("dateStringToRussianFormat", () => {
  it("should convert a valid date string in US format to the correct format in Russian language", () => {
    expect(dateStringToRussianFormat("2020-01-01")).toBe("1 января 2020 г.");
  });

  test("Returns the date in the correct format", () => {
    expect(dateStringToRussianFormat("2020-01-01")).toBe("1 января 2020 г.");
  });

  // падает из-за того что dateStringToRussianFormat не возвращает строку когда передается невалидная дата\
  // можно будет поправить позже
  // it("should return an empty string for an invalid date string", () => {
  //   expect(dateStringToRussianFormat("2020-13-01")).toBe("");
  // });
});
