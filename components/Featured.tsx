import React from "react";
import Link from "next/link";
import ProjectIcon from "./ProjectIcon";

const Featured = () => {
    return (
        <div className="mx-auto ">
            <div className="tracking-tight">
                <p className="text-5xl text-center text-blue-dark font-dm font-semibold tracking-tighter py-3">
                    Featured Projects
                </p>
                <p className="text-2xl text-center text-blue-default font-dm font-normal italic pb-10">
                    A little bit of design here, a little research there, with
                    everything in between
                </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <ProjectIcon
                    title="Interactive Bobbin Lace"
                    sub="Undergraduate Capstone Research Project"
                    page="/projects/bobbinlace"
                    label_1="Research"
                    label_2="Development"
                    img_path="/assets/covers/bobbinlace-cover.png"
                    text="text-yellow-light"
                    bglabel="bg-yellow-light"
                    textlabel="text-blue-default"
                />
                <ProjectIcon
                    title="Literacy Lagoon"
                    sub="UX/UI App Design"
                    page="/projects/literacylagoon"
                    label_1="Research"
                    label_2="UX/UI"
                    img_path="/assets/covers/literacylagoon-cover.png"
                    text="text-yellow-light"
                    bglabel="bg-yellow-light"
                    textlabel="text-green"
                    cover_image
                />
                <ProjectIcon
                    title="Mootate"
                    sub="2D Game Development"
                    page="/projects/mootate"
                    label_1="Development"
                    label_2="Game Design"
                    img_path="/assets/covers/mootate-cover.png"
                    text="text-yellow-light"
                    bglabel="bg-yellow-light"
                    textlabel="text-green"
                    cover_image
                />
                <ProjectIcon
                    title="Women in Science & Engineering"
                    sub="Branding & Design"
                    page="/projects/wise"
                    label_1="Marketing"
                    label_2="Design"
                    img_path="/assets/covers/wise-cover.png"
                    text="text-yellow-light"
                    bglabel="bg-yellow-light"
                    textlabel="text-blue-default"
                />
            </div>
            <div className="text-center text-blue-dark font-dm tracking-tighter py-16">
                <p className="text-3xl font-semibold">
                    Don&apos;t worry, there&apos;s more!
                </p>
                <div className="mt-7">
                    <Link
                        className="border-solid border-2 border-blue-dark text-blue-dark hover:bg-blue-dark hover:text-yellow-bg text-xl font-medium rounded-2xl px-8 py-2"
                        href="/projects/playground"
                    >
                        Playground
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;
