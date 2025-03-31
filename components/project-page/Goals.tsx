import React from "react";
import Image from "next/image";

const Goals = ({ Goal_1 = "Goal", Goal_2 = "Goal", Goal_3 = "Goal" }) => {
    return (
        <div className="px-24 py-16">
            <p className="text-5xl text-blue-dark font-dm font-semibold tracking-tight">
                Goals
            </p>
            <div className="space-y-8 py-8 text-2xl text-blue-text font-dm font-normal tracking-tight flex flex-col items-start">
                {[
                    { goal: Goal_1, photo: "/assets/svgs/goals-1.svg"},
                    { goal: Goal_2, photo: "/assets/svgs/goals-2.svg"},
                    { goal: Goal_3, photo: "/assets/svgs/goals-3.svg"},
                ].map((goal, index) => {
                    return (
                        <div
                            className="w-full h-full flex flex-row items-center gap-x-4 pl-4"
                            key={index}
                        >
                            <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                                <Image 
                                    alt="Clover"
                                    src={goal.photo}
                                    height={500}
                                    width={500}
                                    unoptimized
                                />
                            </div>
                            {goal.goal}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Goals;
