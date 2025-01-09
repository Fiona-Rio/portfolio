import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function EnterAnimation() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
            whileHover={{ scale: [null, 1.1] }}
        >
            <Link href="#title">
                <div className="text-center items-center pt-3">UP</div>
            </Link>
        </motion.div>
    );
}

const ball = {
    margin: 30,
    width: 50,
    height: 50,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
};
