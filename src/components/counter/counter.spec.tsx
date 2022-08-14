import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CounterComponent from "./counter.component";

describe("CounterComponent", () => {
  describe("Initialize with defaultValue=10 and description=Next Counter", () => {
    const user = userEvent.setup();

    const renderCounter = () =>
      render(<CounterComponent defaultValue={10} description="Next Counter" />);

    it("Counter render with defaultValue=10", () => {
      renderCounter();
      expect(screen.getByText("Counter: 10")).toBeInTheDocument();
    });

    it("Counter render with description=Next Counter", () => {
      renderCounter();
      expect(screen.getByText(/next Counter/i)).toBeInTheDocument();
    });

    it("Counter render with defaultValue=10 and add with plus button", async () => {
      renderCounter();
      expect(screen.getByText("Counter: 10")).toBeInTheDocument();
      await user.type(
        screen.getByLabelText(/Incrementor/),
        "{selectall} {backspace} 5"
      );
      await user.click(
        screen.getByRole("button", { name: "Increase Counter" })
      );
      expect(screen.getByText("Counter: 15")).toBeInTheDocument();
    });

    it("Counter render with defaultValue=0 and minus with negative button", async () => {
      renderCounter();
      expect(screen.getByText("Counter: 10")).toBeInTheDocument();
      await user.type(
        screen.getByLabelText(/Incrementor/),
        "{selectall} {backspace} 5"
      );
      await user.click(
        screen.getByRole("button", { name: "Decrease Counter" })
      );
      expect(screen.getByText("Counter: 5")).toBeInTheDocument();
    });
  });
  describe("Initialize counter component with defaultValue=0 and description=My counter", () => {
    const user = userEvent.setup();
    const renderCounter = () =>
      render(<CounterComponent defaultValue={0} description="My Counter" />);

    it("Counter render with defaultValue=0", () => {
      renderCounter();
      expect(screen.getByText("Counter: 0")).toBeInTheDocument();
    });

    it("Counter render with My Counter description", () => {
      renderCounter();
      expect(screen.getByText(/My Counter/)).toBeInTheDocument();
    });

    it("Counter render with defaultValue=0 and add with plus button", async () => {
      renderCounter();
      expect(screen.getByText("Counter: 0")).toBeInTheDocument();
      await user.click(
        screen.getByRole("button", { name: "Increase Counter" })
      );
      expect(screen.getByText("Counter: 1")).toBeInTheDocument();
    });

    it("Counter render with defaultValue=0 and minus with negative button", async () => {
      renderCounter();
      expect(screen.getByText("Counter: 0")).toBeInTheDocument();
      await user.click(
        screen.getByRole("button", { name: "Decrease Counter" })
      );
      expect(screen.getByText("Counter: -1")).toBeInTheDocument();
    });
  });
});
