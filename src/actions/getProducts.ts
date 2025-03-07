"use server";

import { prisma } from "auth";

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
    return await prisma.product.findMany({
        where: {
            category: {
                name: "Mouses",
            },
        },
    });
};