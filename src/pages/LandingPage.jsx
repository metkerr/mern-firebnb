import React, { useRef } from "react";
import Header from "parts/Header";

import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

export default function LandingPage(props) {
  const refMostPicked = useRef();

  return (
    <>
      <Header {...props}></Header>
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked data={landingPage.mostPicked} refMostPicked={refMostPicked} />
    </>
  );
}
