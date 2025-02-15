import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import SidebarContainer from "@/components/SidebarContainer";

export const metadata: Metadata = {
  title: "AI Toolkit",
  description: "Provided by Plaetorius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <SidebarContainer>
            {children}
          </SidebarContainer>
        </Providers>
      </body>
    </html>
  );
}
