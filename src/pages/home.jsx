import { AppHero } from "../components/Hero/hero";
import {
  SimpleGrid,
  Button,
  Container,
  Text,
  Accordion,
  Center,
  Group,
  Title,
} from "@mantine/core";
import { ReadMoreCard, LinksCard } from "../components/readMoreCard";
import { HeartHandshake } from "tabler-icons-react";
import { ApplicationFooter } from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import { getData } from "../data/getData";
import { JoinusSection } from "../components/joinUs";
import { LanguageContext, LanguageSwitcher } from "../context/userLangctx";
import { useContext } from "react";
import { Appconfig } from "../config";

export const HomePage = () => {
  const BREAKPOINT = "@media (max-width: 800px)";
  const { language, setLanguage } = useContext(LanguageContext);
  const data = getData(language);

  function AccordionLabel(details) {
    return (
      <Group noWrap>
        <div>
          <Text>{details.point}</Text>
        </div>
      </Group>
    );
  }

  return (
    <>
      <AppHero />

      <Container size="lg" mt={50}>
        <Center>
          <Title
            weight={900}
            mt={10}
            mb={10}
            style={{
              "text-align": "center",
              fontSize: 50,
              lineHeight: 1.1,
              margin: 0,
              padding: 0,

              [BREAKPOINT]: {
                fontSize: 30,
                lineHeight: 1.2,
              },
            }}
          >
            {data.header}
          </Title>
        </Center>

        <Text
          size={"xl"}
          mt={30}
          weight={600}
          color="gray"
          style={{
            "text-align": "center",
          }}
        >
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
          <ReadMoreCard
            title={data.SecondaryTitle}
            description={data.SecondaryParagraph}
            link={`#ndfHeader`}
          />

          <ReadMoreCard
            title={data.welcometitle}
            description={data.welcomedesc}
            link="/"
          />

          <ReadMoreCard
            title={data.obligations}
            description={data.obligationsesc}
            link="/"
          />
          <LinksCard />
        </SimpleGrid>
      </Container>

      <div
        style={{
          background: Appconfig.lightcolor,
          padding: 20,
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <Container size="lg">
          <Title weight={500} id="ndfHeader">
            {data.SecondaryTitle}
          </Title>

          <Text size={"xl"} mt={20} weight={600} color="gray">
            {data.SecondaryParagraph}
          </Text>
        </Container>
      </div>

      <Container size="lg">
        <Title weight={500} id="ndfObligations" order={2}>
          {data.pointTitle}
        </Title>

        <Accordion mt={20}>
          {data?.PointDetails.map((point) => {
            return <>{point.key}</>;
          })}

          {data.PointDetails.map((pointInfo) => (
            <Accordion.Item
              key={pointInfo.point}
              label={<AccordionLabel {...pointInfo} />}
            >
              {pointInfo.desecription}
            </Accordion.Item>
          ))}
        </Accordion>

        <Text size={"xl"} mt={50} weight={700}>
          {data.commitmentPara}
        </Text>

        <Text size={"xl"} mt={20} weight={700}>
          {data.end}
        </Text>
      </Container>

      <JoinusSection lang={language} />
    </>
  );
};
