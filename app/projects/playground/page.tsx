import React from "react";
import Image from "next/image";
import Photos from "@/components/project-page/Photos";
import MoreFromMe from "@/components/MoreFromMe";

const playground = () => {
    return (
        <div className="mx-auto max-w-[1440px]">
            <div className="text-center space-y-3 mt-96 relative">
                <p className="text-6xl pt-12 text-blue-dark font-dm font-semibold tracking-tighter">
                    Playground
                </p>
                <p className="text-2xl px-72 pb-10 text-blue-default font-dm italic tracking-tight">
                    A collection of some of my favourite design projects I&apos;ve worked on.
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

            <div className="pb-12">
                <Photos 
                    img_1="/assets/tftdle/tftdle-1.png"
                    img_2="/assets/tftdle/tftdle-2.png"
                    img_3="/assets/tftdle/tftdle-3.png"
                    alt_1="TFTdle"
                    alt_2="TFTdle"
                    alt_3="TFTdle"
                    Caption=""
                    />
                <div className="px-12 flex justify-between flex-row">
                    <div className="font-dm text-blue-dark tracking-tight">
                        <p className="text-2xl font-semibold">TFTdle</p>
                        <p className="text-lg font-regular">UI Web Game Design</p>
                    </div>
                    <div className="flex items-center">
                        <p className='text-md border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Figma</p>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <Photos 
                    img_1="/assets/plantz/plantz-1.png"
                    img_2="/assets/plantz/plantz-2.png"
                    img_3="/assets/plantz/plantz-3.png"
                    alt_1="Plantz"
                    alt_2="Plantz"
                    alt_3="Plantz"
                    Caption=""
                    />
                <div className="px-12 flex justify-between">
                    <div className="font-dm text-blue-dark tracking-tight">
                        <p className="text-2xl font-semibold">Plantz</p>
                        <p className="text-lg font-regular">UX/UI App Design</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className='text-md border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Figma</p>
                        <p className='text-md border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Blender</p>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <Photos 
                    img_1="/assets/concerto/concerto-1.png"
                    img_2="/assets/concerto/concerto-2.png"
                    img_3="/assets/concerto/concerto-3.png"
                    alt_1="Concerto"
                    alt_2="Concerto"
                    alt_3="Concerto"
                    Caption=""
                    />
                <div className="px-12 flex justify-between">
                    <div className="font-dm text-blue-dark tracking-tight">
                        <p className="text-2xl font-semibold">Concerto</p>
                        <p className="text-lg font-regular">UI Web App Design</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className='text-md border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Figma</p>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <Photos 
                    img_1="/assets/pcc/pcc-1.png"
                    img_2="/assets/pcc/pcc-2.png"
                    img_3="/assets/pcc/pcc-3.png"
                    alt_1="Paper Trail"
                    alt_2="Paper Trail"
                    alt_3="Paper Trail"
                    Caption=""
                    />
                <div className="px-12 flex justify-between">
                    <div className="font-dm text-blue-dark tracking-tight">
                        <p className="text-2xl font-semibold">Paper Trail</p>
                        <p className="text-lg font-regular">Staff Monthly Newsletter</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className='text-md border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Figma</p>
                        <p className='text-md border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Procreate</p>
                        <p className='text-md border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Canva</p>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <Photos 
                    img_1="/assets/htbw/htbw-1.png"
                    img_2="/assets/htbw/htbw-2.png"
                    img_3="/assets/htbw/htbw-3.png"
                    alt_1="HTBW"
                    alt_2="HTBW"
                    alt_3="HTBW"
                    Caption=""
                    />
                <div className="px-12 flex justify-between">
                    <div className="font-dm text-blue-dark tracking-tight">
                        <p className="text-2xl font-semibold">How To Be WiSE Podcast</p>
                        <p className="text-lg font-regular">Branding & Marketing</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className='text-md border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Figma</p>
                        <p className='text-md border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>Canva</p>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <MoreFromMe
                    project_1="Literacy Lagoon"
                    sub_1="UX/UI App Design"
                    page_1="/projects/literacylagoon"
                    project_2="Women in Science & Engineering"
                    sub_2="Branding & Design"
                    page_2="/projects/wise"
                    project_3="Mootate"
                    sub_3="2D Game Development"
                    page_3="/projects/mootate"
                />

            </div>

        </div>
    );
}

export default playground;