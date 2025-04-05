import React from "react";
import Link from "next/link";
import Home from "@/public/assets/home.svg";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl py-2 text-md text-yellow-bg font-dm font-normal tracking-tight">
                <div className="bg-blue-dark px-6 py-4 rounded-xl shadow-md">
                    <div className="flex justify-between">
                        <div className="flex justify-left">
                            <Link href="/">
                                <Home
                                    className="transform scale-75 hover:fill-[#CBD6F2]"
                                    fill="#FFFBEE"
                                    src="/assets/joelle.svg"
                                />
                            </Link>
                        </div>
                        <div className="flex justify-center self-center space-x-5">
                            <Link
                                className="hover:text-[#CBD6F2] hover:underline"
                                href="/projects"
                            >
                                Projects
                            </Link>
                            <Link
                                className="hover:text-[#CBD6F2] hover:underline"
                                href="/profile"
                            >
                                Profile
                            </Link>
                            <a
                                className="hover:text-[#CBD6F2] hover:underline"
                                href="https://drive.google.com/file/d/1nyfjwfOBMKHCib3UB7CU3-u0ed0Ppegx/view?usp=drive_link"
                                target="_blank"
                            >
                                Resume
                            </a>
                        </div>
                        <div className="flex justify-end self-center">
                            <a
                                className="hover:text-[#CBD6F2] hover:underline"
                                href="https://www.linkedin.com/in/joelle-lintag/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
