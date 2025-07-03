import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { BellIcon, Figma, MapPin, Share2Icon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconBrandFigma } from "@tabler/icons-react";
import { CardDemo } from "@/components/CardDemo";

const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/yeella905",
  },
  {
    id: 2,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/ellaye/",
  },
];

const features = [
  {
    Icon: MapPin,
    name: "Ella Ye",
    description: "Toronto, ON.",
    href: "#",
    className: "col-span-3 lg:col-span-1",
  },
  {
    className: "col-span-3 lg:col-span-2  row-span-2",
    background: (
      <div>
        <img src="./profile.jpg" />
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Socials",
    description: "Connect with me.",
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex items-center md:gap-3 gap-6 mt-8 ml-5">
        {socialMedia.map((info) => (
          <a target="_blank" href={info.link}>
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          </a>
        ))}
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div>
      <section className="w-full ">
        <div className="grid grid-cols-2 gap-2 ">
          <div className=" h-[80vh] ">
            <div className="flex flex-col gap-4 w-[70%] m-auto h-full justify-center">
              <Badge
                variant="secondary"
                className="bg-[#a2dcdb57] text-[#57a1a6] dark:bg-blue-600 text-sm font-bold p-2 px-5 rounded-xl"
              >
                • Open for work
              </Badge>

              <h1 className="font-bold text-5xl">
                Hi, I'm a <br /> Front-end developer
              </h1>

              <p>
                Recent graduate from Light house labs web development diploma,
                <br />
                with previous experience in 2D animation.
              </p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col gap-4 w-[70%] h-full justify-center">
              <BentoGrid>
                {features.map((feature, idx) => (
                  <BentoCard key={idx} {...feature} />
                ))}
              </BentoGrid>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-[20%_80%] gap-10 w-[82%] m-auto">
          <div className="w-[80%] m-auto">
            <h1 className="font-bold text-5xl">
              How can I <br /> assist you?
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Card className="max-w-xl ">
              <CardContent>
                <div className="flex flex-row gap-4">
                  <div className="w-[100px]">
                    <IconBrandFigma size={48} />
                  </div>
                  <p>
                    I can design intuitive, visually appealing interfaces that
                    enhance the user experience and navigation ensuing the app
                    is easy to use among all platforms
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between w-full">
                <div className="text-lg">UI Design</div>
                <div className="text-lg">01</div>
              </CardFooter>
            </Card>

            <Card className="max-w-xl ">
              <CardContent>
                <div className="flex flex-row gap-4">
                  <div className="w-[100px]">
                    <IconBrandFigma size={48} />
                  </div>
                  <p>
                    I build intuitive, visually appealing interfaces that
                    enhance user experience and streamline navigation, ensuring
                    applications are responsive, accessible, and seamless across
                    all platforms
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between w-full">
                <div className="text-lg">Development</div>
                <div className="text-lg">02</div>
              </CardFooter>
            </Card>

            <Card className="max-w-xl ">
              <CardContent>
                <div className="flex flex-row gap-4">
                  <div className="w-[100px]">
                    <IconBrandFigma size={48} />
                  </div>
                  <p>
                    I create engaging, visually compelling 2D animations that
                    elevate storytelling and enhance viewer experience, ensuring
                    smooth, expressive motion across various platforms and
                    audiences.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between w-full">
                <div className="text-lg">2D animation</div>
                <div className="text-lg">03</div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="mt-30 mb-10">
        <div className="grid grid-cols-[20%_80%] gap-10 w-[82%] m-auto">
          <div className="w-[80%] m-auto">
            <h1 className="font-bold text-5xl">
              Selected <br /> work?
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <CardDemo />
          </div>
        </div>
      </section>

      <section className="mt-30 mb-10">
        <div className="grid grid-cols-[40%_60%] gap-10 w-[82%] m-auto">
          <div className="w-[80%] m-auto">
            <h1 className="font-bold text-5xl">
              Let's <br />
              connect <br />
              and chat
            </h1>
          </div>

          <div className="rounded-md">
            <img src="./bg.jpg" className="rounded-md" />
          </div>
        </div>
      </section>
    </div>
  );
}
