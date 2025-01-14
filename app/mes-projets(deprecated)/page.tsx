import { Projects } from "@/constants";
import React from "react";
import ProjectCard from "../components/ProjectCard";

const Page = () => {
    return (
        <div id="mesprojets" className="flex flex-col items-center justify-center gap-20">
            <h1 className="font-semibold text-white text-7xl ">
                Mes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                    {" "}
                    projets{" "}
                </span>
                de formation
            </h1>

            <div className="grid grid-cols-2 gap-5">
                {Projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} text={project.text} image={project.src} />
                ))}
            </div>
        </div>
    );
};

export default Page;
