// components/List.tsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Projects } from "../../constants/index";

interface CardProps {
    id: string;
    title: string;
    text: string;
    nbpeople: string;
    src: string;
    isSelected?: boolean;
}

const Card: React.FC<CardProps> = ({ id, title, nbpeople, src }) => {
    return (
        <li className="relative p-6 h-[460px] flex-[0_0_40%] max-w-[40%] md:flex-[0_0_50%] md:max-w-[50%] sm:flex-[1_0_100%] sm:max-w-full sm:px-0">
            <div className="card-content-container w-full h-full relative block pointer-events-none">
                <motion.div
                    className="relative rounded-2xl bg-black overflow-hidden w-full h-full pointer-events-auto"
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="absolute top-0 left-0 overflow-hidden h-[420px] w-full"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img className="w-full h-full object-cover" src={src} alt={title} />
                    </motion.div>
                    <motion.div className="absolute top-4 left-4 max-w-[300px]" layoutId={`title-container-${id}`}>
                        <h2 className="text-black text-2xl font-bold my-2">{title}</h2>
                        <span className="text-black text-l uppercase">{nbpeople} personnes</span>
                    </motion.div>
                </motion.div>
            </div>
            <Link href={`/?id=${id}`} className="absolute inset-0" />
        </li>
    );
};

export const List: React.FC<{ selectedId?: string }> = ({ selectedId }) => {
    return (
        <ul className="flex flex-wrap content-start gap-4 p-6">
            {Projects.map((project) => (
                <Card key={project.id} {...project} isSelected={project.id === selectedId} />
            ))}
        </ul>
    );
};
