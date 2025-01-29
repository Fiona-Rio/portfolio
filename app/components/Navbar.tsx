import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="fixed left-0 h-full flex items-center">
            <ul className="flex items-center space-y-10 p-4 text-zinc-800" style={{ writingMode: "vertical-rl" }}>
                <li>
                    <a href="https://www.linkedin.com/in/fiona-rio-932459144/" className="flex items-center">
                        <FaLinkedin />
                        <p className="pt-2">LINKEDIN</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Fiona-Rio" className="flex items-center">
                        <FaGithub />
                        <p className="pt-2">GITHUB</p>
                    </a>
                </li>
                <li>
                    <a href="public\CV - Fiona RIO .pdf" className="flex items-center">
                        <BsFileEarmarkPdfFill />
                        <p className="pt-2">CV</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
