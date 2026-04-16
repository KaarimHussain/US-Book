"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import brand1 from "@/app/assets/brands/brand-1.png";
import brand2 from "@/app/assets/brands/brand-2.png";
import brand3 from "@/app/assets/brands/brand-3.png";
import brand4 from "@/app/assets/brands/brand-4.png";
import brand5 from "@/app/assets/brands/brand-5.png";
import brand6 from "@/app/assets/brands/brand-6.png";
import brand7 from "@/app/assets/brands/brand-7.png";
import brand8 from "@/app/assets/brands/brand-8.png";

const brandLogos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

export default function Brands() {
  return (
    <section className="bg-accent py-10">
      <div className="mx-auto">
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          <div className="flex items-center gap-16">
            {brandLogos.map((logo, idx) => (
              <div
                key={idx}
                className="group relative h-10 w-40 grayscale brightness-200 transition-all hover:grayscale-0"
              >
                <Image
                  src={logo}
                  alt={`Partner Brand ${idx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
