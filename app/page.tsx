import React from "react";
import Featured from "@/components/Featured";
import TextSide from "@/components/TextSide";
import Image from "next/image";

const home = () => {
    return (
        <main>
            <div className="mx-auto max-w-screen-xl">
                <div className="space-y-5 text-center pt-40 pb-24 relative">
                    <p className="text-8xl text-blue-text text-center font-dm font-bold tracking-tighter z-10">
                        Hi! I'm Joelle!
                    </p>
                    <div className="space-x-2 text-4xl text-blue-text text-center tracking-tight flex items-center justify-center">
                        <p className="font-ss font-light italic">A</p>
                        <p className="font-dm font-medium">designer /</p>
                        <p className="font-ss font-light italic">analyzer </p>
                        <p className="font-dm font-medium">/ developer</p>
                        <p className="font-ss font-light italic">
                            of all sorts
                        </p>
                    </div>
                    <Image
                        alt="Clover1"
                        src={"../assets/svgs/clover.svg"}
                        height={550}
                        width={550}
                        className="absolute -top-24 -left-12 -z-10 rotate-[75deg]"
                        unoptimized
                    />
                    <Image
                        alt="Clover2"
                        src={"../assets/svgs/clover.svg"}
                        height={580}
                        width={580}
                        className="absolute -top-80 right-12 -z-10 rotate-[30deg]"
                        unoptimized
                    />
                    <Image
                        alt="Yippee"
                        src={"../assets/svgs/yippee.svg"}
                        height={300}
                        width={300}
                        className="absolute top-0 right-1/2 -z-10 rotate-[5deg]"
                        unoptimized
                    />
                    {/* <Image
                        alt="Loops"
                        src={"../assets/svgs/loops.svg"}
                        height={300}
                        width={300}
                        className="absolute top-80 right-1/2 -z-10 rotate-[130deg]"
                        unoptimized
                    />
                    <Image
                        alt="Squiggle short"
                        src={"../assets/svgs/squiggle-short.svg"}
                        height={300}
                        width={300}
                        className="absolute top-80 right-1/2 -z-10 rotate-[130deg]"
                        unoptimized
                    /> */}
                </div>
                <Featured />
                <TextSide
                    headerText="All about design, data, and innovative solutions?"
                    subText="I’d love to connect! I’m currently exploring exciting new roles and challenges."
                />
            </div>
        </main>
    );
};

export default home;
