import React from "react";

const Introduction = ({
    Intro = "Introduction Text",
    img = "/assets/",
    Caption = "Caption",
}) => {
    return (
        <div className="px-24 py-12 rounded-xl bg-yellow-light flex justify-evenly">
            <div className="w-3/5 h-full space-y-5 pr-16 self-center">
                <p className="text-6xl text-blue-dark font-dm font-semibold tracking-tight">
                    Introduction
                </p>
                <p className="text-xl text-blue-text font-dm font-light tracking-tight">
                    {Intro}
                </p>
            </div>
            <div className="w-2/5 h-full space-y-3">
                <img className="w-full h-full" src={img}></img>
                <p className="text-xl text-blue-dark font-dm font-normal italic tracking-tight leading-tight px-2 py-3">
                    {Caption}
                </p>
            </div>
        </div>
    );
};

export default Introduction;
