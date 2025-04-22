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
            <div className="bg-[#171717] flex h-[380px] w-full items-center justify-center py-10  rounded-md overflow-hidden lg:flex-1 lg:max-h-[500px]">
                <Image
                    src={currentImage}
                    alt={`Image do produto: ${productName}`}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[60%] object-contain lg:max-w-[70%]"
                />
            </div>

            <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                {productGallery.map((imageUrl, index) => (
                    <div
                        key={index}
                        onClick={() => toggleCurrentImage(imageUrl)}
                        className={`bg-[#171717] border-2 flex items-center duration-200 justify-center p-2 rounded-md flex-1 cursor-pointer w-[150px] h-[120px] sm:p-3 ${currentImage === imageUrl ? "border-primary" : "border-transparent "}`}
                    >
                        <Image
                            src={imageUrl}
                            alt={`Image do produto: ${productName}`}
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ImageGallery 