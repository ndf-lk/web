import data from "../data/english.json";
import { AppHero } from "../components/Hero/hero";
import {
  Image,
  Group,
  Button,
  SimpleGrid,
  Container,
  Text,
  MediaQuery,
  Center,
  Title,
} from "@mantine/core";

export const HomePage = () => {
  const BREAKPOINT = "@media (max-width: 800px)";
  return (
    <>
      <AppHero />

      <Container
        size="lg"
        mt={50}
        style={{
          "text-align": "center",
        }}
      >
        <Center>
          <Title
            weight={900}
            mt={10}
            mb={10}
            style={{
              fontSize: 57,
              lineHeight: 1.1,
              margin: 0,
              padding: 0,

              [BREAKPOINT]: {
                fontSize: 42,
                lineHeight: 1.2,
              },
            }}
          >
            {data.header}
          </Title>
        </Center>

        <Text size={"xl"} mt={30} weight={600} color="gray">
          {data.description}
        </Text>

        <SimpleGrid
          cols={4}
          spacing="lg"
          mt={40}
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          <Button variant="outline">3</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">3</Button>
        </SimpleGrid>
      </Container>
    </>
  );
};
