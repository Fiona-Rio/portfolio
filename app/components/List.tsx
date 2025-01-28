import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Projects } from "../../constants/index";
import SpotlightCard from "./SpotlightCard";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCalendarWeekFill } from "react-icons/bs";

interface CardProps {
    id: string;
    title: string;
    nbpeople: string;
    src: string;
    objectives: string;
    time: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ id, title, src, objectives, time, text, nbpeople }) => {
    return (
        <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(180, 81, 225, 0.6)"
            id={id}
            title={title}
            image={src}
            modalContent={
                <div>
                    <h1 className="flex gap-1.5 items-center font-bold mb-2">
                        {time} <BsCalendarWeekFill />
                        {" | "}
                        {nbpeople} <FaPeopleGroup />
                    </h1>
                    <p className="text-sm mb-2">{text}</p>
                    <p className="text-sm">{objectives}</p>
                </div>
            }
        >
            <motion.div
                layoutId={`card-container-${id}`}
                className="relative h-96 rounded-2xl bg-black overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.img
                    className="w-full h-full object-cover"
                    src={src}
                    alt={title}
                    layoutId={`card-image-${id}`}
                />
                <motion.div layoutId={`card-title-${id}`} className="absolute top-5 left-5">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                </motion.div>
            </motion.div>
        </SpotlightCard>
    );
};

export const List: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <ul className="grid lg:grid-cols-2 gap-8 grid-cols-1 max-w-6xl px-4">
                {Projects.map((project) => (
                    <Card key={project.id} {...project} />
                ))}
            </ul>
        </div>
    );
};
