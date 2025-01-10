"use client";
import React from "react";
import * as motion from "motion/react-client";

interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({ image, title }: Props) => {
    return (
        <motion.div whileHover={{}}>
            <div className="relative flex justify-center items-center w-96 h-80 rounded-md">
                <img src={image} className="absolute max-w-full max-h-full rounded-lg justify-center blur-sm"></img>
                <div className="absolute text-black font-bold text-xl uppercase p-6">{title}</div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
