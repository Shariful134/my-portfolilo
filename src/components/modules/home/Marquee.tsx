import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image"; // ✅ Added for next/image

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://i.postimg.cc/0jpTDfB5/html.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://i.postimg.cc/s2g3zt0Y/css.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/N05ZpYzz/tailwind.jpg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/NF7n50K5/b.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/XYQ0ss7p/e7l8mvvh.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/cLJzL00L/react2.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/GmS5BVmJ/nextjs.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/MHDszrLB/typecript.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/Y0WV5vvc/reactanimated.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/kM6k6pfj/mongodb.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.postimg.cc/Qx652fr3/mongoose.png",
  },
];

const firstRow = reviews.slice(0, reviews.length - 1);

const ReviewCard = ({
  img,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative  h-[90px] md:h-full p-4 w-64 cursor-pointer overflow-hidden overflow-x-hidden rounded-xl border border-dashed border-purple-500 "
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          width={300}
          height={100}
          className="w-[300px] h-[100px] object-cover rounded"
          alt="Tech Logo"
          src={img}
        />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="container mx-auto relative  flex w-full flex-col items-center justify-center overflow-hidden bg-[#020817]">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>
    </div>
  );
}
