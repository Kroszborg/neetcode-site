import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeetCode | Crack Interviews. With a Proven System.",
  description: "Practice coding interview problems and learn with structured courses. Get hired at top tech companies.",
  keywords: ["coding interview", "leetcode", "algorithm", "data structures", "tech interviews"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
