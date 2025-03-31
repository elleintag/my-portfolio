import React from "react";
import Featured from "@/components/Featured";
import TextSide from "@/components/TextSide";
import Image from "next/image";

const home = () => {
    return (
        <main>
            <div className="mx-auto max-w-[1400px]">
                <div className="space-y-5 text-center pt-56 pb-36 relative">
                    <p className="text-8xl text-blue-text text-center font-dm font-bold tracking-tighter z-10">
                        Hi! I&apos;m Joelle!
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
                        height={600}
                        width={600}
                        className="absolute -top-56 -left-24 -z-10"
                        unoptimized
                    />
                    <Image
                        alt="Clover2"
                        src={"../assets/svgs/clover.svg"}
                        height={600}
                        width={600}
                        className="absolute -top-80 right-2 -z-10 rotate-[-125deg]"
                        unoptimized
                    />
                    <Image
                        alt="Yippee"
                        src={"../assets/svgs/yippee.svg"}
                        height={200}
                        width={200}
                        className="absolute -top-24 left-120 -z-10"
                        unoptimized
                    />
                    <Image
                        alt="Loops"
                        src={"../assets/svgs/loops.svg"}
                        height={500}
                        width={500}
                        className="absolute top-48 -right-24 -z-10"
                        unoptimized
                    />
                    <Image
                        alt="Squiggle short"
                        src={"../assets/svgs/squiggle-short.svg"}
                        height={450}
                        width={450}
                        className="absolute top-80 -left-20 -z-10"
                        unoptimized
                    />
                </div>
                <Featured />
                <TextSide
                    headerText="All about design, data, and innovative solutions?"
                    subText="I&apos;d love to connect! I&apos;m currently exploring exciting new roles and challenges."
                />
            </div>
        </main>
    );
};

export default home;
