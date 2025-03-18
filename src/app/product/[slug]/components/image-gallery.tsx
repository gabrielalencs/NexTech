"use client"

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
    productGallery: string[];
    productName: string;
};

const ImageGallery = ({ productGallery, productName }: ImageGalleryProps) => {
    const [currentImage, setCurrentImage] = useState(productGallery[0]);

    const toggleCurrentImage = (newCurrentImage: string) => {
        setCurrentImage(newCurrentImage)
    };

    return (
        <>
            <div className="bg-[#171717] flex items-center justify-center py-10 flex-1 rounded-md">
                <Image
                    src={currentImage}
                    alt={`Image do produto: ${productName}`}
                    className="w-9/12 max-w-[420px]"
                    width={420}
                    height={420}
                />
            </div>

            <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                {productGallery.map((imageUrl, index) => (
                    <div
                        key={index}
                        className="bg-[#171717] flex items-center justify-center p-2 rounded-md flex-1 cursor-pointer sm:p-3"
                        onClick={() => toggleCurrentImage(imageUrl)}
                    >
                        <Image
                            src={imageUrl}
                            alt={`Image do produto: ${productName}`}
                            className="w-full max-w-[100px]"
                            width={100}
                            height={100}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ImageGallery 