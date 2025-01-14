"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    { id: "1", title: "Projet 1" },
    { id: "2", title: "Projet 2" },
    { id: "3", title: "Projet 3" },
];

export default function ProjectList() {
    return (
        <main className="p-8 bg-black text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Mes projets</h1>
            <div className="grid grid-cols-1 gap-6">
                {projects.map((project) => (
                    <motion.div key={project.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href={`/mesprojets/${project.id}`}>
                            <a className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700">{project.title}</a>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
