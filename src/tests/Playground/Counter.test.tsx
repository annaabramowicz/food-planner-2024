import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).not.toBeInTheDocument();
  });

  it("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  // it("renders a count of 2 after clicking the increment button", async () => {
  //   user.setup();
  //   render(<Counter />);
  //   const incrementButton = screen.getByRole("button", { name: "Increment" });
  //   await user.click(incrementButton);
  //   await user.click(incrementButton);

  //   const countElement = screen.getByRole("heading");
  //   expect(countElement).toHaveTextContent("2");
  // });

  it("renders a count of 10 after clicking the amount button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    //metoda do wpisywania
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const amountButton = screen.getByRole("button", { name: "amount" });
    await user.click(amountButton);
    const amountHeading = screen.getByRole("heading");
    expect(amountHeading).toHaveTextContent("10");
  });

  it("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const amountButton = screen.getByRole("button", { name: "amount" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    //przeskakiwanie tabem
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(amountButton).toHaveFocus();
  });
});
