import { AnimeProp } from "@/models/anime";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ContainerItemProp {
  anime: AnimeProp[];
}

export default function AnimesList({ anime }: ContainerItemProp) {
  return (
    <>
      <div className="grid grid-cols-6 justify-center bg-slate-400/10 rounded-3xl border-4 border-white items-center gap-10 mx-3 mt-3 pt-3 pb-3 ">
        {anime.map((anime) => (
          <div
            className="flex flex-col justify-center items-center hover:scale-105 cursor-pointer text-center"
            key={anime.mal_id}
          >
            <Link href={`/home/show/${anime.mal_id}`}>
              <Image
                src={anime.images.jpg.image_url}
                alt="Logo OtakoHub"
                width={0}
                height={0}
                sizes="100vw"
                className="h-60 w-40 rounded-md"
              />
              <p className="text-white pt-3">{anime.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
