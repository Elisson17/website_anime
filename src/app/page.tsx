"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const route = useRouter();
  useEffect(() => {
    route.push("/home");
  }, [route]);

  return null;
}
