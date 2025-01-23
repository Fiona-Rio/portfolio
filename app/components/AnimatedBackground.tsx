"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const getColor = (offset: number) => {
        const hue = ((mousePosition.x / window.innerWidth) * 360 + offset) % 360;
        return `hsl(${hue}, 70%, 60%)`;
    };

    return (
        <>
            <motion.div
                className="fixed inset-0 z-[-1] opacity-60"
                style={{
                    background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              ${getColor(0)} 0%, 
              ${getColor(120)} 50%, 
              ${getColor(240)} 100%)
          `,
                }}
            />
            {children}
        </>
    );
};

export default AnimatedBackground;
