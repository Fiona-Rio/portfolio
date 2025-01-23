"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Apropos from "./a-propos/page";
import ScrollLinked from "./components/scrollProgress";
import ScrollUpButton from "./components/ScrollUpButton";
import { List } from "./components/List";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
    return (
        <AnimatedBackground>
            <main className="relative w-full min-h-screen overflow-x-hidden">
                <ScrollLinked />

                <div className="flex items-center text-zinc-700">
                    <div
                        id="#title"
                        className="pt-60 pl-20 md:pl-40 lg:pl-80 lg:pt-30 md:pt-60 pb-56 md:pb-20 flex flex-col gap-7"
                    >
                        <span className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                            {" "}
                            PORTFOLIO
                        </span>
                        <h1 className="text-7xl font-bold">Fiona RIO</h1>
                        <p className="hidden md:block">
                            Bonjour ! Je suis une apprenante de Ada Tech School en formation jusqu'en février 2025 où je
                            commencerai une alternance d'un an en developpement web. (I hope)
                        </p>
                        <div className="flex-col md:flex-row hidden md:flex gap-5 mt-2">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="#Apropos"
                                    className="rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 px-5 border border-white py-3 text-lg text-zinc-700 max-w-[200px]"
                                >
                                    A propos
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="#mesprojets"
                                    className="rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 px-5 border border-white py-3 text-lg text-zinc-700 max-w-[200px]"
                                >
                                    Mes projets
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/contactez-moi"
                                    className="rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 border border-white px-5 py-3 text-lg text-zinc-700 max-w-[200px]"
                                >
                                    Contactez moi
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="pb-72 pt-72">
                    <Apropos />
                </div>

                <div id="mesprojets" className="pb-72 pt-72">
                    <h2 className="flex justify-center text-6xl text-zinc-700 font-semibold mb-40">
                        Mes projets de formation
                    </h2>
                    <List />
                </div>

                <footer className="fixed bottom-0">
                    <ScrollUpButton />
                </footer>
            </main>
        </AnimatedBackground>
    );
}
