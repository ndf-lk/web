import { Link } from "react-router-dom";
import React from "react";
import {
  Group,
  createStyles,
  Container,
  Title,
  Text,
  Button,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    fontSize: 48,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 34,
      lineHeight: 1.15,
    },
  },
  index: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(/main.jpg)",
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export function IndexPage() {
  const { classes } = useStyles();
  return (
    <div className={classes.index}>
      <div className={classes.root}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>ආයුබෝවන් Welcome வணக்கம்</Title>

              <Text className={classes.description} mt={30}>
                ජාතික ප්‍රජාතන්ත්‍රවාදී පෙරමුණේ නිල වෙබ් අඩවියට ඔබ සාදරයෙන්
                පිළිගනිමු!
              </Text>
              <Group mt={40}>
                <Button
                  component={Link}
                  to="/home/si"
                  variant="gradient"
                  gradient={{ from: "orange", to: "pink" }}
                  size="sm"
                >
                  Sinhala
                </Button>

                <Button
                  component={Link}
                  to="/home/en"
                  variant="gradient"
                  gradient={{ from: "orange", to: "pink" }}
                  size="sm"
                >
                  English
                </Button>

                <Button
                  component={Link}
                  to="/home/tm"
                  variant="gradient"
                  gradient={{ from: "orange", to: "pink" }}
                  size="sm"
                >
                  Tamil
                </Button>
              </Group>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
