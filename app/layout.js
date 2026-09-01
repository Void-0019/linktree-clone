import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = localFont({
  src: [
    {
      path: "./fonts/DMSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/DMSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/DMSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/DMSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/DMSans-ExtraBold.ttf",
      weight: "800",
    },
  ],
});

export const metadata = {
  title: "Linkly",
  description: "A Linktree clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} min-h-full flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}