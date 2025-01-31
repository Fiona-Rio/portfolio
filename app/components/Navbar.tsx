import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="fixed z-20 flex justify-center lg:justify-start items-center lg:h-full backdrop-blur-lg lg:backdrop-blur-none lg:p-0 w-full lg:w-0 p-2">
            <ul className="flex flex-row lg:flex-col items-center justify-center space-x-6 lg:space-x-0 lg:space-y-10 text-zinc-800 lg:text-lg text-xs">
                <li>
                    <a
                        href="https://www.linkedin.com/in/fiona-rio-932459144/"
                        className="flex items-center lg:flex-col"
                    >
                        <FaLinkedin className="lg:rotate-90" />
                        <p className="lg:rotate-90 lg:py-7 pl-2">LINKEDIN</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Fiona-Rio" className="flex items-center lg:flex-col">
                        <FaGithub className="lg:rotate-90" />
                        <p className="lg:rotate-90 lg:py-5 pl-2">GITHUB</p>
                    </a>
                </li>
                <li>
                    <a href="/CV - Fiona RIO .pdf" target="_blank" className="flex items-center lg:flex-col">
                        <BsFileEarmarkPdfFill className="lg:rotate-90" />
                        <p className="lg:rotate-90 pl-2">CV</p>
                    </a>
                </li>
                <li>
                    <a href="mailto: fiona.rio@outlook.com" className="flex items-center lg:flex-col">
                        <MdEmail className="lg:rotate-90" />
                        <p className="lg:rotate-90 lg:pl-7 pl-2">MAIL</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
