import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { FaChevronCircleUp } from "react-icons/fa";

export default function EnterAnimation() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            whileHover={{ scale: 1.04 }}
            className="ml-6 mb-4"
        >
            <Link href="#title">
                <div className="cursor-pointer">
                    <FaChevronCircleUp size={40} color="white" />
                </div>
            </Link>
        </motion.div>
    );
}
