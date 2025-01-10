// components/Item.tsx
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Projects } from "../../constants/index";

interface ItemProps {
    id: string;
}

export const Item: React.FC<ItemProps> = ({ id }) => {
    const item = Projects.find((item) => item.id === id);

    if (!item) {
        return <p>Projet introuvable.</p>;
    }

    const { nbpeople, title, text, src } = item;

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="overlay"
            >
                <Link href="/#mesprojets" className="absolute inset-0" />
            </motion.div>

            <div className="card-content-container open">
                <motion.div
                    className="relative rounded-2xl bg-[#1c1c1e] overflow-hidden w-full max-w-[700px] mx-auto"
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="relative h-[300px] w-full overflow-hidden"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img className="w-full h-full object-cover" src={src} alt={title} />
                    </motion.div>
                    <motion.div className="p-8" layoutId={`title-container-${id}`}>
                        <span className="text-white text-sm uppercase">{nbpeople} personnes</span>
                        <h2 className="text-white my-2">{title}</h2>
                    </motion.div>
                    <motion.div className="px-8 pb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <p className="text-[#9d9ca1] text-lg leading-7">{text}</p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};
