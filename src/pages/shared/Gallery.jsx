import React from "react";
import { useLoaderData } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const Gallery = ({cars}) => {
    // const cars = useLoaderData();
    return (
        <div className="mt-10">
            <div>
                <h1 className="text-4xl font-bold mb-5 text-center">Our Best Selling Cars (Gallery)</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr auto-cols-fr gap-10">
                {cars.map((car) => (
                    <GalleryCard key={car._id} imageUrl={car?.picture}></GalleryCard>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
