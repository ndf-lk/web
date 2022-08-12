import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import "./index.css";

export function AppHero({ customImage }) {
  const matches = useMediaQuery("(min-width: 900px)", false);
  let height = matches ? 300 : 200;
  return (
    <>
      <div
        className="hero-image"
        color={matches ? "teal" : "red"}
        style={{
          backgroundImage: 'url("/header.png")',
          height: height,
        }}
      ></div>
    </>
  );
}

/*
 *  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  */
