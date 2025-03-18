import TextSide from "@/components/TextSide";
import React from "react";
import Image from "next/image";

const profile = () => {
    return (
        <div className="pt-36 max-w-screen-xl mx-auto">
            <div className="px-36 flex items-center justify-normal">
                <div className="text-left space-y-5">
                    <p className="text-8xl text-blue-dark font-dg font-bold tracking-tight">
                        Hi! I'm Joelle!
                    </p>
                    <p className="text-3xl text-blue-default font-ct italic tracking-tight">
                        A passionate self-taught designer with a data analysis
                        and computing background.
                    </p>
                    <div className="space-y-10">
                        <p className="text-xl text-blue-dark font-ct tracking-tight">
                            I love designing, stickers, and making things work!
                            A lot of my work is inspired by the things I love
                            and how I can share it with the world.
                        </p>
                        <p className="text-xl text-blue-dark font-ct tracking-tight">
                            If you can’t find me in front of my desk making
                            something new, I am either hosting a live embroidery
                            pop-up or thrifting a new wardrobe! But I promise it
                            is easy to get to me – let’s get in touch!
                        </p>
                    </div>
                </div>
                <img
                    className="rounded-full transform scale-75 w-1/3 h-1/3"
                    src="/assets/headshot.png"
                ></img>
            </div>

            <div className="px-12 py-24 flex flex-row justify-center gap-x-3 items-start">
                {/* <div className="space-x-3 flex flex-row justify-evenly"> */}
                <Image
                    src="/assets/profile/uniqlo.png"
                    alt="Uniqlo Event"
                    width={1000}
                    height={1000}
                />
                <Image
                    src="/assets/profile/team.png"
                    alt="Capstone Team"
                    width={1000}
                    height={1000}
                />
                <Image
                    src="/assets/profile/japan.png"
                    alt="Japan Picture"
                    width={1000}
                    height={1000}
                />
                {/* </div> */}
            </div>

            <div className="px-32 py-24 space-x-36 flex justify-normal">
                <div className="space-y-5">
                    <p className="text-5xl text-blue-dark font-dg font-semibold tracking-tight">
                        Experience
                    </p>
                    <div className="">
                        <p className="text-4xl text-left text-blue-dark font-dg font-semibold tracking-tight">
                            Aritzia
                        </p>
                        <p className="text-2xl text-left text-blue-default font-ct italic tracking-tight">
                            Concierge Advisor
                        </p>
                    </div>
                    <div className="">
                        <p className="text-4xl text-left text-blue-dark font-dg font-semibold tracking-tight">
                            Mitsubishi Heavy Industries RJ Aviation ULC
                        </p>
                        <p className="text-2xl text-left text-blue-default font-ct italic tracking-tight">
                            HR Information Systems Analyst
                        </p>
                    </div>
                    <div className="">
                        <p className="text-4xl text-left text-blue-dark font-dg font-semibold tracking-tight">
                            iStudio Lab at Queen's University
                        </p>
                        <p className="text-2xl text-left text-blue-default font-ct italic tracking-tight">
                            Undergraduate Research Student
                        </p>
                    </div>
                    <div className="">
                        <p className="text-4xl text-left text-blue-dark font-dg font-semibold tracking-tight">
                            Women in Science & Engineering
                        </p>
                        <p className="text-2xl text-left text-blue-default font-ct italic tracking-tight">
                            Internal Vice President, Marketing Director,
                            Logistics Director
                        </p>
                    </div>
                    <div className="">
                        <p className="text-4xl text-left text-blue-dark font-dg font-semibold tracking-tight">
                            Queen's Women in Computing
                        </p>
                        <p className="text-2xl text-left text-blue-default font-ct italic tracking-tight">
                            Marketing Coordinator & Graphic Designer
                        </p>
                    </div>
                </div>
                <div className="space-y-10 w-2/5">
                    <div className="space-y-5">
                        <p className="text-5xl text-blue-dark font-dg font-semibold tracking-tight">
                            Education
                        </p>
                        <div className="">
                            <p className="text-4xl text-left text-blue-dark font-dg font-semibold tracking-tight">
                                Queen's University
                            </p>
                            <p className="text-2xl text-left text-blue-dark font-ct italic tracking-tight">
                                Bachelor of Computing with Honours
                            </p>
                            <p className="text-2xl text-left text-blue-default font-ct italic tracking-tight">
                                Science Minor in Life Sciences
                            </p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <p className="text-5xl text-blue-dark font-dg font-semibold tracking-tight">
                            Publications
                        </p>
                        <div className="">
                            <p className="text-4xl text-left text-blue-dark font-dg font-semibold tracking-tight">
                                Interactive Bobbin Lace: Metal Thread History,
                                Interviews with Lacemakers, and Material
                                Explorations with E-textiles
                            </p>
                            <p className="text-2xl text-left text-blue-default font-ct italic tracking-tight">
                                In: Proceedings of the Nineteenth International
                                Conference on Tangible, Embedded, and Embodied
                                Interaction, Association for Computing
                                Machinery, Bordeaux, France, 2025, ISBN:
                                9798400711978.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <p className="text-5xl text-blue-dark font-dg font-semibold tracking-tight">
                            Technical Skills
                        </p>
                        <div className="grid grid-cols-4 gap-3">
                            <p className="text-xl text-center font-dg font-medium border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                Figma
                            </p>
                            <p className="text-xl text-center font-dg font-medium border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                HTML
                            </p>
                            <p className="text-xl text-center font-dg font-medium border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                CSS
                            </p>
                            <p className="text-xl text-center font-dg font-medium border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                SQL
                            </p>
                            <p className="text-xl text-center font-dg font-medium border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                Excel
                            </p>
                            <p className="text-xl text-center font-dg font-medium border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                Python
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4">
                <TextSide
                    headerText="Have something in common?"
                    subText="I love talking about how my experiences got me to where I am today. Reach out to me below!"
                />
            </div>
        </div>
    );
};

export default profile;
