import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MenuComponent from "./components/MenuComponents/MenuComponent";
import MobileMenuComponent from "@/app/components/MenuComponents/MobileMenuComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Charles Rogers - Software Engineer",
  description: "Full Stack Software Engineer",
};

export default function RootLayout({children} : Readonly<{ children: React.ReactNode}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuComponent />
        <MobileMenuComponent />
        <div className="content">
          {children}
        </div>
        <div className='rippleContainer'>
          <div className="ripple"></div>
          <div className="ripple"></div>
          <div className="ripple"></div>
        </div>
      </body>
    </html>
  );
}
