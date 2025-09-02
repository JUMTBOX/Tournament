import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function Content() {
  return (
    <div className="grid grid-rows-2 items-center w-full h-full" id="container">
      <Carousel
        className="w-full h-full border-2 border-black"
        plugins={[Autoplay({ delay: 3500 })]}
        opts={{
          align: "center",
          dragFree: true,
          loop: true,
        }}
      >
        <CarouselContent className="w-full h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full h-full basis-1/4">
              <Card className="w-full h-full bg-blue-500">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">{"...."}</span>
          <br />
          <span className="text-4xl font-semibold">{"...."}</span>
        </CardContent>
      </Card>
    </div>
  );
}
