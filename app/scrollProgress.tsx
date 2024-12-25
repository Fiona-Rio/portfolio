"use client";

import { motion, useSpring, useScroll } from "motion/react";

export default function ScrollLinked() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
    });

    return (
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 10,
                originX: 0.5,
                backgroundColor: "#ff0088",
            }}
            className="z-20"
        />
    );
}
