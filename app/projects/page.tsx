import Link from "next/link";
import React from "react";
import ProjectIcon from "@/components/ProjectIcon";
import Image from "next/image";

const projects = () => {
    return (
        <div className="mx-auto max-w-screen-xl">
            <div className="text-center pt-24 space-y-3 mt-48">
                <p className="text-6xl text-blue-dark font-dm font-semibold tracking-tight">
                    Selected Projects
                </p>
                <p className="text-2xl text-blue-default font-ct italic">
                    What I've worked on so far!
                </p>
            </div>

            <div className="py-8">
                {/* TODO: ADD IMAGE PATHS (img_path="assets/blah blah.png"*/}
                <div className="grid grid-cols-2 gap-5">
                    <ProjectIcon
                        title="Interactive Bobbin Lace"
                        sub="Undergraduate Capstone Research Project"
                        page="/projects/bobbinlace"
                        label_1="Research"
                        label_2="Development"
                        text="text-yellow-light"
                        bglabel="bg-yellow-light"
                        textlabel="text-blue-default"
                    />
                    <ProjectIcon
                        title="Literacy Lagoon"
                        sub="UX/UI App Design"
                        page="/projects/literacylagoon"
                        label_1="Research"
                        label_2="Design System"
                        text="text-yellow-light"
                        bglabel="bg-yellow-light"
                        textlabel="text-green"
                    />
                    <ProjectIcon
                        title="Mootate"
                        sub="2D Game Development"
                        page="/projects/mootate"
                        label_1="Development"
                        label_2="Game Design"
                        text="text-yellow-light"
                        bglabel="bg-yellow-light"
                        textlabel="text-green"
                    />
                    <ProjectIcon
                        title="Women in Science & Engineering"
                        sub="Branding & Marketing"
                        page="/projects/wise"
                        label_1="Design"
                        label_2="Social Media"
                        text="text-yellow-light"
                        bglabel="bg-yellow-light"
                        textlabel="text-blue-default"
                    />
                    <ProjectIcon
                        title="How to be WiSE Podcast"
                        sub="Branding & Marketing"
                        page="/projects/htbw"
                        label_1="Design"
                        label_2="Social Media"
                        text="text-yellow-light"
                        bglabel="bg-yellow-light"
                        textlabel="text-blue-default"
                    />
                    <ProjectIcon
                        title="We're working on it!"
                        sub="More to come soon"
                        page="/projects"
                        text="text-yellow-dark"
                        bglabel=""
                        textlabel=""
                    />
                </div>
            </div>

            <div className="text-center pt-24 pb-32 space-y-7 relative">
                <p className="text-4xl text-blue-text font-dm font-semibold tracking-tight">
                    Find out what got me here!
                </p>
                <div>
                    <Link
                        className="text-xl bg-blue-dark border-2 border-solid border-blue-dark text-yellow-bg hover:bg-yellow-bg hover:text-blue-dark font-dm font-medium rounded-2xl px-8 py-3"
                        href="/profile"
                    >
                        About Me
                    </Link>
                </div>
                <Image
                    alt="Clover1"
                    src={"../assets/svgs/clover.svg"}
                    height={550}
                    width={550}
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 -z-20 rotate-[45deg]"
                    unoptimized
                />
            </div>
        </div>
    );
};

export default projects;
