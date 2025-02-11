import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Bloggers - Podziel się swoją opinią ze światem!",
    description: "Prosta platforma do publikowania swoich postów i przeglądania postów innych użytkowników.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <div className="flex min-h-screen">
                <Header />
                <main className="flex-1 p-5 bg-gray-100 ml-64">{children}</main>
            </div>
        </body>
        </html>
    );
}
