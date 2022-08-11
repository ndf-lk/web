import {
  SimpleGrid,
  Button,
  Grid,
  Paper,
  Select,
  Container,
  Text,
  Center,
  Group,
  Title,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { LanguageContext } from "../context/userLangctx";
import { useContext } from "react";
import { getData } from "../data/getData";
import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { getFormData } from "../data/formData";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Appconfig } from "../config";
import axios from "axios";

export const Join = () => {
  const BREAKPOINT = "@media (maxWidth: 800px)";
  const { language } = useContext(LanguageContext);
  const data = getData(language);
  const formdata = getFormData(language);

  const [honorificSelection, setHonorificSelection] = useState(
    formdata.honorific_values[1].label
  );

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const form = useForm({
    initialValues: {
      name: "",
      nic: "",
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

  const userJoinMutation = useMutation((data) => {
    return axios.post(`${Appconfig.apiUrl}/member/join`, data);
  });

  const submitForm = async (values) => {
    values.name = `${honorificSelection} ${values.name}`;
    console.log(JSON.stringify(values, 2, null));

    try {
      const data = await userJoinMutation.mutateAsync(values);
      showNotification({
        title: "Request sent successfully",
        message:
          "Your membership request has been sent successfully, you will get a email after you get acceptd",
        color: "teal",
      });
    } catch (err) {
      showNotification({
        title: "Error!",
        message: err?.message,
        color: "red",
      });
      console.log(err);
    }
  };

  return (
    <>
      <Container size="lg" mt={50}>
        <Center>
          <Title
            weight={900}
            mt={10}
            mb={10}
            style={{
              textAlign: "center",
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
            textAlign: "center",
          }}
        >
          {data.forthe}
        </Text>
        <Container size={"sm"}>
          <Paper shadow="xs" p="md" mt={30}>
            <form onSubmit={form.onSubmit((values) => submitForm(values))}>
              <Grid grow>
                <Grid.Col span={1}>
                  <Select
                    value={honorificSelection}
                    onChange={setHonorificSelection}
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
