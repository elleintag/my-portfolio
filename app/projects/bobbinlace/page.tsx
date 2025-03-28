import Goals from "@/components/project-page/Goals";
import Header from "@/components/project-page/Header";
import Introduction from "@/components/project-page/Introduction";
import Photos from "@/components/project-page/Photos";
import ProjectIconSm from "@/components/ProjectIconSm";
import Link from "next/link";
import React from "react";

const bobbinlace = () => {
    return (
        <div className="mx-auto max-w-[1400px]">
            <Header
                Title="Interactive Bobbin Lace"
                Description="Undergraduate Capstone Research Project"
                Label_1="Research"
                Label_2="Development"
                Collab="In collaboration with the iStudio Lab at Queen's University"
            />

            <Introduction
                Intro="Bobbin lace is a traditional lace textile that is created by a pattern of twisting and knotting of thread wound around several bobbins. Its development and creation can be seen within textiles and fashion throughout history, and is an intricate form of textile art practiced today. As such a delicate textile, the introduction of electronic components and user interaction within bobbin lace is unheard of. Interactive Bobbin Lace is the result of the foundational research towards this newfound development, and its potential impact within the electronic textile (e-textile) industry."
                img="/assets/bobbinlace/bobbinlace-intro.png"
                Caption="Samples of bobbin lace from early in research."
            />

            <Goals
                Goal_1="Produce a sample book showcasing all research, prototypes, and samples throughout the project."
                Goal_2="Develop methods to implement existing e-textile components within the creation of bobbin lace."
                Goal_3="Create a Living Lace Sample prototype that successfully incorporates both the research of traditional bobbin lace methods and existing e-textile components."
            />

            <Photos
                img_1="/assets/bobbinlace/samplebook-1.png"
                img_2="/assets/bobbinlace/samplebook-2.png"
                img_3="/assets/bobbinlace/samplebook-3.png"
                Caption="Scans of sample book curated with all prototypes throughout research."
            />

            <div className="py-24">
                <Photos
                    img_1="/assets/bobbinlace/final-1.png"
                    img_2="/assets/bobbinlace/final-2.png"
                    img_3="/assets/bobbinlace/final-3.png"
                    Caption="Creation process of Living Lace Sample -- a bobbin lace potentiometer. Includes prototyping, pattern, and Arduino code for functionality."
                />
            </div>

            <div className="p-24 bg-yellow-light flex flex-row">
                <div className="w-3/5 space-y-3 h-full pr-16">
                    <p className="text-6xl text-blue-dark font-dm font-semibold tracking-tight">
                        Approach
                    </p>
                    <p className="text-lg text-blue-text font-dm tracking-tight">
                        Within our research, we found that e-textiles were
                        regularly seen as touch sensors, where a user’s swipe or
                        scrunch of a fabric would turn on a light. Using this as
                        a basis, we each developed a sensor that would best suit
                        the foundational bobbin lace methods we had researched
                        and sampled together. These sensors, which included a
                        potentiometer, stretch sensor, and swipe sensor, were
                        all connected and controlled together in a single
                        children’s tapestry for simple user interaction.
                    </p>
                    <p className="text-xl text-blue-default font-dm font-medium tracking-tight leading-tight py-5">
                        This final sensor was presented as a submission at the
                        Queen’s University Creative Computing Showcase and was
                        recognized with the award for Best Research Project!
                    </p>
                </div>
                <div className="w-2/5 h-full flex flex-col items-start">
                    <img
                        className="w-full h-full"
                        src="/assets/bobbinlace/award.png"
                    />
                    <p className="text-lg text-blue-text font-dm italic tracking-tight py-3">
                        Awarding for Interactive Bobbin Lace at the Queen’s
                        University Creative Computing Showcase
                    </p>
                </div>
            </div>

            <div className="py-24">
                <Photos
                    img_1="/assets/bobbinlace/showcase-1.png"
                    img_2="/assets/bobbinlace/showcase-2.png"
                    img_3="/assets/bobbinlace/showcase-3.png"
                    Caption="Creation process of Living Lace Sample -- a bobbin lace potentiometer. Includes prototyping, pattern, and Arduino code for functionality."
                />
            </div>

            <div className="pt-24 pb-36 px-72 space-y-5">
                <p className="text-4xl text-center text-blue-dark font-dm font-semibold">
                    Learn More!
                </p>
                <p className="text-xl text-center text-blue-dark font-dm tracking-tight">
                    The research we contributed for Interactive Bobbin Lace has
                    been internationally recognized at TEI’25 in Bordeaux,
                    France, and has been scientifically published as:
                    Interactive Bobbin Lace: Metal Thread History, Interviews
                    with Lace Makers, and Material Explorations with E-Textiles!
                    Learn more about our research and its contributions through
                    any of the links provided.
                </p>
                <div className="space-x-5 flex justify-center">
                    <Link
                        className="bg-blue-default text-xl text-yellow-bg font-dm font-normal tracking-tight rounded-2xl px-8 py-1.5"
                        href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjn1fCVhpCMAxXijokEHV39IDUQPAgI"
                    >
                        Poster
                    </Link>
                    <Link
                        className="bg-blue-default text-xl text-yellow-bg font-dm font-normal tracking-tight rounded-2xl px-10 py-1.5"
                        href="https://labs.cs.queensu.ca/istudio/wp-content/uploads/sites/12/2025/02/Interactive-Bobbin-Lace.pdf"
                    >
                        PDF
                    </Link>
                    <Link
                        className="bg-blue-default text-xl text-yellow-bg font-dm font-normal tracking-tight rounded-2xl px-8 py-1.5"
                        href="https://labs.cs.queensu.ca/istudio/"
                    >
                        iStudio
                    </Link>
                </div>
            </div>

            <div className="bg-[#E7EEFF] py-16 px-6 space-y-16">
                <p className="text-5xl text-center text-blue-dark font-dm font-semibold tracking-tighter">
                    More From Me
                </p>
                <div className="grid grid-cols-3 gap-5">
                    <ProjectIconSm
                        title="Interactive Bobbin Lace"
                        sub="Undergraduate Capstone Research Project"
                        page="/projects/bobbinlace"
                        bg="bg-green"
                        text="text-yellow-bg"
                    />
                    <ProjectIconSm
                        title="Literacy Lagoon"
                        sub="UX/UI App Design"
                        page="/projects/literacylagoon"
                        bg="bg-blue-default"
                        text="text-blue-dark"
                    />
                    <ProjectIconSm
                        title="Women in Science & Engineering"
                        sub="Branding & Marketing"
                        page="/projects/wise"
                        bg="bg-yellow-default"
                        text="text-yellow-dark"
                    />
                </div>
            </div>
        </div>
    );
};

export default bobbinlace;
