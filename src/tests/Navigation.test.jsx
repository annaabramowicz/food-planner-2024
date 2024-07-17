import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Navigation from "../app/Navigation/Navigation";

vi.mock("../app/Navigation/MobileNavigation/", () => ({
  default: () => <div>Mobile Navigation</div>,
}));
vi.mock("../app/Navigation/TabletDesktopNavigation", () => ({
  default: () => <div>Tablet Desktop Navigation</div>,
}));

describe("Navigation component", () => {
  beforeEach(() => {
    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
  });
  it("renders MobileNavigation on small screens", () => {
    window.innerWidth = 320;
    window.dispatchEvent(new Event("resize"));

    render(<Navigation />);
    expect(screen.getByText("Mobile Navigation")).toBeInTheDocument();
    expect(
      screen.queryByText("Tablet/Desktop Navigation")
    ).not.toBeInTheDocument();
  });
});
