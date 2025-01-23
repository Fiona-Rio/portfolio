import React from "react";
import { SkillData } from "@/constants";

const page = () => {
    return (
        <div id="Apropos" className="flex flex-col items-center justify-center pt-20 gap-20">
            <h1 className="font-semibold text-zinc-700 text-7xl pb-20">
                Compétences{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500"> & </span>
                outils
            </h1>
            <div className="flex gap-10 px-10">
                {SkillData.map((skill) => (
                    <div key={skill.id} className="flex items-center justify-center">
                        <img src={skill.Image} alt={skill.name} width={skill.width} height={skill.height} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
