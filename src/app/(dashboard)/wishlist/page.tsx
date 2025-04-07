const WishlistPage = () => {

    return (
        <section className="text-white max-w-[1296px] mx-auto px-6 min-h-[70vh]">
            <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {products.map(productInfo => (
                    <ProductItem productInformation={productInfo} key={productInfo.id} />
                ))}
                {products.length != 0 ? (
                    products.map(productInfo => (
                        <ProductItem productInformation={productInfo} key={productInfo.id} />
                    ))
                ) : (
                    <h1 className="text-white text-xl absolute">
                        Nenhum produto favoritado
                    </h1>
                )}
            </div>
        </section>
    )
}