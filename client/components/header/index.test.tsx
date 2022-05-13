import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./index";

it("renders header logo", () => {
  render(<Header />);

  const heading = screen.getByText("Discover");

  expect(heading).toBeInTheDocument();
});
