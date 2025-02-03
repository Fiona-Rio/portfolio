import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Projects } from "../../constants/index";
import SpotlightCard from "./SpotlightCard";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCalendarWeekFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

interface Project {
    id: string;
    title: string;
    nbpeople: string;
    src: string;
    objectives: string;
    time: string;
    text: string;
    github: string;
}

//CARTE UNE FOIS OUVERTE

const ProjectModal: React.FC<{
    project: Project;
    onClose: () => void;
}> = ({ project, onClose }) => {
    const { id, title, src, time, nbpeople, text, objectives, github } = project;

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="text-fuchsia-200 bg-fuchsia-950 backdrop-blur bg-opacity-75 rounded-2xl lg:relative lg:w-1/2 lg:h-5/6 md:w-5/6 md:h-3/4 w-3/4 h-6/7"
                layoutId={`card-container-${id}`}
                onClick={(e) => e.stopPropagation()}
            >
                <motion.div
                    layoutId={`card-image-${id}`}
                    className="relative lg:h-1/3 md:h-1/2 h-1/4 rounded-t-2xl overflow-hidden"
                >
                    <motion.img src={src} alt={title} className="w-full h-full object-cover" />
                </motion.div>
                <div className="lg:p-6 md:p-6 p-3">
                    <motion.h2
                        layoutId={`card-title-${id}`}
                        className="font-bold lg:text-4xl md:text-3xl text-lg lg:mb-4"
                    >
                        {title}
                    </motion.h2>
                    <h1 className="flex gap-1.5 lg:text-xl text-xs items-center font-bold mb-2">
                        {time} <BsCalendarWeekFill />
                        {" | "}
                        {nbpeople} <FaPeopleGroup />
                        {" | "}
                        <a href={github}>
                            <FaGithub />
                        </a>
                    </h1>
                    <p className="text-sm md:text-md md:text-sm lg:text-md mb-2">{text}</p>
                    <p className="text-xs lg:text-sm">
                        <strong>Objectifs :</strong> {objectives}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

//LISTE DES CARTES avec spotlighcard

export const List: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const getSelectedProject = () => (selectedProject ? Projects.find((p) => p.id === selectedProject) : null);

    return (
        <div className="flex justify-center">
            <ul className="grid lg:grid-cols-2 gap-8 grid-cols-1 md:px-20 px-10">
                {Projects.map((project) => (
                    <li key={project.id}>
                        <SpotlightCard
                            id={project.id}
                            title={project.title}
                            image={project.src}
                            language={project.language}
                            onClick={() => setSelectedProject(project.id)}
                        />
                    </li>
                ))}
            </ul>

            <AnimatePresence>
                {selectedProject && getSelectedProject() && (
                    <ProjectModal project={getSelectedProject()!} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </div>
    );
};
