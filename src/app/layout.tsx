import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "User Management App",
    description:
        "A clean and professional CRUD application to manage users with React, Next.js, and TypeScript",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${inter.variable} antialiased bg-background text-foreground px-6`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
