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
            <div className="bg-[#171717] flex items-center justify-center max-h-[500px] py-10 flex-1 rounded-md">
                <Image
                    src={currentImage}
                    alt={`Image do produto: ${productName}`}
                    className="h-auto w-auto max-w-[60%] object-contain"
                    width={0}
                    height={0}
                    sizes="100vw"
                    loading="lazy"
                />
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
                {productGallery.map((imageUrl, index) => (
                    <div
                        key={index}
                        className={`
                            bg-[#171717] flex items-center border-2 justify-center p-2 rounded-md flex-1 cursor-pointer w-[130px] h-[80px] sm:w-[150px] sm:h-[120px] sm:p-3 ${currentImage == imageUrl ? "border-primary" : "border-none"}
                        `}
                        onClick={() => toggleCurrentImage(imageUrl)}
                    >
                        <Image
                            src={imageUrl}
                            alt={`Image do produto: ${productName}`}
                            className={"h-auto max-h-[100%] w-auto max-w-[100%]"}
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ImageGallery 