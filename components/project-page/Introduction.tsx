import React from "react";

const Introduction = ({
    Intro = "Introduction Text",
    img = "/assets/",
    Caption = "Caption",
}) => {
    return (
        <div className="p-24 bg-yellow-light flex justify-evenly">
            <div className="w-3/5 space-y-3 h-full pr-16">
                <p className="text-6xl text-blue-dark font-dm font-semibold tracking-tighter">
                    Introduction
                </p>
                <p className="text-lg text-blue-text font-dm tracking-tighter">
                    {Intro}
                </p>
            </div>
            <div className="w-2/5 h-full flex flex-col items-start">
                <img className="w-full h-full" src={img}></img>
                <p className="text-xl text-blue-text font-dm italic tracking-tighter px-2 py-3">
                    {Caption}
                </p>
            </div>
        </div>
    );
};

export default Introduction;
