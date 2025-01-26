"use client";

import { Gugi } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Charger la police Gugi
const gugi = Gugi({
    subsets: ["latin"], // Charger les caractères latins
    weight: "400", // Épaisseur normale
    display: "swap", // Améliore le rendu
});

export default function RootLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <html lang="en" className={gugi.className}>
            {/* Applique la classe de la police au <html> */}
            <body className="antialiased">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname} // Permet d'animer chaque page sur changement d'URL
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </body>
        </html>
    );
}
