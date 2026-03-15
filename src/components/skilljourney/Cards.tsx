import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

interface SlideData {
  title?: string;
  featureEmphasis?: string;
  description: string;
  image: string;
  imagePosition?: string;
  textPosition?: string;
}

interface CardProps {
  imageLocation?: string;
  slides: SlideData[];
  color: string;
  imagePosition?: string;
  edgeColor?: string;
  shadow: boolean;
  decors?: string;
}

const Cards = ({
  slides,
  imageLocation,
  color,
  imagePosition,
  edgeColor,
  shadow,
  decors,
}: CardProps) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const isExpandable = slides.length > 1;
  const carouselSlides = slides.slice(1);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length,
    );
  };

  return (
    <div
      className={`group relative w-full xl:h-[21.3125rem] lg:h-[17.5625rem] md:h-[15.0625rem] h-[12.5625rem] ${isExpandable ? "z-40" : "z-0"}`}
    >
      <div
        style={{ backgroundColor: color }}
        className={`absolute inset-0 z-0 flex flex-col rounded-[1.875rem]  group-hover:opacity-100 transition-all duration-500 ${carouselIndex > 0 ? "" : "opacity-0"}`}
      >
        {isExpandable && (
          <>
            <div
              className={`flex gap-6 overflow-hidden relative h-full ${carouselSlides[carouselIndex].textPosition}`}
            >
              <img
                src={carouselSlides[carouselIndex].image}
                alt={carouselSlides[carouselIndex].title || "Carousel slide image"}
                className={`absolute ${shadow ? "drop-shadow-[0.625rem_0_0_rgba(0,0,0,1)]" : ""} z-40 ${carouselSlides[carouselIndex].imagePosition}`}
              />
              {carouselSlides[carouselIndex].description && (
                <p className=" text-[#FAFAFA] xl:w-[50%] lg:w-[50%] md:w-[50%] w-[40%] font-nohemi font-bold leading-[120%] tracking-normal xl:text-xl lg:text-xl md:text-xl text-base xl:mt-10 lg:mt-10 md:mt-10 mt-2 xl:px-5 lg:px-5 md:px-15 xl:mr-0 lg:mr-0 md:mr-0 mr-10 z-30 ">
                  {carouselSlides[carouselIndex].description}
                </p>
              )}
            </div>

            <div className="absolute -left-1 bg-white top-1/2 -translate-y-1/2 h-24 w-19" aria-hidden="true" />
            <div className="absolute -right-1 bg-white top-1/2 -translate-y-1/2 h-24 w-19" aria-hidden="true" />
            <img
              src={`${edgeColor}`}
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-28 w-futo  transform scale-x-[-1] pointer-events-none"
            />

            <img
              src={`${edgeColor}`}
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-28 transform scale-x-[1] pointer-events-none"
            />

            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-0 z-40 ">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer z-40"
              >
                <ArrowLeft />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 active:scale-95 z-40 cursor-pointer"
              >
                <ArrowRight />
              </button>
            </div>

            {decors && (
              <img
                src={decors}
                alt=""
                aria-hidden="true"
                className="absolute xl:left-[4.1875rem] lg:left-[2.5rem] md:left-[2.5rem] left-[2.1875rem] xl:top-[1.5rem] lg:top-[1.25rem] md:top-[0.625rem] top-[0.25rem] xl:h-22 xl:w-22 lg:h-20 lg:w-20 md:h-18 md:w-18 h-12 w-12 z-50 pointer-events-none"
              />
            )}
            {decors && (
              <img
                src={decors}
                alt=""
                aria-hidden="true"
                className="absolute xl:right-20 lg:right-10 md:right-50 right-20 xl:top-[12.0625rem] lg:top-[12.0625rem] md:top-[6.875rem] top-[9.375rem] xl:h-22 xl:w-22 lg:h-20 lg:w-20 md:h-18 md:w-18 h-12 w-12 z-50 pointer-events-none scale-x-[-1]"
              />
            )}
          </>
        )}
      </div>

      <div
        style={{ backgroundColor: color }}
        className={`absolute inset-0 z-10 left-0 flex flex-col items-start justify-center text-left rounded-[1.875rem] ${
          isExpandable
            ? "group-hover:pointer-events-none group-hover:opacity-0 transition-all duration-500 group-hover:-translate-x-50 "
            : ""
        } ${carouselIndex > 0 ? "hidden" : ""}`}
      >
        <div
          className={`flex h-full w-full items-center xl:px-12 lg:px-10 md:px-8 px-4 ${
            imageLocation === "right"
              ? "flex-row-reverse text-left"
              : "flex-row text-right"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slides[0].image}
              alt={slides[0].title || "Section image"}
              className={`absolute z-40  animation-updown ${imagePosition}`}
            />
          </div>

          <div className="flex flex-1 flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <h2 className="display-3 text-white">{slides[0].title}</h2>
              {slides[0].featureEmphasis && (
                <p className="feature-emphasis text-white">
                  {slides[0].featureEmphasis}
                </p>
              )}
            </div>
            <p
              className={`highlight-standard text-white/90 w-2/3 ${imageLocation === "right" ? "self-start" : "self-end"}`}
            >
              {slides[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
