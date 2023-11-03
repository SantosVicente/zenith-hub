import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

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
      <body className={`${jetBrainsMono.className} bg-[#14101b]`}>
        {children}
      </body>
    </html>
  );
}
