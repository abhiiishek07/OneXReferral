"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  console.log("children", children, props);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
