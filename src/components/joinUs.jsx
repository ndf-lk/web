import { Container, Center, Title, Button, Text } from "@mantine/core";
import { getData } from "../data/getData";
import { HeartHandshake } from "tabler-icons-react";
import { Appconfig } from "../config";
import { LanguageContext } from "../context/userLangctx";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const JoinusSection = () => {
  const { language } = useContext(LanguageContext);
  const data = getData(language);

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
            size="lg"
            component={Link}
            to="/join"
            compact
            mt={15}
            leftIcon={<HeartHandshake />}
          >
            {data.joinusbtn}
          </Button>
        </Center>
      </Container>
    </div>
  );
};
