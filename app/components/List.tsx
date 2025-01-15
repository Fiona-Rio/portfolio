import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion pour les animations
import { Projects } from "../../constants/index"; // Import des données (projects)

interface CardProps {
    id: string;
    title: string;
    nbpeople: string;
    src: string;
    onClick: () => void;
}

// Composant carte individuelle
const Card: React.FC<CardProps> = ({ id, title, nbpeople, src, onClick }) => {
    return (
        <motion.li
            layout // Propriété de Framer Motion pour permettre les animations de disposition
            className="relative p-6 h-96 sm:max-w-full sm:px-0"
            onClick={onClick}
        >
            <motion.div
                layoutId={`card-container-${id}`} // Identifiant unique pour animer cette carte
                className="relative rounded-2xl bg-black overflow-hidden h-full"
            >
                {/* Image de la carte */}
                <motion.img
                    className="w-full h-full object-cover"
                    src={src}
                    alt={title}
                    layoutId={`card-image-${id}`} // Identifiant pour animer cette image
                />
                {/* Details de la carte */}
                <motion.div layoutId={`card-title-${id}`} className="absolute top-4 left-4">
                    <h2 className="text-black text-2xl font-bold">{title}</h2>
                    <p className="text-black">{nbpeople} personnes</p>
                </motion.div>
            </motion.div>
        </motion.li>
    );
};

// Composant liste des cartes
export const List: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null); // État pour suivre quelle carte est sélectionnée

    return (
        <div className="flex flex-wrap justify-start">
            {/* Liste des cartes */}
            <ul className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full lg:px-4">
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
                            className="bg-white bg-opacity-70 lg:relative lg:w-1/2 md:w-3/4 p-6 rounded-xl"
                            layoutId={`card-container-${selectedId}`} // Identifiant unique pour animer la transition
                            onClick={(event) => event.stopPropagation()} // Empêche la propagation de l'event onClick du parent (donc bloque le OnClick plus haut)
                        >
                            {/* Image affichée en grand */}
                            <motion.img
                                className="w-full h-64 object-cover"
                                src={Projects.find((projet) => projet.id === selectedId)?.src}
                                alt=""
                                layoutId={`card-image-${selectedId}`} // Identifiant pour animer l'image
                            />
                            {/* Titre et description du projet sélectionné */}
                            <motion.h2
                                className="absolute lg:top-4 top-28 left-10 lg:mt-4 text-2xl font-bold"
                                layoutId={`card-title-${selectedId}`} // Identifiant pour animer le titre
                            >
                                {Projects.find((projet) => projet.id === selectedId)?.title}
                            </motion.h2>
                            <h1>{Projects.find((projet) => projet.id === selectedId)?.nbpeople} personnes</h1>
                            <p>{Projects.find((projet) => projet.id === selectedId)?.text}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
