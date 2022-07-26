import React from "react";

export function AppHero({ customImage }) {
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
        />
      </div>
    </>
  );
}
