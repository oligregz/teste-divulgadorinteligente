import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "../store/StoreProvider";

export const metadata: Metadata = {
  title: "Dolor Auctor",
  description:
    "Product listing platform with search function, shopping cart, and coupon application to filter offers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
