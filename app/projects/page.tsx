import Link from "next/link";
import React from "react";
import ProjectIcon from "@/components/ProjectIcon";
import Image from "next/image";

const projects = () => {
    return (
        <div className="mx-auto max-w-[1400px]">
            <div className="text-center space-y-3 mt-108 relative">
                <p className="text-6xl pt-12 text-blue-dark font-dm font-semibold tracking-tighter">
                    Selected Projects
                </p>
                <p className="text-2xl px-72 pb-10 text-blue-default font-dm italic tracking-tight">
                    From design to research and everything in between, all of my
                    projects use a variety of skills to achieve every goal and
                    deliver thoughtful solutions
                </p>
                <Image
                    alt="Clover1"
                    src={"../assets/svgs/clover.svg"}
                    height={600}
                    width={600}
                    className="absolute -top-160 -left-24 -z-10 rotate-[56deg]"
                    unoptimized
                />
                <Image
                    alt="Clover2"
                    src={"../assets/svgs/clover.svg"}
                    height={600}
                    width={600}
                    className="absolute -top-130 -right-28 -z-10 rotate-[32deg]"
                    unoptimized
                />
                <Image
                    alt="Yippee"
                    src={"../assets/svgs/yippee.svg"}
                    height={220}
                    width={220}
                    className="absolute -top-90 left-158 -z-10 rotate-[240deg]"
                    unoptimized
                />
                <Image
                    alt="Loops"
                    src={"../assets/svgs/loops-2.svg"}
                    height={600}
                    width={600}
                    className="absolute -top-64 -left-20 -z-10 rotate-[-200deg]"
                    unoptimized
                />
                <Image
                    alt="Squiggle"
                    src={"../assets/svgs/squiggle-long.svg"}
                    height={800}
                    width={800}
                    className="absolute bottom-114 -right-24 -z-10"
                    unoptimized
                />
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
                        label_2="Design System"
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
                        label_1="Graphic Design"
                        label_2="Social Media"
                        img_path="/assets/covers/wise-cover.jpg"
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
                        img_path="/assets/covers/htbw-cover.png"
                        text="text-yellow-light"
                        bglabel="bg-yellow-light"
                        textlabel="text-blue-default"
                    />
                    <div className="pt-90 px-6 bg-yellow-default text-yellow-dark rounded-2xl z-20 relative">
                        <div className="text-3xl font-dm font-medium tracking-tight">
                            <p>We&apos;re working on it!</p>
                        </div>
                        <div className="text-xl font-dm font-medium italic tracking-tight">
                            <p>More to come soon</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center pt-24 pb-32 space-y-7 relative">
                <p className="text-3xl text-yellow-bg font-dm font-medium tracking-tight">
                    Find out what got me here!
                </p>
                <div>
                    <Link
                        className="text-xl bg-yellow-bg border-2 border-solid border-yellow-bg text-blue-default hover:bg-blue-default hover:text-yellow-bg font-dm font-normal tracking-tight rounded-2xl px-8 py-3"
                        href="/profile"
                    >
                        About Me
                    </Link>
                </div>
                <Image
                    alt="Clover1"
                    src={"/assets/svgs/clover.svg"}
                    height={600}
                    width={600}
                    className="absolute -bottom-28 left-1/2 -translate-x-1/2 -z-20 rotate-[-32deg]"
                    unoptimized
                />
                <Image
                    alt="yippee"
                    src={"/assets/svgs/yippee-yellow.svg"}
                    height={200}
                    width={200}
                    className="absolute bottom-24 left-1/2 translate-x-56 -z-20"
                    unoptimized
                />
            </div>
        </div>
    );
};

export default projects;
