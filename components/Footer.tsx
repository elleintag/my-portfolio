import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="mx-auto max-w-[1400px] bg-blue-dark rounded-2xl px-20 py-8">
            <div className="text-yellow-light font-dm font-regular tracking-tight space-y-20">
                <div className="text-center text-xl space-x-20">
                    <a
                        className="hover:text-[#CBD6F2]"
                        href="https://www.linkedin.com/in/joelle-lintag/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="hover:text-[#CBD6F2]"
                        href="https://github.com/elleintag"
                        target="_blank"
                    >
                        GitHub
                    </a>
                    <a
                        className="hover:text-[#CBD6F2]"
                        href="https://drive.google.com/file/d/1RvUcIJqw17sApz7PrGrt0rjkVfGYUVxJ/view?usp=sharing"
                        target="_blank"
                    >
                        Resume
                    </a>
                </div>
                <div className="text-left text-5xl font-medium">
                    <p className="tracking-tighter pb-5">Connect with me!</p>
                    <a
                        className="bg-blue-dark border-solid border-2 border-yellow-light text-yellow-light hover:bg-yellow-light hover:text-blue-dark font-normal text-2xl rounded-2xl px-12 py-2"
                        href="https://www.linkedin.com/in/joelle-lintag/"
                        target="_blank"
                    >
                        Chat
                    </a>
                </div>
                <div className="text-lg flex justify-between">
                    <div className="flex justify-left">
                        <p>Joelle Lintag</p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            className="w-5"
                            alt="Star"
                            src="/assets/joelle.svg"
                        ></img>
                    </div>
                    <div className="flex justify-end">
                        <p>2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
