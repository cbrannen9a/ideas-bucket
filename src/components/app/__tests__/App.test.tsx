import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders starter text", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Starter/i);
  expect(textElement).toBeInTheDocument();
});
