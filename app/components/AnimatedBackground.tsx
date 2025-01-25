import React from "react";
import { useEffect } from "react";

const AnimatedBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const width = canvas.width;
            const height = canvas.height;

            // Nettoyer le canvas
            ctx.clearRect(0, 0, width, height);

            // Dessiner un gradient radial
            const gradient = ctx.createRadialGradient(clientX, clientY, 0, clientX, clientY, 1500);
            gradient.addColorStop(0, "#e8aea6");
            gradient.addColorStop(0.2, "#e382be");
            gradient.addColorStop(0.3, "#df72b1");
            gradient.addColorStop(1, "#c373e7");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-[-1] blur-3xl"
                width={window.innerWidth}
                height={window.innerHeight}
            />
            {children}
        </>
    );
};

export default AnimatedBackground;
