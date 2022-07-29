import { Text, Paper, Anchor, Stack, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { ExternalLink } from "tabler-icons-react";

export const ReadMoreCard = ({ title, description, link }) => {
  return (
    <>
      <Paper shadow="xs" p="md">
        <Text weight={700} size="lg" mb={10}>
          {title}
        </Text>
        <Text lineClamp={3}>{description}</Text>
        <Anchor component={Link} to={link}>
          Learn More.
        </Anchor>
      </Paper>
    </>
  );
};

export const LinksCard = () => {
  return (
    <>
      <Paper
        style={{
          borderLeft: "2px solid black",
        }}
        p={"md"}
        radius={0}
      >
        <Stack>
          <LinkBtn link={"/"} text="More events" />
          <LinkBtn link={"/"} text="All news" />
          <LinkBtn link={"/"} text="About us" />
        </Stack>
      </Paper>
    </>
  );
};

const LinkBtn = ({ link, text }) => {
  return (
    <Button
      variant="default"
      size="lg"
      compact
      component={Link}
      to={link}
      rightIcon={<ExternalLink size={20} strokeWidth={2} />}
      style={{
        textAlign: "left",
      }}
    >
      {text}
    </Button>
  );
};
