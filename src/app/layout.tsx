import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenith HUB",
  description:
    "Construa o Futuro! Nossa organização é focada em desenvolver projetos e a aflorar o talento dos membros.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrains.className} bg-[#1b0125] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
