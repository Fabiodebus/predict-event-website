import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PREDICT — Der Event Pipeline Operating Room für B2B-Teams",
  description:
    "PREDICT hilft B2B-Teams, vor dem Event die richtigen Accounts zu identifizieren, Meetings zu buchen und nach dem Event messbaren ROI zu erzeugen.",
  openGraph: {
    title: "PREDICT — Events in messbare Pipeline verwandeln",
    description:
      "Identifizieren Sie ICP-Accounts, buchen Sie Meetings vor dem Event und machen Sie Ihren Event-ROI messbar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#080B10] text-[#EEF2F7]">
        {children}
      </body>
    </html>
  );
}
