import "@testing-library/jest-dom/vitest";
import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { createElement } from "react";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { AppShell, __resetIntroSequenceForTests } from "@/components/app-shell";

vi.mock("@/lib/greeting", () => ({
  getGreeting: () => "Good Morning",
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/projects",
}));

vi.mock("framer-motion", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  motion: new Proxy(
    {},
    {
      get: (_target, key: string) => {
        const Component = (props: Record<string, unknown>) => {
          const {
            children,
            initial,
            animate,
            exit,
            transition,
            layoutId,
            ...elementProps
          } = props;
          void [initial, animate, exit, transition, layoutId];
          return createElement(key, elementProps, children as React.ReactNode);
        };
        Component.displayName = `Motion${key}`;
        return Component;
      },
    },
  ),
  useReducedMotion: () => true,
}));

function greetingPill() {
  return document.querySelector(".greeting-pill");
}

describe("AppShell mobile navigation", () => {
  beforeEach(() => {
    __resetIntroSequenceForTests();
    document.body.style.overflow = "";
    vi.stubGlobal(
      "matchMedia",
      vi.fn((query: string) => ({
        matches: query.includes("prefers-reduced-motion"),
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    );
    vi.stubGlobal("performance", {
      ...globalThis.performance,
      now: vi.fn(() => 0),
      getEntriesByType: vi.fn(() => [{ startTime: 0 }]),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("shows hello immediately on first paint", () => {
    render(
      <AppShell>
        <main>Home content</main>
      </AppShell>,
    );

    expect(greetingPill()).toBeTruthy();
    expect(greetingPill()).toHaveTextContent("Hello");
    expect(greetingPill()).toHaveTextContent("👋");
  });

  it("shows hello and good morning for equal durations", async () => {
    vi.useFakeTimers();

    render(
      <AppShell>
        <main>Home content</main>
      </AppShell>,
    );

    await act(async () => {
      vi.advanceTimersByTime(0);
    });

    expect(greetingPill()).toHaveTextContent("Hello");

    await act(async () => {
      vi.advanceTimersByTime(174);
    });
    expect(greetingPill()).toHaveTextContent("Hello");

    await act(async () => {
      vi.advanceTimersByTime(1);
    });
    expect(greetingPill()).toHaveTextContent("Good Morning");
    expect(greetingPill()).not.toHaveTextContent("Hello");

    await act(async () => {
      vi.advanceTimersByTime(174);
    });
    expect(greetingPill()).toHaveTextContent("Good Morning");
    expect(greetingPill()).not.toHaveTextContent("Hello");

    await act(async () => {
      vi.advanceTimersByTime(1);
    });

    expect(greetingPill()).toBeNull();
  });

  it("never shows hello and good morning together", async () => {
    vi.useFakeTimers();

    render(
      <AppShell>
        <main>Home content</main>
      </AppShell>,
    );

    for (let elapsed = 0; elapsed <= 350; elapsed += 25) {
      await act(async () => {
        vi.advanceTimersByTime(25);
      });

      const pill = greetingPill();
      if (!pill) continue;

      const text = pill.textContent ?? "";
      const hasHello = text.includes("Hello");
      const hasGoodMorning = text.includes("Good Morning");
      expect(hasHello && hasGoodMorning).toBe(false);
    }
  });

  it("does not restart hello after remount", async () => {
    vi.useFakeTimers();

    const { unmount } = render(
      <AppShell>
        <main>Home content</main>
      </AppShell>,
    );

    await act(async () => {
      vi.advanceTimersByTime(100);
    });

    expect(greetingPill()).toHaveTextContent("Hello");

    unmount();

    render(
      <AppShell>
        <main>Home content</main>
      </AppShell>,
    );

    await act(async () => {
      vi.advanceTimersByTime(0);
    });

    expect(greetingPill()).toHaveTextContent("Hello");

    await act(async () => {
      vi.advanceTimersByTime(75);
    });

    expect(greetingPill()).toHaveTextContent("Good Morning");
    expect(greetingPill()).not.toHaveTextContent("Hello");
  });

  it("shows hello then time greeting during intro", async () => {
    vi.useFakeTimers();

    render(
      <AppShell>
        <main>Home content</main>
      </AppShell>,
    );

    await act(async () => {
      vi.advanceTimersByTime(0);
    });

    expect(greetingPill()).toHaveTextContent("Hello");

    await act(async () => {
      vi.advanceTimersByTime(174);
    });
    expect(greetingPill()).toHaveTextContent("Hello");

    await act(async () => {
      vi.advanceTimersByTime(1);
    });
    expect(greetingPill()).toHaveTextContent("Good Morning");
    expect(greetingPill()).not.toHaveTextContent("Hello");

    await act(async () => {
      vi.advanceTimersByTime(174);
    });
    expect(greetingPill()).toHaveTextContent("Good Morning");

    await act(async () => {
      vi.advanceTimersByTime(1);
    });

    const navTrigger = screen
      .getAllByRole("button", { name: "Open navigation" })
      .find((item) => item.classList.contains("mobile-nav-trigger"));
    expect(navTrigger).toBeDefined();
    expect(navTrigger).toHaveTextContent("Projects");
  });

  it("opens, filters, and closes the command sheet", async () => {
    render(
      <AppShell>
        <main>Project content</main>
      </AppShell>,
    );

    expect(screen.getByText("Project content")).toBeVisible();

    const trigger = await waitFor(() => {
      const button = screen
        .getAllByRole("button", { name: "Open navigation" })
        .find((item) => item.classList.contains("mobile-nav-trigger"));
      if (!button) {
        throw new Error("Mobile navigation trigger not found");
      }
      return button;
    }, { timeout: 3000 });

    await waitFor(() => {
      expect(trigger).toHaveTextContent("Projects");
    }, { timeout: 3000 });

    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "Site navigation" });
    expect(dialog).toBeVisible();
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.change(screen.getByRole("textbox", { name: "Search navigation" }), {
      target: { value: "about" },
    });
    await waitFor(() => {
      const sheet = screen.getByRole("dialog", { name: "Site navigation" });
      expect(within(sheet).getByRole("link", { name: "About" })).toBeVisible();
      expect(within(sheet).queryByRole("link", { name: "Projects" })).not.toBeInTheDocument();
    });

    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: "Site navigation" })).not.toBeInTheDocument();
    });
  }, 15000);
});
