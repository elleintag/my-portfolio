import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata = {
    title: "Joelle Lintag", // TODO
    description: "Design and Development Portfolio", // TODO
    // ALSO CHANGE FAVICON TO SOMETHING BETTER
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="w-full overflow-x-hidden">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
