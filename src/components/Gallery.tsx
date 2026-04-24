'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type GalleryItem = {
  src: string;
  title: string;
  sub: string;
  featured?: boolean;
};

const galleryItems: GalleryItem[] = [
  { src: '/g1.webp', title: 'Invisalign Transformation', sub: '9 Month Treatment', featured: true },
  { src: '/g2.webp', title: 'Modern Clinic Environment', sub: 'State-of-the-art facility' },
  { src: '/g3.webp', title: 'Teeth Whitening', sub: 'Single Session Result' },
  { src: '/g5.webp', title: 'Smile Confidence', sub: 'Complete Smile Makeover' },
  { src: '/g4.webp', title: 'Precision Treatment', sub: 'Invisalign Clear Aligners' },
  { src: '/g6.webp', title: 'Clinic Consultation', sub: 'Personalised Care' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const activeItem = lightbox !== null ? galleryItems[lightbox] : null;

  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] eyebrow">
            Smile Gallery
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
            Real Results. Real Confidence.
          </h2>
          <p className="mt-4 text-sm text-muted-text">
            Explore our patient transformations, modern clinic environment, and precision-driven dental care.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:grid-rows-3 h-auto lg:h-[700px]">

          <GridItem item={galleryItems[0]} onClick={() => setLightbox(0)} className="col-span-2 lg:col-span-1 lg:row-span-2" featured />

          <GridItem item={galleryItems[1]} onClick={() => setLightbox(1)} />
          <GridItem item={galleryItems[2]} onClick={() => setLightbox(2)} />

          <GridItem item={galleryItems[3]} onClick={() => setLightbox(3)} className="lg:row-span-2" />
          <GridItem item={galleryItems[4]} onClick={() => setLightbox(4)} className="lg:row-span-2" />

          <GridItem item={galleryItems[5]} onClick={() => setLightbox(5)} />

        </div>
      </div>

      {/* LIGHTBOX */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-overlay-bg backdrop-blur-[12px]"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>

          {/* prevent close on image click */}
          <div
            className="relative w-full max-w-4xl h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeItem.src}
              alt={activeItem.title}
              fill
              sizes="100vw"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

/* REUSABLE ITEM */
type GridItemProps = {
  item: GalleryItem;
  onClick: () => void;
  className?: string;
  featured?: boolean;
};

function GridItem({ item, onClick, className = '', featured = false }: GridItemProps) {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer group rounded-[14px] overflow-hidden ${featured ? 'border-2 border-primary' : ''} ${className}`}
    >
      <div className="relative w-full h-full min-h-[160px]">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2331]/70 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition flex items-end p-4">
        <div>
          <p className="text-white text-sm font-medium">{item.title}</p>
          <p className="text-white/80 text-xs">{item.sub}</p>
        </div>
      </div>
    </div>
  );
}