"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Apropos from "./a-propos/page";
import ScrollLinked from "./components/scrollProgress";
import ScrollUpButton from "./components/ScrollUpButton";
import { List } from "./components/List";

export default function Home() {
    return (
        <main className="w-screen h-screen relative bg-black">
            <ScrollLinked />
            <div className="absolute top-20 right-20 z-10">
                <Image src="/logo-fiona.png" alt="logo fiona rio" height={400} width={400} className="top-40" />
            </div>
            <div
                className="flex items-center w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('/wllp-portofolio.png')` }}
            >
                <div id="#title" className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-10 max-w-[1000px]">
                    <h1 className="text-8xl text-white font-semibold">
                        Ceci est un super futur
                        <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                            {" "}
                            portfolio
                        </span>
                    </h1>
                    <p className="text-gray-200 hidden md:block">
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
                                className="rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 px-5 border border-white py-3 text-lg text-white max-w-[200px]"
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
                                className="rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 px-5 border border-white py-3 text-lg text-white max-w-[200px]"
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
                                className="rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 border border-white px-5 py-3 text-lg text-white max-w-[200px]"
                            >
                                Contactez moi
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="pb-72 pt-72 bg-black">
                <Apropos />
            </div>

            <div id="mesprojets" className="bg-black p-8">
                <h2 className="flex justify-center text-6xl text-white font-semibold mb-12">Mes Projets</h2>
                <List />
            </div>

            <footer className="fixed bottom-0">
                <ScrollUpButton />
            </footer>
        </main>
    );
}
