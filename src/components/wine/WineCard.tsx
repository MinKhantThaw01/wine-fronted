import { Wine } from "@/types/wine";
import Image from "next/image";

type Props = {
  wine: Wine;
};

export default function WineCard({ wine }: Props) {
  return (
    <div className="group w-full max-w-sm h-full">
      <div className="h-full bg-[#0b0b0d] flex items-stretch justify-center p-4 rounded-lg shadow-md overflow-hidden">
        <article
          className="
            w-full h-full flex flex-col
            rounded-3xl
            overflow-hidden
            border border-white/10
            bg-white/10
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            transition-all duration-500
            hover:-translate-y-2
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          "
        >
          {/* Image Section */}
          <div className=" relative  h-40  sm:h-40 bg-gradient-to-b from-white/5 to-transparent">
            <Image
              src={wine.image}
              alt={wine.name}
              fill
              className="object-contain p-6 transition duration-700 group-hover:scale-110 group-hover:-translate-y-2"
            />

            <span className="absolute top-4 right-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md">
              Luxury
            </span>
          </div>

          {/* Content */}
          <div className="p-6 text-white flex flex-col flex-1">
            {/*  Title */}
            <h2 className="text-lg font-semibold tracking-wide min-h-[56px] line-clamp-2">
              {wine.name}
            </h2>

            {/* Country + Price */}
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-white/60">{wine.country}</p>
              <p className="text-2xl font-bold text-amber-400">
                ${wine.price}
              </p>
            </div>

            {/* Fixed Description Height */}
            <p className="mt-3 text-sm leading-6 text-white/70 min-h-[72px] line-clamp-3">
              {wine.description}
            </p>

            {/* Push Button Bottom */}
            <button
              className="
                mt-auto w-full rounded-2xl
                bg-gradient-to-r from-amber-500 to-orange-500
                py-3 font-semibold tracking-wide
                transition duration-300
                hover:scale-[1.02]
                hover:shadow-lg
              "
          
            >
              Add to Cart
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}