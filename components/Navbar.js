/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAlignRight } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const handleToogle = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <a>
              <Image
                src="/images/logo.svg"
                alt="home logo"
                width="250"
                height="37"
              />
            </a>
          </Link>
          <button type="button" className="nav-btn" onClick={handleToogle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link href="/">
              <a> Home</a>
            </Link>
          </li>
          <li>
            <Link href="/rooms">
              <a>Rooms</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
