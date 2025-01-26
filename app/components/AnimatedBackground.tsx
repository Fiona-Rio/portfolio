import React, { useEffect, useRef } from "react";

const AnimatedBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mousePositionRef = useRef<{ x: number; y: number }>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx) return;

        const drawGradient = () => {
            // Use innerWidth and innerHeight for precise sizing
            const width = window.innerWidth;
            const height = window.innerHeight;

            canvas.width = width;
            canvas.height = height;

            const gradient = ctx.createRadialGradient(
                mousePositionRef.current.x,
                mousePositionRef.current.y,
                0,
                mousePositionRef.current.x,
                mousePositionRef.current.y,
                Math.min(width, height)
            );

            gradient.addColorStop(0, "#e8aea6");
            gradient.addColorStop(0.2, "#e382be");
            gradient.addColorStop(0.3, "#df72b1");
            gradient.addColorStop(1, "#c373e7");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        drawGradient();

        const handleMouseMove = (e: MouseEvent) => {
            mousePositionRef.current = { x: e.clientX, y: e.clientY };
            drawGradient();
        };

        const handleResize = () => {
            drawGradient();
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <canvas ref={canvasRef} className="fixed inset-0 -z-1" />

            {children}
        </>
    );
};

export default AnimatedBackground;
