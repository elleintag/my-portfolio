import React from "react";

const Goals = ({ Goal_1 = "Goal", Goal_2 = "Goal", Goal_3 = "Goal" }) => {
    return (
        <div className="px-24 py-20">
            <p className="text-6xl text-blue-dark font-dm font-semibold tracking-tighter">
                Goals
            </p>
            <div className="space-y-8 py-8 text-2xl text-blue-text font-dm font-normal tracking-tighter flex flex-col items-start">
                {/* <p>{Goal_1}</p>
                <p>{Goal_2}</p>
                <p>{Goal_3}</p> */}
                {[
                    { goal: Goal_1, photo: "1" },
                    { goal: Goal_2, photo: "2" },
                    { goal: Goal_3, photo: "3" },
                ].map((goal, index) => {
                    return (
                        <div
                            className="w-full h-full flex flex-row items-center gap-x-4 pl-4"
                            key={index}
                        >
                            <div className="w-12 h-12 bg-purple-300 shrink-0 flex items-center justify-center">
                                {goal.photo}
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
