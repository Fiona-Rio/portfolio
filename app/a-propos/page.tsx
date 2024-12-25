import React, { useState } from "react";
import { motion } from "framer-motion";
import { SkillData } from "@/constants";

const page = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Suivre l'élément survolé

    return (
        <div id="Apropos" className="flex flex-col items-center justify-center gap-20">
            <h1 className="font-semibold text-white text-5xl">
                Compétences{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500"> & </span>
                outils
            </h1>
            <div className="flex gap-10 px-10">
                {SkillData.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        className="flex items-center justify-center"
                        animate={{
                            scale: (() => {
                                if (hoveredIndex === index) return 1.4;
                                if (hoveredIndex === index - 1 || hoveredIndex === index + 1) return 1;
                                return 0.85;
                            })(),
                            filter: (() => {
                                if (hoveredIndex === index) return "brightness(1.2)";
                                if (hoveredIndex === index - 1 || hoveredIndex === index + 1) return "brightness(0.5)";
                                return "brightness(0.3)";
                            })(),
                        }}
                        transition={{
                            duration: 0.5,
                            type: "spring",
                            bounce: 0.5,
                            damping: 15,
                        }}
                        onMouseEnter={() => setHoveredIndex(index)} // Mettre à jour l'index de l'élément survolé
                        onMouseLeave={() => setHoveredIndex(null)} // Réinitialiser lorsque la souris quitte l'élément
                    >
                        <img src={skill.Image} alt={skill.name} width={skill.width} height={skill.height} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default page;
