import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
    spotlightColor?: string;
    id: string;
    title: string;
    image?: string;
    description?: string;
    modalContent?: ReactNode;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className = "",
    spotlightColor = "rgba(180, 81, 225, 0.6)", // Couleur par défaut pour le spotlight
    id,
    title,
    image,
    description,
    modalContent,
}) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false); // État pour ouvrir/fermer la modale
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Position de la souris pour l'effet radial
    const [opacity, setOpacity] = useState(0); // Opacité de l'effet spotlight

    // Gestion du mouvement de la souris
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isOpen) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    // Gestion du survol
    const handleMouseEnter = () => {
        setOpacity(1); // Spotlight visible au survol
    };

    const handleMouseLeave = () => {
        setOpacity(0); // Spotlight caché lorsqu'on sort
    };

    // Ouvrir et fermer la modale
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Carte dans la liste */}
            <motion.div
                ref={divRef}
                layoutId={`card-container-${id}`} // Identifiant unique pour les transitions
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    layout: { type: "spring", stiffness: 300, damping: 30 },
                }}
                className={`relative rounded-3xl border border-neutral-700 bg-neutral-900 overflow-hidden p-8 cursor-pointer ${className}`}
            >
                {/* Effet radial */}
                <motion.div
                    className="pointer-events-none absolute inset-0"
                    animate={{ opacity }}
                    style={{
                        background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
                    }}
                />

                {/* Image de la carte */}
                <motion.div layoutId={`card-image-${id}`} className="relative h-96 rounded-2xl overflow-hidden">
                    <motion.img src={image} alt={title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Titre de la carte */}
                <motion.div layoutId={`card-title-${id}`} className="mt-4 text-neutral-200">
                    <h2 className="text-xl font-bold">{title}</h2>
                </motion.div>
            </motion.div>

            {/* Modale */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose} // Ferme la modale au clic en dehors
                    >
                        <motion.div
                            className="text-neutral-300 bg-zinc-800 backdrop-blur bg-opacity-75 rounded-2xl lg:relative lg:w-1/2 md:w-3/4 w-3/4"
                            layoutId={`card-container-${id}`} // Même `layoutId` pour la transition
                            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur la modale
                        >
                            {/* Image dans la modale */}
                            <motion.div
                                layoutId={`card-image-${id}`}
                                className="relative h-64 rounded-t-2xl overflow-hidden"
                            >
                                <motion.img src={image} alt={title} className="w-full h-full object-cover" />
                            </motion.div>

                            {/* Contenu de la modale */}
                            <div className="lg:p-6 md:p-6 p-3">
                                <motion.h2
                                    layoutId={`card-title-${id}`}
                                    className="font-bold lg:text-3xl md:text-3xl text-xl mb-4"
                                >
                                    {title}
                                </motion.h2>
                                {modalContent || <p className="lg:text-lg text-xs">{description}</p>}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SpotlightCard;
