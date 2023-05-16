import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";
vi.mock("fs");
//This will replace all the methodes on this module with empty spie methode, that because fs replaced by empty fuction that dont write any text
it("should excute the writeFile method", () => {
  const test = "Test";
  const testFileName = "test.text";
  writeData(test, testFileName);
  expect(fs.writeFile).toBeCalled();
  //return expect(writeData(test, testFileName)).resolves.toBeUndefined();
});
