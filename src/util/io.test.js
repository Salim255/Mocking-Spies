import { it, expect } from "vitest";
import writeData from "./io";

it("should excute the writeFile method", () => {
  const test = "Test";
  const testFileName = "test.text";
  return expect(writeData(test, testFileName)).resolves.toBeUndefined();
});
