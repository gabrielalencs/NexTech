import Banner from "../../public/banner-hero.webp"

export default async function Home() {
    return (
        <main>
            <div className="px-6 h-max lg:px-0">
                <img 
                    src={Banner.src} 
                    alt="Banner da Loja" 
                    className="mx-auto rounded-xl w-full lg:rounded-none"
                />
            </div>

            <div>
                
            </div>
        </main>
    );
}