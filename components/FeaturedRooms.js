import React, { useContext } from "react";
import {RoomContext} from "../context/RoomContext";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default function FeaturedRooms() {
  const { featuredRooms, loading } = useContext(RoomContext);

  const rooms = featuredRooms ? featuredRooms.map((room) => {
    return <Room key={room.id} room={room} />;
  }) : <Room></Room>;

  return (
    <section className="featured-rooms">
      <Title title="Featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
}
