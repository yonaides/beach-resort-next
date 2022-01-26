/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import defaultImg from "../public/images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        
        <Image src={images[0] || defaultImg} alt={name}  width="600" height="300" />
        <div className="price-top">
          <h6> $ {price}</h6>
          <p> per nigth</p>
        </div>
        <Link href={`/room/${slug}`}>
          <a className="btn-primary room-link">Features</a>
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propsTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
