import { useState } from "react";

interface SlideData {
  title?: string;
  featureEmphasis?: string;
  description: string;
  image: string;
}

interface CardProps {
  imagePosition?: string;
  slides: SlideData[];
}

const Cards = ({ slides, imagePosition }: CardProps) => {
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
    <div className="group relative w-full h-[341px]">
      <div className="absolute inset-0 z-0 flex flex-col bg-[#F45B5B] rounded-[30px]   opacity-0 group-hover:opacity-100 transition-all duration-500">
        {isExpandable && (
          <>
            <div className="flex gap-6 overflow-hidden justify-end h-full">
              <img
                src={carouselSlides[carouselIndex].image}
                alt=""
                className="h-[323px] w-[352px] absolute top-[18px] left-[24px]  drop-shadow-[10px_0px_0px_rgba(0,0,0,1)]"
              />
              {carouselSlides[carouselIndex].description && (
                <p className="highlight-standard text-[#FAFAFA] w-[40%] font-nohemi font-bold leading-[120%] tracking-normal text-xl mt-20">
                  {carouselSlides[carouselIndex].description}
                </p>
              )}
            </div>

            <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between ">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/40"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/40"
              >
                →
              </button>
            </div>
          </>
        )}
      </div>

      <div
        className={`absolute inset-0 z-10 left-0 flex flex-col items-start justify-center text-left bg-[#F45B5B]  rounded-[30px]  ${
          isExpandable
            ? "group-hover:pointer-events-none group-hover:opacity-0 transition-all duration-500 group-hover:-translate-x-50 "
            : ""
        }`}
      >
        <div
          className={`flex ${imagePosition === "right" ? "flex-row-reverse" : "flex-row"} w-full justify-end p-12`}
        >
          <div className="w-1/3 relative">
            <img
              src={slides[0].image}
              alt=""
              className="h-[370px] absolute -left-[80px] top-[45px] z-20 animation-updown"
            />
          </div>
          <div className="flex flex-col gap-8 w-full text-right self-end">
            <div className="flex flex-col gap-2.5">
              <h1 className="display-3 text-white">{slides[0].title}</h1>
              {slides[0].featureEmphasis && (
                <p className="feature-emphasis text-white">
                  {slides[0].featureEmphasis}
                </p>
              )}
            </div>
            <p className="highlight-standard text-white/90 w-[95%] self-end">
              {slides[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
