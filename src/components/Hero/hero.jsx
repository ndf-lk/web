import React from "react";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Center,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({}));

export function AppHero() {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.root}>
        <img
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            maxWidth: "100%",
          }}
          srcset="/banner.jpg"
          alt=""
        />
      </div>
    </>
  );
}
