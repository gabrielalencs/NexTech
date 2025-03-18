import { LayoutGrid } from "lucide-react"
import { prisma } from "auth";
import Image from "next/image";
import Link from "next/link";


const CatalogPage = async () => {
    const categories = await prisma.category.findMany();
    // const session = await auth();

    // if (!session) return redirect("/signin");


    return (
        <section className="max-w-[1296px] min-h-[70vh] mx-auto px-6">
            <h2 className="border-2 border-primary px-5 py-2 rounded-full uppercase text-md flex items-center gap-2 text-white w-max">
                <LayoutGrid />
                Catálogo
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map(categorie => (
                    <Link
                        key={categorie.id}
                        href={`category/${categorie.slug}`}
                        className="flex flex-col h-[180px] duration-200 hover:scale-105"
                    >
                        <div className="categories-gradient rounded-t-md h-full flex items-center justify-center">
                            <Image
                                src={categorie.imageUrl}
                                alt={`Imagem da categoria de ${categorie.name}`}
                                className="mx-auto"
                                width={120}
                                height={120}
                            />
                        </div>

                        <div className="bg-[#171717] text-white text-center py-4 rounded-b-md h-[30%]">
                            <span>{categorie.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CatalogPage