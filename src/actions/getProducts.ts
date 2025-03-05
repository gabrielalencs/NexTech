"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getDiscountedProducts() {
    return await prisma.product.findMany({
        where: {
            discountPercentage: {
                gt: 0,
            },
        },
    });
};

export async function getKeyboardProducts() {
    return await prisma.product.findMany({
        where: {
            category: {
                name: "Teclados",
            },
        },
    });
};

export async function getMouseProducts() {
    const mouses = await prisma.product.findMany({
        where: {
            category: {
                name: "Mouses",
            },
        },
        take: 10
    });

    console.log("Mouses encontrados:", mouses.length); // Depuração
    return mouses;
};