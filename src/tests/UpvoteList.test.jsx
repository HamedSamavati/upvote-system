import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { UpvoteProvider } from "../contexts/UpvoteContext";
import UpvoteList from "../components/UpvoteList";
import "@testing-library/jest-dom";
import { expect } from "vitest";

test("renders the upvote list correctly", () => {
  render(
    <UpvoteProvider>
      <UpvoteList group="agreeing" />
    </UpvoteProvider>
  );

  const upvoteButtons = screen.queryAllByTestId("upvote-button");
  expect(upvoteButtons.length).toBeGreaterThan(0);
});

test("toggles upvote selection when clicked", async () => {
  render(
    <UpvoteProvider>
      <UpvoteList group="agreeing" />
    </UpvoteProvider>
  );

  let upvoteButtons = screen.getAllByTestId("upvote-button");
  expect(upvoteButtons.length).toBeGreaterThan(0);

  const firstUpvote = upvoteButtons[0];

  expect(firstUpvote).not.toHaveClass("selected");

  fireEvent.click(firstUpvote);

  await waitFor(() => expect(firstUpvote).toHaveClass("selected"));

  fireEvent.click(firstUpvote);
  await waitFor(() => expect(firstUpvote).not.toHaveClass("selected"));
});

test("adds a new upvote when clicking the '+' button", async () => {
  render(
    <UpvoteProvider>
      <UpvoteList group="agreeing" />
    </UpvoteProvider>
  );

  const addButton = screen.getByTestId("upvote-plus");

  let upvoteButtons = screen.getAllByTestId("upvote-button");
  const initialCount = upvoteButtons.length;

  fireEvent.click(addButton);

  await waitFor(() => {
    upvoteButtons = screen.getAllByTestId("upvote-button");
    expect(upvoteButtons.length).toBe(initialCount + 1);
  });
});
