import { describe, expect, it } from "vitest";
import { brandPalette, readableOn } from "./brandColor";

describe("brandPalette", () => {
  it("uses the company color itself on light surfaces", () => {
    const { light } = brandPalette("#e30613");
    expect(light.primary).toBe("#e30613");
    expect(light.primaryForeground).toBe("#ffffff");
  });

  it("lightens the fill in dark mode", () => {
    const { dark } = brandPalette("#185abd");
    // 40 % toward white, per channel
    expect(dark.primary).toBe("#749cd7");
  });

  it("puts dark text on the light dark-mode fill", () => {
    const { dark } = brandPalette("#185abd");
    expect(dark.primaryForeground).toBe("#1a1a1a");
  });

  it("keeps a light company color legible with dark text", () => {
    const { light } = brandPalette("#ffd200");
    expect(light.primaryForeground).toBe("#1a1a1a");
  });
});

describe("readableOn", () => {
  it("picks white on dark and near-black on light fills", () => {
    expect(readableOn("#000000")).toBe("#ffffff");
    expect(readableOn("#ffffff")).toBe("#1a1a1a");
  });
});
