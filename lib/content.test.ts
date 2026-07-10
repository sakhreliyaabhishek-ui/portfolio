import { describe, expect, it } from "vitest";
import { profile, projects } from "@/lib/content";

describe("project content", () => {
  it("contains Yujix, Presynx, and Jems in order with secure destinations", () => {
    expect(projects.map((project) => project.title)).toEqual([
      "Yujix",
      "Presynx",
      "Jems",
    ]);

    for (const project of projects) {
      expect(project.liveUrl).toMatch(/^https:\/\//);
      expect(project.technologies.length).toBeGreaterThan(2);
      expect(project.projectType.length).toBeGreaterThan(0);
      expect(project.overview.length).toBeGreaterThan(20);
      expect(project.productCapabilities.length).toBeGreaterThanOrEqual(2);
      expect(project.frontendDetails.length).toBeGreaterThan(20);
      expect(project.frontendArchitecture.length).toBeGreaterThanOrEqual(2);
      expect(project.frontendFeatures.length).toBeGreaterThanOrEqual(2);
      expect(project.frontendStack.length).toBeGreaterThanOrEqual(3);
      expect(project.securityReliability.length).toBeGreaterThanOrEqual(1);
      expect(project.notes.length).toBeGreaterThan(20);
    }

    const yujix = projects.find((project) => project.slug === "yujix");
    const presynx = projects.find((project) => project.slug === "presynx");
    const jems = projects.find((project) => project.slug === "jems");

    expect(yujix?.backendDetails).toBeUndefined();
    expect(presynx?.backendDetails).toBeUndefined();
    expect(yujix?.technologies).toContain("GoRouter");
    expect(presynx?.technologies).toContain("Dio");
    expect(jems?.liveUrl).toBe("https://jigomitgems.netlify.app/");
  });

  it("uses Abhishek profile contact and availability details", () => {
    expect(profile.phone).toBe("+91 7990319450");
    expect(profile.availability).toContain("Open to work");
    expect(profile.socials.map((social) => social.label)).toEqual([
      "GitHub",
      "WhatsApp",
      "Email",
    ]);
  });
});
