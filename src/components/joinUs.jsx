import { Container, Center, Title, Button, Text } from "@mantine/core";
import { getData } from "../data/getData";
import { HeartHandshake } from "tabler-icons-react";
import { Appconfig } from "../config";

export const JoinusSection = ({ lang }) => {
  const data = getData(lang);
  return (
    <div
      style={{
        background: Appconfig.lightcolor,
        padding: 20,
        marginTop: 50,
      }}
    >
      <Container size="lg">
        <Center>
          <Title weight={500} id="ndfHeader" order={2}>
            {data.joinus}
          </Title>
        </Center>

        <Center>
          <Text size={"xl"} weight={700}>
            {data.forthe}
          </Text>
        </Center>

        <Center>
          <Button
            variant="default"
            size="xl"
            compact
            mt={15}
            leftIcon={<HeartHandshake />}
          >
            join us
          </Button>
        </Center>
      </Container>
    </div>
  );
};
