import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./Mocks/server";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

beforeAll(() => {
  server.listen();
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  userEvent.setup();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
