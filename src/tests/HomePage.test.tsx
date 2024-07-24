import { render, screen } from "@testing-library/react";
import HomePage from "app/pages/HomePage/HomePage";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Home Page", () => {
  it("Home Page render correctly", () => {
    render(<HomePage />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
