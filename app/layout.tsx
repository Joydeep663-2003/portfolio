import "./globals.css";
import React from "react";

export const metadata = {
  title: "Joydeep Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
