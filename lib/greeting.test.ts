import { describe, expect, it } from "vitest";
import { getGreeting } from "@/lib/greeting";

describe("getGreeting", () => {
  it("returns the expected greeting for each time range", () => {
    expect(getGreeting(5)).toBe("Good Morning");
    expect(getGreeting(11)).toBe("Good Morning");
    expect(getGreeting(12)).toBe("Good Afternoon");
    expect(getGreeting(16)).toBe("Good Afternoon");
    expect(getGreeting(17)).toBe("Good Evening");
    expect(getGreeting(20)).toBe("Good Evening");
    expect(getGreeting(21)).toBe("Good Night");
    expect(getGreeting(4)).toBe("Good Night");
  });
});
