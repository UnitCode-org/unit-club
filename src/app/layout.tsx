import type { Metadata } from "next";
import { DM_Sans, Albert_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });
const albertSans = DM_Sans({ subsets: ["latin"], variable: '--font-albert-sans', });

export const metadata: Metadata = {
  title: "Unit Club",
  description: "Unit Club by Unit Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${albertSans.variable}`}>
      <body className="font-dm-sans">{children}</body>
    </html>
  );
}
