

import BackButton from "@/components/button/backButton";
import { wines } from "@/data/wines";
import Image from "next/image";
import Link from "next/link";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;



  const wine = wines.find((item) => item.id === +id);

  if (!wine) {
    return (
      <div className="min-h-screen bg-[#0b0b0d] flex items-center justify-center px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 text-center backdrop-blur-xl">
          <h1 className="text-3xl font-semibold text-white">
            Wine not found
          </h1>

          <BackButton />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0b0b0d] px-4 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        {/* Left Side */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="relative h-[520px] w-full">
            <Image
              src={wine.image}
              alt={wine.name}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm text-white/70">
            Premium Selection
          </span>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {wine.name}
          </h1>

          <p className="mt-4 text-lg text-white/60">
            Origin: {wine.country}
          </p>

          <p className="mt-6 text-5xl font-bold text-amber-400">
            ${wine.price}
          </p>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/70">
            {wine.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="
                rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500
                px-8 py-4 font-semibold text-black
                transition duration-300 hover:scale-105
              "
            >
              Add to Cart
            </button>

            <BackButton/>
          </div>

          {/* Features */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/50">Type</p>
              <p className="mt-1 font-semibold">Luxury Wine</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/50">Shipping</p>
              <p className="mt-1 font-semibold">Worldwide</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/50">Quality</p>
              <p className="mt-1 font-semibold">Premium Grade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}