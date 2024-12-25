"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Apropos from "./a-propos/page";
import ScrollLinked from "./scrollProgress";

export default function Home() {
    return (
        <main className="w-screen h-screen relative bg-black">
            <ScrollLinked />
            <div
                className="flex items-center w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/main-bg.webp)" }}
            >
                <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-10 max-w-[750px]">
                    <h1 className="text-7xl text-white font-semibold">
                        Ceci est un super futur
                        <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                            {" "}
                            portfolio
                        </span>
                    </h1>
                    <p className="text-gray-200 hidden md:block">
                        Bonjour ! Je suis une apprenante de Ada Tech School en formation jusqu'en février 2025 où je
                        commencerai une alternance d'un an en developpement web. (I hope)
                    </p>
                    <div className="flex-col md:flex-row hidden md:flex gap-5 mt-2">
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="#Apropos"
                                className="rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 px-5 border border-white py-3 text-lg text-white max-w-[200px]"
                            >
                                A propos
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/mes-projets"
                                className="rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 px-5 border border-white py-3 text-lg text-white max-w-[200px]"
                            >
                                Mes projets
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
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

            <div className="absolute bottom-0 right-0 z-10">
                {/* <Image src="/horse.png" alt="horse" height={300} width={300} className="absolute top-40" /> */}

                <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
            </div>

            <div className="absolute bottom-0 w-full h-auto">
                <Image src="/trees.webp" alt="trees" width={2000} height={2000} className="w-full h-full" />
            </div>

            <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-0 left-0 z-10" />

            <div className="w-full min-h-screen pt-72 bg-black">
                <Apropos />
            </div>
        </main>
    );
}
