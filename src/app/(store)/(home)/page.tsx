import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/store/products/1" 
        className="relative group col-span-6 row-span-6 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image src="/moletom-never-stop-learning.png" className="group-hover:scale-105 transition-transform duration-500" alt="" width={820} height={820} quality={100} />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-lg border border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA side</span>
          <span className="flex h-full truncate items-center justify-center rounded-md bg-violet-500 px-4 font-semibold">R$129,90</span>
        </div>
      </Link>

      <Link
        href="/store/products/1" 
        className="group relative col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden items-start justify-center"
      >
        <Image src="/moletom-ia-p-devs.png" className="group-hover:scale-105 transition-transform duration-500" alt="" width={860} height={860} quality={100} />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-2xl border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA side</span>
          <span className="flex h-full truncate items-center justify-center rounded-xl bg-violet-500 px-4 font-semibold">R$129,90</span>
        </div>
      </Link>

      <Link href="/store/products/1" className="group relative col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden items-start justify-center">
        <Image src="/moletom-java.png" className="group-hover:scale-105 transition-transform duration-500" alt="" width={860} height={860} quality={100} />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-xl border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom IA side</span>
          <span className="flex h-full truncate items-center justify-center rounded-xl bg-violet-500 px-4 font-semibold">R$129,90</span>
        </div>
      </Link>
    </div>
  );
}