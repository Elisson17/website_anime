import React from "react";
import AnimeItem from "../../components/AnimeItem";
import { useRouter } from "next/navigation";
import { getByIdAnime } from "@/services/anime";

export default async function AnimeShow({
  params,
}: {
  params: { id: string };
}) {
  const RequestAnimeId = await getByIdAnime(parseInt(params.id));

  console.log(RequestAnimeId.data.data.title)

  return (
    <>
      <AnimeItem />
    </>
  );
}
