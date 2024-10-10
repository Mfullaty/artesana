import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import { ArrowDown, ArrowUp } from "lucide-react";

const productApiData = [
  {
    name: "Beans",
    img: "https://avatar.vercel.sh/jack",
    high: false,
    percentage: "85",
  },
  {
    name: "Yam",
    img: "https://avatar.vercel.sh/jill",
    high: false,
    percentage: "15",
  },
  {
    name: "John",
    img: "https://avatar.vercel.sh/john",
    high: true,
    percentage: "77",
  },
  {
    name: "Sesame Seeds",
    img: "https://avatar.vercel.sh/jane",
    high: false,
    percentage: "43",
  },
  {
    name: "Charcoal",
    img: "https://avatar.vercel.sh/jenny",
    high: false,
    percentage: "30",
  },
  {
    name: "Cashew Nuts",
    img: "https://avatar.vercel.sh/james",
    high: true,
    percentage: "36",
  },
];

const firstRow = productApiData.slice(0, productApiData.length / 2);
// const secondRow = productApiData.slice(productApiData.length / 2);

const DataCard = ({
  img,
  name,
  high,
  percentage,
}: {
  img: string;
  name: string;
  high: boolean;
  percentage: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
          </div>
          <small className={`flex justify-center items-center gap-[1px] ${high ? "text-green-500" : "text-red-500"}`}>
            {high ? <ArrowUp width={12} /> : <ArrowDown width={12} />}{percentage}%
          </small>
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export default function NewsSlider() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((data) => (
          <DataCard key={data.name} {...data} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <DataCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
