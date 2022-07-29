import {
  SimpleGrid,
  Button,
  Paper,
  Container,
  Text,
  Accordion,
  Center,
  Group,
  Title,
  TextInput,
  Checkbox,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { LanguageContext } from "../context/userLangctx";
import { useContext } from "react";
import { getData } from "../data/getData";

export const Join = () => {
  const BREAKPOINT = "@media (max-width: 800px)";
  const { language } = useContext(LanguageContext);
  const data = getData(language);

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
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
            {data.joinus}
          </Title>
        </Center>

        <Text
          size={"xl"}
          mt={10}
          weight={600}
          color="gray"
          style={{
            "text-align": "center",
          }}
        >
          {data.forthe}
        </Text>
        <Container size={"sm"}>
          <Paper shadow="xs" p="md" mt={30}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
                required
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />

              <Checkbox
                mt="md"
                label="I agree to sell my privacy"
                {...form.getInputProps("termsOfService", { type: "checkbox" })}
              />

              <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Paper>
        </Container>
      </Container>
    </>
  );
};
