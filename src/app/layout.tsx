import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NexTech - Eletrônicos e Tecnologia",
    description: "Na NexTech, encontre os melhores eletrônicos e acessórios com qualidade e preços imbatíveis. Tecnologia que transforma o seu dia a dia!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={inter.className}
                cz-shortcut-listen="true"
            >
                <Header />
                {children}
            </body>
        </html>
    );
};