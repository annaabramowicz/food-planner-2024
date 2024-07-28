import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./Mocks/server";

afterEach(() => {
  cleanup();
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
