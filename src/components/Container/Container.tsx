import React, { ReactNode } from "react";
import Header from "../Header";

interface ContainerProp {
  children: ReactNode;
}

export default function Container({ children }: ContainerProp) {
  return (
    <>
      <main className="bg-black">
        <div className="">
          <Header />
        </div>
        <section className="pt-24">{children}</section>
      </main>
    </>
  );
}
