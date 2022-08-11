import React from "react";
import { render, screen } from "@testing-library/react";

import Hello from "./hello";

it("render hello component", () => {
  render(<Hello />);
  const getElement = screen.getByText("Hello");

  expect(getElement).toBeInTheDocument();
});
