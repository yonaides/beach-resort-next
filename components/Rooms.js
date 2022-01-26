import React from "react";
import Link from "next/link";
import Hero from "./Hero";
import Banner from "../components/Banner";
import RoomContainer from "./RoomContainer";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our rooms">
          <Link href="/">
            <a className="btn-primary"> Return home </a>
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}
