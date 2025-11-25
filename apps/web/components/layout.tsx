import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PermissionProvider } from "@/components/auth/permission-provider";
import { getUserPermissions } from "@/utils/permissions";
import { Navbar } from "@/components/navbar"; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "RBAC System",
  description: "Webzenith Solutions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const permissions = await getUserPermissions();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-50`}>
        <PermissionProvider permissions={permissions}>
          
          {/* 1. THE NAVBAR */}
          <Navbar />
          
          {/* 2. MAIN CONTENT (Padded top so navbar doesn't cover it) */}
          <main className="pt-20">
            {children}
          </main>

        </PermissionProvider>
      </body>
    </html>
  );
}