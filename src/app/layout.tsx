import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "@/components/theme-provider";
import SheetSide from "@/components/SheetSide";
import Darkmode from "@/components/ui/dark-mode";
import Menu from "@/components/navbar";
import Link from "next/link";

// Import the Bebas Neue font
const arimo = Arimo({ subsets: ["latin"] });

// Metadata for the page
export const metadata: Metadata = {
  title: "Dashinos - Explore the trend of user experience",
  description:
    "In this Dashboard using Shadcn UI components and provides functionality to manage the dashboard with different devices.",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex items-center justify-between w-full mx-auto my-0 mt-6 mb-9 max-w-[1550px]">
            <Link href="/">
              <h1 className="font-semibold text-3xl font-ewert md:text-5xl ml-[40px]">
                Dashinos
              </h1>
            </Link>
            <div className="flex gap-3 mr-[40px]">
              <Darkmode />
              <div className="show-1">
                <SheetSide />
              </div>
            </div>
          </div>
          <div className="flex gap-[1rem] mx-auto my-0 max-w-[1550px]">
            <div className="seven">
              <div className="sticky top-0">
                <Menu />
              </div>
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
