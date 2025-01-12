import { api } from "@/data/api";
import { Product } from "@/data/types/products";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')
  const products = await response.json()
  return products
}

export default async function Home() {

  const [highlitedProduct, ...otherproducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlitedProduct.slug}`} 
        className="relative group col-span-6 row-span-6 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image src={highlitedProduct.image} className="group-hover:scale-105 transition-transform duration-500" alt="" width={820} height={820} quality={100} />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-lg border border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlitedProduct.title}</span>
          <span className="flex h-full truncate items-center justify-center rounded-md bg-violet-500 px-4 font-semibold">{highlitedProduct.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}</span>
        </div>
      </Link>

      {otherproducts.map((product) => {
        return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden items-start justify-center"
            >
              <Image src={product.image} className="group-hover:scale-105 transition-transform duration-500" alt="" width={860} height={860} quality={100} />
              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-lg border border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full truncate items-center justify-center rounded-md bg-violet-500 px-4 font-semibold">{product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</span>
              </div>
            </Link>
          )
      })}
    </div>
  );
}