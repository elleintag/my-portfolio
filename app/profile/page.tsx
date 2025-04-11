import TextSide from "@/components/TextSide";
import React from "react";
import Image from "next/image";

const profile = () => {
    return (
        <div className="pt-36 max-w-[1400px] mx-auto">
            <div className="px-36 flex flex-row space-x-14 relative">
                <div className="text-left space-y-5 pr-24">
                    <p className="text-8xl text-blue-dark font-dm font-bold tracking-tighter">
                        Hi! I&apos;m Joelle!
                    </p>
                    <p className="text-4xl text-blue-default font-dm font-semibold italic tracking-tight">
                        I am a <span className="text-blue-dark">developer</span> / <span className="text-blue-dark">analyzer</span> / <span className="text-blue-dark">designer</span> from Toronto, Canada.
                    </p>
                    <div className="pt-8">
                        <p className="text-xl text-blue-dark font-dm tracking-tight">
                            Outside of work, I am either starting up a new craft project, figuring out the best whisking method for matcha microfoam, or curating a Pinterest board for my next outfit. Oh, all while listening to my favourite artists, of course!
                        </p>
                    </div>
                </div>
                <div className="self-center">
                    <Image 
                        alt="Profile Photo"
                        src={"/assets/headshot.png"}
                        height={1000}
                        width={1000}
                        className="rounded-full"
                        unoptimized
                    />
                </div>
                <Image
                alt="Clover1"
                src={"../assets/svgs/clover.svg"}
                height={600}
                width={600}
                className="absolute -top-52 -right-44 -z-10 rotate-[33deg]"
                unoptimized
                />
                <Image
                    alt="Yippee"
                    src={"../assets/svgs/yippee-yellow.svg"}
                    height={200}
                    width={200}
                    className="absolute -top-24 left-168 -z-10 rotate-[-132deg]"
                    unoptimized
                />
                <Image
                    alt="Squiggle"
                    src={"../assets/svgs/squiggle-green.svg"}
                    height={650}
                    width={650}
                    className="absolute -top-96 -left-36 -z-10"
                    unoptimized
                />
            </div>

            <div className="pt-12">
                <div className="px-28 space-y-5">
                    <p className="text-3xl text-green font-dm font-semibold tracking-tight"> / development</p>
                    <div className="flex content-start">
                        <div className="w-2/3 pr-12">
                            <p className="text-xl text-blue-dark font-dm font-normal tracking-tight">With my bachelor&apos;s degree in computing, I was able to develop a whole bunch of different things! From a compiler to front-end web development, I can say I&apos;ve coded in a ton of different languages and pick up new ones whenever I get the chance.</p>
                        </div>
                        <div className="w-1/3 space-y-2">
                            <p className="text-xl text-blue-default font-dm font-semibold tracking-tight">Everything I&apos;ve Coded In</p>
                            <div className="grid grid-cols-4 gap-2">
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>HTML5</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>CSS3</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Python</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>SQL</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-2 py-1'>TypeScript</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Java</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>C#</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>C++</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="px-28 space-y-5">
                    <p className="text-3xl text-green font-dm font-semibold tracking-tight"> / design</p>
                    <div className="flex flex-row">
                        <div className="w-2/3 pr-12">
                            <p className="text-xl text-blue-dark font-dm font-normal tracking-tight">My design work ranges from marketing and graphic design to system and web design, and everything in between! Nowadays, I&apos;ve been professionally developing my skills in UX/UI design after my research experience in human computer interaction.</p>
                        </div>
                        <div className="w-1/3 space-y-2">
                            <p className="text-xl text-blue-default font-dm font-semibold tracking-tight">My Design Stack</p>
                            <div className="grid grid-cols-4 grid-rows-2 gap-2 text-center">
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Figma</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-2 py-1'>Procreate</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Canva</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-2 py-1'>Illustrator</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-2 py-1'>InDesign</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-2 py-1'>Photoshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <div className="px-28 space-y-5">
                    <p className="text-3xl text-green font-dm font-semibold tracking-tight"> / analysis</p>
                    <div className="flex flex-row">
                        <div className="w-2/3 pr-12">
                            <p className="text-xl text-blue-dark font-dm font-normal tracking-tight">Using my experience in development and design as a foundation, I approach challenges with a design-based mindset to break down big data and create user-friendly visualizations. My work varies from fashion retail trends and sales, to WFM and HRIS analysis.</p>
                        </div>
                        <div className="space-y-2 w-1/3">
                            <p className="text-xl text-blue-default font-dm font-semibold tracking-tight">Analysis Toolkit</p>
                            <div className="grid grid-cols-4 grid-rows-1 gap-2 items-start ">
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Excel</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>SQL</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-2 py-1'>Power BI</p>
                                <p className='text-sm text-center border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Tableau</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pl-28 pr-20 flex flex-row">
                <div className="w-3/5">
                    <div className="space-y-5">
                        <p className="text-4xl text-blue-default font-dm font-semibold tracking-tight">
                            Experience
                        </p>

                        <div className="grid grid-cols-1 gap-y-5">
                            <div className="space-y-0">
                                <div className="flex flex-row space-x-2 items-center">
                                    <Image 
                                        src="/assets/svgs/star.svg"
                                        alt="Star"
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-2xl text-left text-blue-dark font-dm font-semibold tracking-tight items-center">
                                        Aritzia
                                    </p>


                                </div>
                                <p className="text-lg text-left text-blue-default font-dm font-normal italic tracking-tight">
                                    Concierge Advisor
                                </p>
                            </div>
                            <div className="">
                                <p className="text-2xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                                    Mitsubishi Heavy Industries RJ Aviation ULC
                                </p>
                                <p className="text-lg text-left text-blue-default font-dm italic tracking-tight">
                                    HR Information Systems Analyst
                                </p>
                            </div>
                            <div className="">
                                <p className="text-2xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                                    iStudio Lab at Queen&apos;s University
                                </p>
                                <p className="text-lg text-left text-blue-default font-dm italic tracking-tight">
                                    Undergraduate Research Student
                                </p>
                            </div>
                            <div className="">
                                <p className="text-2xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                                    Women in Science & Engineering
                                </p>
                                <p className="text-lg text-left text-blue-default font-dm italic tracking-tight">
                                    Internal Vice President, Marketing Director,
                                    Logistics Director
                                </p>
                            </div>
                            <div className="">
                                <p className="text-2xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                                    Queen&apos;s Women in Computing
                                </p>
                                <p className="text-lg text-left text-blue-default font-dm italic tracking-tight">
                                    Marketing Coordinator & Graphic Designer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-2/5 flex flex-col space-y-10">
                        <div className="space-y-3">
                            <p className="text-4xl text-blue-default font-dm font-semibold tracking-tight">
                                Education
                            </p>
                            <div className="">
                                <p className="text-2xl text-left text-blue-dark font-dm font-semibold tracking-tight">
                                    Queen&apos;s University
                                </p>
                                <p className="text-lg text-left text-[#5778C4] font-dm italic tracking-tight">
                                    Bachelor of Computing with Honours
                                </p>
                                <p className="text-lg text-left text-blue-default font-dm italic tracking-tight">
                                    Science Minor in Life Sciences
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="text-4xl text-blue-default font-dm font-semibold tracking-tight">
                                Publications
                            </p>
                            <div className="space-y-2">
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
                  </div>
            </div>


            <div className="px-12 py-24">
                <div className="flex flex-row justify-center gap-x-3 items-start">
                    <Image
                        src="/assets/profile/matcha.png"
                        alt="Uniqlo Event"
                        width={400}
                        height={400}
                        className="w-full"
                    />
                    <Image
                        src="/assets/profile/mountains.png"
                        alt="Capstone Team"
                        width={400}
                        height={400}
                        className="w-full"
                    />
                    <Image
                        src="/assets/profile/japan.png"
                        alt="Japan Picture"
                        width={400}
                        height={400}
                        className="w-full"
                    />
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
                                I&apos;m all about sharing the stories and
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
                                Let&apos;s Chat
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
