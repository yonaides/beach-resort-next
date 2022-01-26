import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default function Services() {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free shuttle",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ",
    },
    {
      icon: <FaBeer />,
      title: "Stronges Beer ",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ",
    },
  ]);

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span> {item.icon} </span>
              <h6> {item.title}</h6>
              <p> {item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
