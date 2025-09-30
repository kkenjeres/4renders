"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/src/constants";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80"
    >
      <a
        href="#main"
        className="sr-only rounded-md bg-zinc-900 px-3 py-2 text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        Skip to content
      </a>

      <div className="layout-px layout-py grid grid-cols-12 items-center gap-4">
        <div className="col-span-6 sm:col-span-3">
          <Link href="/" aria-label="Home" className="inline-flex items-center gap-2">
            <span aria-hidden className="h-6 w-6 rounded-md bg-zinc-900 dark:bg-zinc-100" />
            <span className="font-semibold">4renders</span>
          </Link>
        </div>

        <nav className="col-span-12 sm:col-span-6" aria-label="Primary">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="contents">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "group inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition",
                      "border border-zinc-300 dark:border-zinc-700",
                      active
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                        : "bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
