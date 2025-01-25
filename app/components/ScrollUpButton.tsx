import React from "react";
import * as motion from "motion/react-client";
import { FaChevronCircleUp } from "react-icons/fa";

export default function EnterAnimation() {
    const scrollToTop = () => {
        const titleSection = document.getElementById("title");
        titleSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            whileHover={{ scale: 1.04 }}
            className="ml-6 mb-6"
        >
            <div onClick={scrollToTop} className="cursor-pointer">
                <FaChevronCircleUp size={40} color="white" />
            </div>
        </motion.div>
    );
}
