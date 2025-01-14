// app/mesprojets/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import { Projects } from "../../../constants/index";

const ProjectDetail = () => {
    const params = useParams(); // Récupère les paramètres de l'URL
    const id = params?.id; // Récupère l'ID dynamique

    if (!id) {
        return <div>Chargement...</div>; // Gestion du chargement
    }

    const project = Projects.find((p) => p.id === id);

    if (!project) {
        return <div>Projet non trouvé</div>; // Gère le cas où le projet n'existe pas
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.text}</p>
            <p>Nombre de personnes: {project.nbpeople}</p>
            <img src={project.src} alt={project.title} />
        </div>
    );
};

export default ProjectDetail;
