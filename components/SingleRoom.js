import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { RoomContext } from "../context/RoomContext";
import Banner from "./Banner";
import StyledHero from "./StyledHero";

export default function SingleRoom() {
  const router = useRouter();
  const [room, setRoom] = useState();
  const { getRoom } = useContext(RoomContext);

  useEffect(() => {
    const { slug } = router.query;
    if (slug) {
      setRoom(getRoom(slug));
    }
  }, [getRoom, router]);

  if (!room) {
    return (
      <div className="error">
        <h3>No such could be found</h3>
        <Link href="/rooms">
          <a className="btn-primary"> Back to rooms</a>
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultImg}>
        <Banner title={`${name} room`}>
          <Link href="/rooms">
            <a className="btn-primary"> Back to Room </a>
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <Image key={index} src={item} alt={item.name}  width="300" height="400"/>;
          })}
        </div>
      </section>
      <div className="single-room-info">
        <article className="desc">
          <h3> details</h3>
          <p> {description}</p>
        </article>
        <article className="info">
          <h3> Info</h3>
          <h6> price: $ {price} </h6>
          <h6> size: $ {size} SQFT </h6>
          <h6>
            Max Capacity : $
            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
          </h6>
          <h6> {pets ? " pets allowed" : " not pets allowed"} </h6>
          <h6> {breakfast && "Free breakfast included"}</h6>
        </article>
      </div>
      <section className="room-extras">
        <h6> extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}> {item} </li>;
          })}
        </ul>
      </section>
    </>
  );
}
