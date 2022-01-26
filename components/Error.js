import React from "react";
import Hero from "./Hero";
import Banner from "../components/Banner";
import Link from "next/link";

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link href="/">
          <a className="btn-primary"> return home </a>
        </Link>
      </Banner>
    </Hero>
  );
}
