import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  return (
    <div>
      <header className="w-full h-14px sticky top-0 bg-[#242321]">
        <nav className="mx-auto flex container items-center justify-between py-6 px-20 font-poppins text-xl text-white">
          <p className="font-bold">
            Tide<span className="font-extralight">Insight</span>
          </p>
          <p className="font-extralight">GeoMap</p>
        </nav>
      </header>

      <div className="mx-auto flex container justify-between py-6 px-20 font-poppins text-[#242321] bg-white">
        <div>
          <p className="font-poppins text-lg font-medium">Get in Touch</p>
          <p className="font-poppins text-4xl font-semibold mt-6 leading-normal">
            Start Mapping Your <br /> Future, Today.
          </p>
        </div>
        <div>
          <p className="font-poppins text-sm font-semibold mt-24">
            Discover ways to optimize the value derived <br /> from data and
            enhance your decision <br /> making capabilities.
          </p>
        </div>
      </div>
      <div className="bg-[#FAFAF9]">
        <Carousel className="mx-auto w-[71rem]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="h-96 my-6">
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-4xl font-semibold">test</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
