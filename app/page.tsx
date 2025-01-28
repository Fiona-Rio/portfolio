"use client";
import { motion } from "framer-motion";
import LogoWall from "./components/LogoWall";
import { SkillData } from "../constants/index";
import ScrollLinked from "./components/scrollProgress";
import ScrollUpButton from "./components/ScrollUpButton";
import { List } from "./components/List";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";

export default function Home() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <AnimatedBackground>
            <main className="relative w-full min-h-screen overflow-x-hidden">
                <ScrollLinked />
                <header>
                    <Navbar />
                </header>
                <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center">
                    <div className="flex text-zinc-700">
                        <div
                            id="title"
                            className="pt-20 px-5 md:pl-40 lg:pt-52 lg:pl-56 lg:pb-32 pb-14 flex flex-col gap-7"
                        >
                            <h1 className="lg:text-9xl md:text-7xl text-5xl font-bold">Fiona RIO</h1>
                            <h1 className="lg:text-6xl md:text-7xl text-4xl font-bold">Developpeuse web</h1>
                            <p>
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
                                    onClick={() => scrollToSection("Outils")}
                                    className="mr-1 rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 lg:px-5 lg:py-3 px-5 py-2 border border-zinc-700 text-sm md:text-lg lg:text-lg text-zinc-700"
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
                                    className="mx-1 rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 lg:px-5 lg:py-3 px-5 py-2 border border-zinc-700 text-sm md:text-lg lg:text-lg text-zinc-700"
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
                                    className="ml-1 rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 lg:px-5 lg:py-3 px-5 py-2 border border-zinc-700 text-sm md:text-lg lg:text-lg text-zinc-700"
                                >
                                    Me contacter
                                </motion.button>
                            </div>
                        </div>
                    </div>
                    <img src="./Room.png" className="h-[300px] w-[300px] lg:h-[600px] lg:w-[600px]" />
                </div>

                {/* Section LogoWall */}
                <div id="Outils" className="lg:pb-72 lg:pt-72">
                    <h2 className="flex justify-center text-5xl lg:text-7xl text-zinc-700 font-semibold mb-40 px-10">
                        Mes langages et outils
                    </h2>
                    <div>
                        <LogoWall
                            items={SkillData}
                            direction="horizontal"
                            pauseOnHover={true}
                            size="clamp(8rem, 1rem + 20vmin, 25rem)"
                            duration="30s"
                            bgColor="transparent"
                            bgAccentColor="#b451e1"
                        />
                    </div>
                </div>

                <div id="mesprojets" className="pb-72 pt-40">
                    <h2 className="flex justify-center text-5xl lg:text-7xl text-zinc-700 font-semibold mb-40 px-10">
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
