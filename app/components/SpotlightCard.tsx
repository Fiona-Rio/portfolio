import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
    id: string;
    title: string;
    image: string;
    onClick: () => void;
    spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    id,
    title,
    image,
    onClick,
    spotlightColor = "rgba(195, 115, 231, 0.6)",
}) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={divRef}
            layoutId={`card-container-${id}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            onClick={onClick}
            // whileHover={{ scale: 1 }}
            className="relative h-96 rounded-2xl bg-fuchsia-900 overflow-hidden cursor-pointer"
        >
            {/* Image en premier avec z-index supérieur */}
            <motion.img
                layoutId={`card-image-${id}`}
                className="relative w-full h-4/5 p-3 object-cover rounded-3xl z-10"
                src={image}
                alt={title}
            />
            <motion.div layoutId={`card-title-${id}`} className="px-6 py-4 relative z-10">
                <h2 className="text-2xl font-bold text-fuchsia-200">{title}</h2>
            </motion.div>
            {/* Effet spotlight en dernier avec z-index inférieur */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0"
                animate={{ opacity }}
                style={{
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
                }}
            />
        </motion.div>
    );
};

export default SpotlightCard;
