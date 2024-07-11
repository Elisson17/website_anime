import { Anime, AnimeByIdProp } from "@/models/anime";
import baseApi from "./config";

export const getAllListAnime = () => baseApi.get<Anime>("anime");

export const getByIdAnime = (id: number) =>
  baseApi.get<AnimeByIdProp>(`anime/${id}`);
