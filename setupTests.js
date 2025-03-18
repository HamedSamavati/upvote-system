import "@testing-library/jest-dom";

import { vi } from "vitest"; // Import Vitest's vi for mocking

global.localStorage = {
  getItem: vi.fn(() => null),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
