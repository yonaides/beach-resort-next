import React from "react";
import loadingGif from "../public/images/gif/loading-arrow.gif";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="loading">
      <h4> rooms data loading... </h4>
      <Image
                src={loadingGif}
                alt="loading"
                width="200"
                height="200"
              />
    </div>
  );
}
