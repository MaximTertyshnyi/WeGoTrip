import React from "react";
import { render, screen } from "@testing-library/react";
import { ProfileScreen } from "./screens/ProfileScreen";

test("renders learn react link", () => {
  render(<ProfileScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
