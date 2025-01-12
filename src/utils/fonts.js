import { Source_Sans_3, Poppins } from "next/font/google";

export const source_sans_3_init = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const poppins_init = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const source_sans = source_sans_3_init.variable;
export const poppins = poppins_init.variable;
