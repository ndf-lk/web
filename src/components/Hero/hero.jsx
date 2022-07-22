import React from "react";

export function AppHero() {
  return (
    <>
      <div>
        <img
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            maxWidth: "100%",
          }}
          srcSet="/banner.jpg"
          alt=""
        />
      </div>
    </>
  );
}
