"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectIcon = ({
    title,
    sub,
    page,
    label_1,
    label_2,
    img_path,
    text,
    bglabel,
    textlabel,
    cover_image = false,
}: {
    title: string;
    sub: string;
    page: string;
    label_1: string;
    label_2: string;
    img_path: string;
    text: string;
    bglabel: string;
    textlabel: string;
    cover_image?: boolean;
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            className={`max-w-screen-xl rounded-2xl ${text} ${
                cover_image && "bg-green"
            } relative overflow-hidden`}
            href={page}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {cover_image && (
                <Image
                    src={img_path}
                    alt={title}
                    width={600}
                    height={600}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out ${
                        hovered ? "scale-105" : ""
                    }`}
                />
            )}
            {!cover_image && (
                <>
                    <Image
                        src={img_path}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        style={{
                            scale: hovered ? 1.05 : 1,
                            transition: "scale 500ms ease-in-out",
                        }}
                    />
                    <div className="w-full h-full opacity-50 bg-blue-default z-20 absolute transition-transform duration-500 ease-in-out hover:bg-scale-105" />
                </>
            )}
            <div className="mt-90 p-6 z-20 relative">
                <div className="text-3xl font-dm font-medium tracking-tight">
                    <p>{title}</p>
                </div>
                <div className="text-xl font-dm font-normal italic tracking-tight">
                    <p>{sub}</p>
                </div>
                <div className="flex py-2 space-x-2">
                    {label_1 && (
                        <p
                            className={`text-sm font-dm font-normal tracking-tighter border-solid ${bglabel} ${textlabel} rounded-xl px-4 py-1`}
                        >
                            {label_1}
                        </p>
                    )}
                    {label_2 && (
                        <p
                            className={`text-sm font-dm font-normal tracking-tighter border-solid ${bglabel} ${textlabel} rounded-xl px-4 py-1`}
                        >
                            {label_2}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProjectIcon;
