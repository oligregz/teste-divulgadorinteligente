import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "../store/StoreProvider";
import Header from "../components/Header.component";

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
      <body className="bg-gray-50 min-h-screen">
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
