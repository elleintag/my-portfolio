import TextSide from "@/components/TextSide";
import React from "react";
import Image from "next/image";

const profile = () => {
    return (
        <div className="pt-36 max-w-[1400px] mx-auto">
            <div className="px-36 flex items-center justify-normal relative">
                <div className="text-left space-y-5">
                    <p className="text-8xl text-blue-dark font-dm font-bold tracking-tighter">
                        Hi! I'm Joelle!
                    </p>
                    <p className="text-2xl text-blue-default font-dm italic tracking-tight">
                        A passionate self-taught designer with a data analysis
                        and computing background.
                    </p>
                    <div className="space-y-10">
                        <p className="text-xl text-blue-dark font-dm tracking-tight">
                            I love designing, stickers, and making things work!
                            A lot of my work is inspired by the things I love
                            and how I can share it with the world.
                        </p>
                        <p className="text-xl text-blue-dark font-dm tracking-tight">
                            If you can’t find me in front of my desk making
                            something new, I am either hosting a live embroidery
                            pop-up or thrifting a new wardrobe! But I promise it
                            is easy to get to me – let’s get in touch!
                        </p>
                    </div>

                    <Image
                        alt="Clover1"
                        src={"../assets/svgs/clover.svg"}
                        height={600}
                        width={600}
                        className="absolute -top-56 -right-32 -z-10 rotate-[33deg]"
                        unoptimized
                    />
                    <Image
                        alt="Yippee"
                        src={"../assets/svgs/yippee-yellow.svg"}
                        height={200}
                        width={200}
                        className="absolute -top-36 left-168 -z-10 rotate-[-132deg]"
                        unoptimized
                    />
                    <Image
                        alt="Squiggle"
                        src={"../assets/svgs/squiggle-green.svg"}
                        height={600}
                        width={600}
                        className="absolute -top-96 -left-20 -z-10"
                        unoptimized
                    />
                </div>
                <img
                    className="rounded-full transform scale-75 w-1/3 h-1/3"
                    src="/assets/headshot.png"
                ></img>
            </div>

            <div className="px-12 py-16 flex flex-row justify-center gap-x-3 items-start">
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

            <div className="px-32 space-x-36 flex justify-normal">
                <div className="space-y-5">
                    <p className="text-4xl text-blue-dark font-dm font-semibold tracking-tight">
                        Experience
                    </p>
                    <div className="">
                        <p className="text-3xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                            Aritzia
                        </p>
                        <p className="text-xl text-left text-blue-default font-dm font-normal italic tracking-tight">
                            Concierge Advisor
                        </p>
                    </div>
                    <div className="">
                        <p className="text-3xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                            Mitsubishi Heavy Industries RJ Aviation ULC
                        </p>
                        <p className="text-xl text-left text-blue-default font-dm italic tracking-tight">
                            HR Information Systems Analyst
                        </p>
                    </div>
                    <div className="">
                        <p className="text-3xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                            iStudio Lab at Queen's University
                        </p>
                        <p className="text-xl text-left text-blue-default font-dm italic tracking-tight">
                            Undergraduate Research Student
                        </p>
                    </div>
                    <div className="">
                        <p className="text-3xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                            Women in Science & Engineering
                        </p>
                        <p className="text-xl text-left text-blue-default font-dm italic tracking-tight">
                            Internal Vice President, Marketing Director,
                            Logistics Director
                        </p>
                    </div>
                    <div className="">
                        <p className="text-3xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                            Queen's Women in Computing
                        </p>
                        <p className="text-xl text-left text-blue-default font-dm italic tracking-tight">
                            Marketing Coordinator & Graphic Designer
                        </p>
                    </div>
                </div>
                <div className="space-y-10 w-2/5">
                    <div className="space-y-5">
                        <p className="text-4xl text-blue-dark font-dm font-semibold tracking-tight">
                            Education
                        </p>
                        <div className="">
                            <p className="text-3xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                                Queen's University
                            </p>
                            <p className="text-xl text-left text-blue-dark font-dm italic tracking-tight">
                                Bachelor of Computing with Honours
                            </p>
                            <p className="text-xl text-left text-blue-default font-dm italic tracking-tight">
                                Science Minor in Life Sciences
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-4xl text-blue-dark font-dm font-semibold tracking-tight">
                            Publications
                        </p>
                        <div className="">
                            <p className="text-2xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                                Interactive Bobbin Lace: Metal Thread History,
                                Interviews with Lacemakers, and Material
                                Explorations with E-textiles
                            </p>
                            <p className="text-lg text-left text-blue-default font-dm italic tracking-tight">
                                In: Proceedings of the Nineteenth International
                                Conference on Tangible, Embedded, and Embodied
                                Interaction, Association for Computing
                                Machinery, Bordeaux, France, 2025, ISBN:
                                9798400711978.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <p className="text-4xl text-blue-dark font-dm font-semibold tracking-tight">
                            Technical Skills
                        </p>
                        <div className="grid grid-cols-4 gap-3">
                            <p className="text-lg text-center font-dm font-normal border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                Figma
                            </p>
                            <p className="text-lg text-center font-dm font-normal border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                HTML
                            </p>
                            <p className="text-lg text-center font-dm font-normal border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                CSS
                            </p>
                            <p className="text-lg text-center font-dm font-normal border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                SQL
                            </p>
                            <p className="text-lg text-center font-dm font-normal border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                Excel
                            </p>
                            <p className="text-lg text-center font-dm font-normal border-solid bg-green border-green text-yellow-bg rounded-xl px-4 py-1">
                                Python
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-24 w-9/12 mt-20 mb-36 space-y-10">
                <div className="flex items-center">
                    <div className="text-blue-dark text-left space-y-3">
                        <p className="text-5xl font-dm font-semibold tracking-tighter">
                            Have something in common?
                        </p>
                        <div className="w-2/3">
                            <p className="text-2xl text-blue-default font-dm italic tracking-tight">
                                I’m all about sharing the stories and
                                inspirations that got me here. Drop me a message
                                below!
                            </p>
                        </div>
                        <div className="py-5">
                            <a
                                className="bg-blue-dark border-2 border-solid border-blue-dark text-yellow-light hover:bg-yellow-bg hover:text-blue-dark text-xl font-dm font-normal rounded-2xl px-8 py-2"
                                href="https://www.linkedin.com/in/joelle-lintag/"
                                target="_blank"
                            >
                                Let's Chat
                            </a>
                        </div>
                    </div>
                    <Image
                        alt="Yellow Clover"
                        src={"/assets/svgs/clover-yellow.svg"}
                        height={600}
                        width={600}
                        className="absolute translate-x-156 translate-y-32 -z-20"
                        unoptimized
                    />
                    <Image
                        alt="Blue Yippee"
                        src={"/assets/svgs/yippee-blue.svg"}
                        height={160}
                        width={160}
                        className="absolute translate-x-200 translate-y-12 -z-20 rotate-[10deg]"
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
};

export default profile;
