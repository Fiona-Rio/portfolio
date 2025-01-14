import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Projects } from "../../constants/index";

interface CardProps {
    id: string;
    title: string;
    nbpeople: string;
    src: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ id, title, nbpeople, src, onClick }) => {
    return (
        <motion.li
            layout
            className="relative p-6 h-[460px] flex-[0_0_40%] max-w-[40%] md:flex-[0_0_50%] md:max-w-[50%] sm:flex-[1_0_100%] sm:max-w-full sm:px-0"
            onClick={onClick}
        >
            <motion.div
                layoutId={`card-container-${id}`}
                className="relative rounded-2xl bg-black overflow-hidden w-full h-full"
            >
                <motion.img
                    className="w-full h-full object-cover"
                    src={src}
                    alt={title}
                    layoutId={`card-image-${id}`}
                />
                <motion.div layoutId={`card-title-${id}`} className="absolute top-4 left-4">
                    <h2 className="text-black text-2xl font-bold">{title}</h2>
                    <p className="text-black">{nbpeople} personnes</p>
                </motion.div>
            </motion.div>
        </motion.li>
    );
};

export const List: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div className="relative">
            <ul className="flex flex-wrap gap-4">
                {Projects.map((project) => (
                    <Card key={project.id} {...project} onClick={() => setSelectedId(project.id)} />
                ))}
            </ul>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-3/4 bg-white p-6 rounded-xl"
                            layoutId={`card-container-${selectedId}`}
                        >
                            <button className="absolute top-2 right-2 text-black" onClick={() => setSelectedId(null)}>
                                Fermer
                            </button>
                            <motion.img
                                className="w-full h-64 object-cover"
                                src={Projects.find((p) => p.id === selectedId)?.src}
                                alt=""
                                layoutId={`card-image-${selectedId}`}
                            />
                            <motion.h2 className="text-2xl font-bold mt-4" layoutId={`card-title-${selectedId}`}>
                                {Projects.find((p) => p.id === selectedId)?.title}
                            </motion.h2>
                            <p>{Projects.find((p) => p.id === selectedId)?.nbpeople} personnes</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
