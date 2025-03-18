import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Upvote from "../components/Upvote";
import "@testing-library/jest-dom";
import { expect, vi } from "vitest";

test("toggles selection state when clicked", () => {
  let selected = false;
  const mockToggle = vi.fn(() => {
    selected = !selected;
  });

  render(<Upvote selected={selected} onClick={mockToggle} />);

  // const button = screen.getByRole("button");
  const button = screen.getByTestId("upvote-button");

  // Initial state should not be selected
  expect(button).not.toHaveClass("selected");

  // Click to select
  fireEvent.click(button);
  expect(mockToggle).toHaveBeenCalledTimes(1);
});
