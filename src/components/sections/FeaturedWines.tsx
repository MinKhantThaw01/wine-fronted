import React from 'react'
import WineCard from '../wine/WineCard'
import { wines } from '@/data/wines'

export default function FeaturedWines() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
    <h2 className="text-3xl font-bold text-white mb-8">
  Featured Wines
</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center items-stretch">
    {wines.map((wine) => (
      <WineCard key={wine.id} wine={wine} />
    ))}
  </div>
</section>
  )
}
