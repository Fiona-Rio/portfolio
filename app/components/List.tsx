import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion pour les animations
import { Projects } from "../../constants/index"; // Import des données (projects)
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCalendarWeekFill } from "react-icons/bs";

interface CardProps {
    id: string;
    title: string;
    nbpeople: string;
    src: string;
    objectives: string;
    onClick: () => void;
}

// Composant carte individuelle
const Card: React.FC<CardProps> = ({ id, title, src, objectives, onClick }) => {
    return (
        <motion.li
            layout // Propriété de Framer Motion pour permettre les animations de disposition
            className="relative p-6 h-96 sm:max-w-full sm:px-0"
            onClick={onClick}
        >
            <motion.div
                layoutId={`card-container-${id}`} // Identifiant unique pour animer cette carte
                className="relative rounded-2xl bg-black overflow-hidden h-full"
                whileHover={{ scale: 1.01 }}
                transition={{
                    scale: { type: "spring" },
                }}
            >
                {/* Image de la carte */}
                <motion.img
                    className="w-full h-full object-cover"
                    src={src}
                    alt={title}
                    layoutId={`card-image-${id}`} // Identifiant pour animer cette image
                />
                {/* Details de la carte */}
                <motion.div layoutId={`card-title-${id}`} className="text-neutral-800 absolute top-10 left-10">
                    <h2 className="text-4xl font-bold">{title}</h2>
                </motion.div>
            </motion.div>
        </motion.li>
    );
};

// Composant liste des cartes
export const List: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null); // État pour suivre quelle carte est sélectionnée

    return (
        <div className="flex flex-wrap justify-center">
            {/* Liste des cartes */}
            <ul className="grid lg:grid-cols-2 gap-x-24 grid-cols-1 max-w-6xl lg:px-2 cursor-pointer">
                {Projects.map((project) => (
                    <Card
                        key={project.id} // Clé unique pour chaque carte
                        {...project} // Transfère les propriétés du projet (id, title, nbpeople, src)
                        onClick={() => setSelectedId(project.id)} // Définit la carte sélectionnée
                    />
                ))}
            </ul>

            {/* Animation conditionnelle : affichage de la carte sélectionnée */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={() => setSelectedId(null)} // en cliquand sur le fond noir cela ferme la carte car aucun id est selectioné
                    >
                        <motion.div
                            className=" text-neutral-300 bg-zinc-800 backdrop-blur bg-opacity-75 rounded-b-2xl lg:relative lg:w-1/2 md:w-3/4 w-3/4 h-8/9 rounded-xl"
                            layoutId={`card-container-${selectedId}`} // Identifiant unique pour animer la transition
                            onClick={(event) => event.stopPropagation()} // Empêche la propagation de l'event onClick du parent (donc bloque le OnClick plus haut)
                        >
                            {/* Image affichée en grand */}
                            <motion.img
                                className="w-full h-64 object-cover rounded-t-2xl"
                                src={Projects.find((projet) => projet.id === selectedId)?.src}
                                alt="image du projet"
                                layoutId={`card-image-${selectedId}`} // Identifiant pour animer l'image
                            />
                            {/* Titre et description du projet sélectionné */}
                            <motion.h2
                                className="absolute lg:top-4 top-28 left-10 lg:mt-4 text-2xl font-bold text-neutral-700"
                                layoutId={`card-title-${selectedId}`} // Identifiant pour animer le titre
                            ></motion.h2>
                            <div className="lg:p-6 md:p-6 p-3">
                                <h1 className="font-bold lg:text-3xl md:text-3xl text-xl">
                                    {Projects.find((projet) => projet.id === selectedId)?.title}
                                </h1>
                                <h1 className="flex gap-1.5 items-center font-bold mb-2 ">
                                    {Projects.find((projet) => projet.id === selectedId)?.time} <BsCalendarWeekFill />
                                    {" | "}
                                    {Projects.find((projet) => projet.id === selectedId)?.nbpeople} <FaPeopleGroup />
                                </h1>
                                <p className="lg:text-lg text-xs">
                                    {Projects.find((projet) => projet.id === selectedId)?.text}
                                </p>
                                <p className="lg:text-lg text-xs">
                                    {Projects.find((projet) => projet.id === selectedId)?.objectives}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
