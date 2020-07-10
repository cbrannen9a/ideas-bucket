import React from "react";
import { render } from "@testing-library/react";
import Title from "..";

test("renders title", () => {
  const { getByText } = render(<Title title={"Test"} />);
  const textElement = getByText(/Test/i);
  expect(textElement).toBeInTheDocument();
});
