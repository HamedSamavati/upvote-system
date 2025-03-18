import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { UpvoteProvider, UpvoteContext } from "../contexts/UpvoteContext";
import "@testing-library/jest-dom";
import { expect } from "vitest";

test("toggles upvote selection inside UpvoteContext", async () => {
  render(
    <UpvoteProvider>
      <UpvoteContext.Consumer>
        {({ toggleUpvote, upvoteGroups }) => (
          <div>
            <button onClick={() => toggleUpvote("agreeing", 1)}>Toggle</button>
            <p data-testid="vote-state">
              {upvoteGroups["agreeing"]?.find((vote) => vote.id === 1)?.selected
                ? "true"
                : "false"}
            </p>
          </div>
        )}
      </UpvoteContext.Consumer>
    </UpvoteProvider>
  );

  const button = screen.getByText("Toggle");
  const text = screen.getByTestId("vote-state");

  expect(text.textContent).toBe("false");

  fireEvent.click(button);

  await waitFor(() =>
    expect(screen.getByTestId("vote-state")).toHaveTextContent("true")
  );

  fireEvent.click(button);

  await waitFor(() =>
    expect(screen.getByTestId("vote-state")).toHaveTextContent("false")
  );
});
