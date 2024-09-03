"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface PhotoGalleryProps {
  title: string;
  description: string;
}

function PhotoGallery({ title, description }: PhotoGalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const animation = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0, 1, 0.58, 1.0],
      },
    },
  };

  const [emblaRef1, emblaApi1] = useEmblaCarousel({
    loop: true,
    align: "center",
    // containScroll: "trimSnaps",
  });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    if (emblaApi1) {
      const interval1 = setInterval(() => {
        emblaApi1.scrollNext();
      }, 2500);

      return () => clearInterval(interval1);
    }
  }, [emblaApi1]);

  useEffect(() => {
    if (emblaApi2) {
      const interval2 = setInterval(() => {
        emblaApi2.scrollNext();
      }, 2500);

      return () => clearInterval(interval2);
    }
  }, [emblaApi2]);

  const imagesFirstCarousel = [
    "/images/gallery/1.webp",
    "/images/gallery/2.webp",
    "/images/gallery/3.webp",
    "/images/gallery/4.webp",
  ];

  const imagesSecondCarousel = [
    "/images/gallery/5.webp",
    "/images/gallery/6.webp",
    "/images/gallery/7.webp",
    "/images/gallery/8.webp",
    "/images/gallery/9.webp",
  ];

  const scrollPrev1 = () => emblaApi1?.scrollPrev();
  const scrollNext1 = () => emblaApi1?.scrollNext();
  const scrollPrev2 = () => emblaApi2?.scrollPrev();
  const scrollNext2 = () => emblaApi2?.scrollNext();

  return (
    <section className="w-full max-w-screen-2xl flex justify-center overflow-hidden">
      <div className="w-full">
        <hr className="border-t-[1px] border-t-white pt-8 mx-6 md:mx-16" />
        <div
          ref={ref}
          className="w-full px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-between mb-24"
        >
          <motion.h5
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.015,
                  delayChildren: 0,
                },
              },
              hidden: {},
            }}
            className="text-center md:text-start text-xl font-semibold mb-8 md:mb-0 font-albert-sans"
          >
            {title.split(" ").map((word, index) => (
              <span
                className="inline-block overflow-clip h-fit w-fit"
                key={`title-${word}-${index}`}
              >
                <motion.span className="inline-block" variants={animation}>
                  {word}
                </motion.span>
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </motion.h5>

          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.015,
                  delayChildren: 0,
                },
              },
              hidden: {},
            }}
            className="text-center md:text-end text-sm max-w-[600px]"
          >
            {description.split(" ").map((word, index) => (
              <span
                className="inline-block overflow-clip h-fit w-fit"
                key={`description-${word}-${index}`}
              >
                <motion.span className="inline-block" variants={animation}>
                  {word}
                </motion.span>
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </motion.p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <div ref={emblaRef1}>
              <div className="flex h-48 md:h-56 xl:h-72 lg:mr-[528px]">
                {imagesFirstCarousel.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-auto px-2"
                  />
                ))}
              </div>
            </div>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-white/15 border border-white backdrop-blur-md px-2 md:px-4 py-1 md:py-2 rounded-full"
              onClick={scrollPrev1}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-white/15 border border-white backdrop-blur-md px-2 md:px-4 py-1 md:py-2 rounded-full"
              onClick={scrollNext1}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative">
            <div ref={emblaRef2}>
              <div className="flex h-48 md:h-56 xl:h-72">
                {imagesSecondCarousel.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-auto px-2"
                  />
                ))}
              </div>
            </div>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-white/15 border border-white backdrop-blur-md px-2 md:px-4 py-1 md:py-2 rounded-full"
              onClick={scrollPrev2}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-white/15 border border-white backdrop-blur-md px-2 md:px-4 py-1 md:py-2 rounded-full"
              onClick={scrollNext2}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
