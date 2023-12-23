import Image from "next/image";
import { Inter } from "next/font/google";
import { Plus } from "lucide-react";
import Link from "next/link";
const InterFont = Inter({ subsets: ["latin"] });

export default function Members() {
  return (
    <div className="flex flex-col gap-24 w-full items-center pt-20">
      <h1 className="text-5xl font-semibold max-w-5xl w-full text-center pt-28">
        Nossos membros
      </h1>

      <div className="grid grid-cols-3 gap-24 text-[#14101b] pt-20">
        <div className="relative bg-zinc-200 bg-opacity-30 flex flex-col gap-10 p-8 pt-24 rounded-3xl">
          <Image
            src="https://placehold.co/400x400"
            alt="image"
            width={0}
            height={0}
            className="object-contain absolute w-44 h-44 flex rounded-full -top-24 left-1/2 transform -translate-x-1/2"
          />

          {/*description */}
          <p
            className={`${InterFont.className} text-justify text-xl text-zinc-50 font-semibold pt-6 h-44`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            laboriosam animi accusamus explicabo veniam nisi possimus!
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-justify">Clara - CTO</span>

            <Link
              href="http://github.com"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-100"
            >
              <Plus size={27} />
            </Link>
          </div>
        </div>

        <div className="relative bg-zinc-200 bg-opacity-30 flex flex-col gap-10 p-8 pt-24 rounded-3xl">
          <Image
            src="https://placehold.co/400x400"
            alt="image"
            width={0}
            height={0}
            className="object-contain absolute w-44 h-44 flex rounded-full -top-24 left-1/2 transform -translate-x-1/2"
          />

          {/*description */}
          <p
            className={`${InterFont.className} text-justify text-xl text-zinc-50 font-semibold pt-6 h-44`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            laboriosam animi accusamus explicabo veniam nisi possimus!
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-justify">
              Gabriel - CEO
            </span>

            <Link
              href="http://github.com"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-100"
            >
              <Plus size={27} />
            </Link>
          </div>
        </div>

        <div className="relative bg-zinc-200 bg-opacity-30 flex flex-col gap-10 p-8 pt-24 rounded-3xl">
          <Image
            src="https://placehold.co/400x400"
            alt="image"
            width={0}
            height={0}
            className="object-contain absolute w-44 h-44 flex rounded-full -top-24 left-1/2 transform -translate-x-1/2"
          />

          {/*description */}
          <p
            className={`${InterFont.className} text-justify text-xl text-zinc-50 font-semibold pt-6 h-44`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            laboriosam animi accusamus explicabo veniam nisi possimus!
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-justify">Elias - CDO</span>

            <Link
              href="http://github.com"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-100"
            >
              <Plus size={27} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
