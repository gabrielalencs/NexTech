export interface Products {
    id: string;
    name: string;
    slug: string;
    description: string;
    imageUrls: string[];
    basePrice: number;
    discountPercentage: number;
    categoryId: string;
}