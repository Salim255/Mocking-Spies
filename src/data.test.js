import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should excute logFn if provided", () => {
    const logger = vi.fn();
    //What fn does is, it create an empty function, which keeps track of any function excutions of that fucction

    generateReportData(logger);

    //This logger passed in, doesnt do anything but it allow us to find out whether it was excuted, because it's a spy

    expect(logger).toBeCalled();

    //This only makes the test past if logger was called
  });
});
