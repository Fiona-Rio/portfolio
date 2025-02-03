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
                <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center h-screen">
                    <div className="flex text-zinc-700">
                        <div
                            id="title"
                            className="lg:px-5 lg:pt-32 lg:pl-56 lg:pb-32 md:pl-40 pt-20 pb-2 px-14 flex flex-col gap-7"
                        >
                            <h1 className="lg:text-9xl md:text-7xl lg:text-start text-5xl font-bold text-center">
                                Fiona RIO
                            </h1>
                            <h1 className="lg:text-6xl lg:text-start md:text-7xl text-4xl font-bold text-center">
                                Developpeuse web
                            </h1>
                            <p className="lg:text-3xl lg:text-start text-md text-center">
                                Bienvenue ! Je viens de terminer une formation de developpeuse web de 8 mois a Ada Tech
                                School et je recherche activement une alternance d'un an a partir de mars 2025 sur
                                Nantes de preference ou en remote sur toute la France ! 👾
                            </p>
                            <div className="flex flex-row justify-center lg:justify-start items-center gap-5 md:flex-row md:flex lg:mt-2">
                                <motion.button
                                    whileHover={{ scale: 1.06 }}
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
                                    whileHover={{ scale: 1.06 }}
                                    transition={{
                                        scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection("mesprojets")}
                                    className="mx-1 rounded-3xl group relative bg-transparent hover:bg-white hover:bg-opacity-10 lg:px-5 lg:py-3 px-5 py-2 border border-zinc-700 text-sm md:text-lg lg:text-lg text-zinc-700"
                                >
                                    Mes projets
                                </motion.button>
                            </div>
                        </div>
                    </div>
                    <img src="./Room.png" className="h-[300px] w-[300px] lg:h-[600px] lg:w-[600px]" />
                </div>

                <div id="Outils" className="lg:pb-72 lg:mt-64 lg:pt-40 pt-40 mb-20">
                    <h2 className="flex justify-center text-center text-4xl lg:text-7xl text-zinc-700 font-semibold mb-28 px-10">
                        Mes langages et outils
                    </h2>
                    <div className="relative w-full">
                        <LogoWall
                            items={SkillData}
                            direction="horizontal"
                            pauseOnHover={true}
                            size="clamp(8rem, 1rem + 20vmin, 20rem)"
                            duration="40s"
                            bgColor="transparent"
                            bgAccentColor="#b048e0"
                        />
                    </div>
                </div>

                <div id="mesprojets" className="pb-72 pt-40">
                    <h2 className="flex justify-center text-4xl lg:text-7xl text-zinc-700 font-semibold mb-40 px-10">
                        Mes projets de formation
                    </h2>
                    <List />
                </div>

                <footer className="fixed bottom-0 right-0 z-20">
                    <ScrollUpButton />
                </footer>
            </main>
        </AnimatedBackground>
    );
}
