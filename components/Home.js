import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import Link from "next/link";
import Services from "./Services";
import FeaturedRooms from "./FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="Deluxe rooms starting at $299"
        >
          <Link href="/rooms">
            <a className="btn-primary">Out Rooms</a>
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
