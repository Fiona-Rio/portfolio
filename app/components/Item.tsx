// components/Item.tsx
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Projects } from "../../constants/index";
import { useRouter } from "next/navigation";

interface ItemProps {
    id: string;
}

export const Item: React.FC<ItemProps> = ({ id }) => {
    const router = useRouter();
    const item = Projects.find((item) => item.id === id);

    if (!item) {
        return <p>Projet introuvable.</p>;
    }

    const { nbpeople, title, text, src } = item;

    return (
        <>
            <div>
                <button
                    onClick={() => router.push("/#mesprojets")}
                    className="absolute top-4 right-4 text-white bg-red-500 rounded-full px-4 py-2"
                >
                    ✕
                </button>
                <motion.div
                    className="relative rounded-2xl bg-black overflow-hidden w-full max-w-[700px] mx-auto"
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
