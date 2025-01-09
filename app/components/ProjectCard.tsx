"use client";
import React from "react";
interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({ image, title }: Props) => {
    return (
        <div className="relative w-[500px] h-[300px] rounded-md">
            <div style={{ backgroundImage: `url(${image})` }} className="absolute w-full h-full rounded-lg p-6">
                <div className="absolute bottom-6 text-black font-bold text-xl uppercase">{title}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
