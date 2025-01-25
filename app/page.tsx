"use client";
import { motion } from "framer-motion";
import Apropos from "./a-propos/page";
import ScrollLinked from "./components/scrollProgress";
import ScrollUpButton from "./components/ScrollUpButton";
import { List } from "./components/List";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <AnimatedBackground>
            <main className="relative w-full min-h-screen overflow-x-hidden">
                <ScrollLinked />

                <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center">
                    <div className="flex text-zinc-700">
                        <div
                            id="title"
                            className="pt-20 px-10 md:pl-40 lg:pl-80 lg:pt-30 md:pt-60 lg:pb-56 pb-14 flex flex-col gap-7"
                        >
                            <span className="lg:text-9xl md:text-9xl text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
                                {" "}
                                PORTFOLIO
                            </span>
                            <h1 className="lg:text-7xl md:text-7xl text-4xl font-bold">Fiona RIO</h1>
                            <p className="">
                                Bonjour ! Je suis une apprenante de Ada Tech School en formation jusqu'en février 2025
                                où je commencerai une alternance d'un an en developpement web. (I hope)
                            </p>
                            <div className="flex-col md:flex-row md:flex lg:gap-5 lg:mt-2">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection("Apropos")}
                                    className=" mr-2 rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 lg:px-5 lg:py-3 px-5 py-2 border border-zinc-700 text-base md:text-lg lg:text-lg text-zinc-700"
                                >
                                    Mes outils
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection("mesprojets")}
                                    className=" mx-2 rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 lg:px-5 lg:py-3 px-5 py-2 border border-zinc-700 text-base md:text-lg lg:text-lg text-zinc-700"
                                >
                                    Mes projets
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection("Apropos")}
                                    className=" ml-2 rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 lg:px-5 lg:py-3 px-5 py-2 border border-zinc-700 text-base md:text-lg lg:text-lg text-zinc-700"
                                >
                                    Me contacter
                                </motion.button>
                            </div>
                        </div>
                    </div>
                    <img src="./Room.png" className="lg:pt-10 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]" />
                </div>

                <div className="lg:pb-72 lg:pt-72">
                    <Apropos />
                </div>

                <div id="mesprojets" className="pb-72 pt-72 px-10">
                    <h2 className="flex justify-center text-5xl lg:text-7xl text-zinc-700 font-semibold mb-40">
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
