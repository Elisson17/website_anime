import Container from "@/components/Container/Container";
import AnimesList from "@/app/(home)/home/components/AnimesList";
import { getAllListAnime } from "@/services/anime";
import React from "react";

export default async function Home() {
  const getRequestAnime = await getAllListAnime();

  const AnimeList = getRequestAnime?.data?.data;

  return (
    <div>
      <Container>
        <AnimesList anime={AnimeList} />
      </Container>
    </div>
  );
}
