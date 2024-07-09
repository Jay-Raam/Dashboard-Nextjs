import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "@/components/theme-provider";
import SheetSide from "@/components/SheetSide";
import Darkmode from "@/components/ui/dark-mode";
import Menu from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "In this Dashboard useing shadcn ui components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex items-center justify-between w-full mx-auto my-0 mt-6 mb-9 max-w-[1300px]">
            <h1 className="font-semibold text-xl ml-[40px]">Dashboard</h1>
            <div className="flex gap-3 mr-[40px] ">
              <Darkmode />
              <div className="show-1">
                <SheetSide />
              </div>
            </div>
          </div>
          <div className="flex gap-[1rem] mx-auto my-0 max-w-[1300px]">
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
