import {
  SimpleGrid,
  Button,
  Grid,
  Paper,
  Select,
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
import { getFormData } from "../data/formData";

export const Join = () => {
  const BREAKPOINT = "@media (max-width: 800px)";
  const { language } = useContext(LanguageContext);
  const data = getData(language);
  const formdata = getFormData(language);

  const form = useForm({
    initialValues: {
      name: "",
      nic: "",
      birthday: "",
      address: "",
      district: "",
      DivisionalSecretariat: "",
      VillageOfficerDomain: "",
      phone: "",
      email: "",
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
              <Grid grow>
                <Grid.Col span={1}>
                  <Select
                    label={formdata?.honorific}
                    placeholder={formdata.honorific_values[1].label}
                    data={formdata.honorific_values}
                  />
                </Grid.Col>
                <Grid.Col span={7}>
                  <TextInput
                    required
                    label={formdata.name}
                    placeholder="John Doe"
                    {...form.getInputProps("name")}
                  />
                </Grid.Col>
              </Grid>

              <TextInput
                mt={10}
                required
                label={formdata.nic}
                placeholder={"790029871V"}
                {...form.getInputProps("nic")}
              />

              <Group grow mt={10}>
                <TextInput
                  required
                  label={formdata.phone}
                  placeholder="+94751231234"
                  {...form.getInputProps("phone")}
                />

                <TextInput
                  required
                  label={formdata.email}
                  placeholder="your@email.com"
                  {...form.getInputProps("email")}
                />
              </Group>

              <TextInput
                mt={10}
                required
                label={formdata.address}
                placeholder={"No. 19/1A, Kolamunna Medapatha Road, Piliyandala"}
                {...form.getInputProps("address")}
              />

              <SimpleGrid
                cols={3}
                mt={10}
                breakpoints={[
                  { maxWidth: 980, cols: 3, spacing: "md" },
                  { maxWidth: 755, cols: 1, spacing: "sm" },
                  { maxWidth: 600, cols: 1, spacing: "sm" },
                ]}
              >
                <TextInput
                  required
                  label={formdata.district}
                  placeholder={"Colombo"}
                  {...form.getInputProps("district")}
                />

                <TextInput
                  required
                  label={formdata.divisionalsecretariat}
                  placeholder={"Piliyandala"}
                  {...form.getInputProps("DivisionalSecretariat")}
                />

                <TextInput
                  required
                  label={formdata.villageofficerdomain}
                  placeholder={"Western"}
                  {...form.getInputProps("VillageOfficerDomain")}
                />
              </SimpleGrid>

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
