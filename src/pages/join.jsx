import {
  SimpleGrid,
  Button,
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
import { useContext } from "react";
import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocalStorage } from "@mantine/hooks";

// other imports
import { LanguageContext } from "../context/userLangctx";
import { getFormData } from "../data/formData";
import { Appconfig } from "../config";
import { getData } from "../data/getData";

export const Join = () => {
  const BREAKPOINT = "@media (maxWidth: 800px)";
  const { language } = useContext(LanguageContext);
  const data = getData(language);
  const formdata = getFormData(language);
  const [memberFormSubmitted, setMemberFormSubmission] = useLocalStorage({
    key: "member-form-submission",
    defaultValue: false,
  });

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

      setMemberFormSubmission(true);
    } catch (err) {
      showNotification({
        title: err.response.data?.Message,
        message: err?.response.data?.Error,
        color: "red",
      });
      console.log(JSON.stringify(err.response.data));
    }

    // remove the added honorific
    let namearr = values.name.split(" ");
    namearr.shift();
    values.name = namearr.join(" ");
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
        <Container size={"md"} mb={100}>
          <Paper shadow="xs" p="xl" mt={30} withBorder>
            {memberFormSubmitted ? (
              <>
                <Title weight={900} mb={10} order={2}>
                  {data?.memberformsubmission}
                </Title>
                <Text mb={20}>{data?.memberformdesc}</Text>

                <Button
                  type="submit"
                  size="sm"
                  variant="default"
                  mb={10}
                  onClick={() => setMemberFormSubmission(false)}
                >
                  {data?.submitanotherresponse}
                </Button>
              </>
            ) : (
              <>
                <form onSubmit={form.onSubmit((values) => submitForm(values))}>
                  <SimpleGrid
                    cols={2}
                    breakpoints={[
                      { maxWidth: 980, cols: 2, spacing: "md" },
                      { maxWidth: 755, cols: 1, spacing: "sm" },
                      { maxWidth: 600, cols: 1, spacing: "sm" },
                    ]}
                  >
                    <Select
                      value={honorificSelection}
                      onChange={setHonorificSelection}
                      label={formdata?.honorific}
                      placeholder={formdata.honorific_values[1].label}
                      data={formdata.honorific_values}
                      size="md"
                    />

                    <TextInput
                      size="md"
                      required
                      label={formdata.name}
                      placeholder="John Doe"
                      {...form.getInputProps("name")}
                    />
                  </SimpleGrid>

                  <TextInput
                    mt={20}
                    size="md"
                    required
                    label={formdata.nic}
                    placeholder={"790029871V"}
                    {...form.getInputProps("nic")}
                  />

                  <SimpleGrid
                    cols={2}
                    breakpoints={[
                      { maxWidth: 980, cols: 2, spacing: "md" },
                      { maxWidth: 755, cols: 1, spacing: "sm" },
                      { maxWidth: 600, cols: 1, spacing: "sm" },
                    ]}
                  >
                    <TextInput
                      required
                      mt={20}
                      size="md"
                      label={formdata.phone}
                      placeholder="+94751231234"
                      {...form.getInputProps("phone")}
                    />

                    <TextInput
                      required
                      mt={20}
                      size="md"
                      label={formdata.email}
                      placeholder="your@email.com"
                      {...form.getInputProps("email")}
                    />
                  </SimpleGrid>

                  <TextInput
                    mt={20}
                    required
                    label={formdata.address}
                    size="md"
                    placeholder={
                      "No. 19/1A, Kolamunna Medapatha Road, Piliyandala"
                    }
                    {...form.getInputProps("address")}
                  />

                  <SimpleGrid
                    cols={3}
                    breakpoints={[
                      { maxWidth: 980, cols: 3, spacing: "md" },
                      { maxWidth: 755, cols: 1, spacing: "sm" },
                      { maxWidth: 600, cols: 1, spacing: "sm" },
                    ]}
                  >
                    <TextInput
                      mt={20}
                      required
                      label={formdata.district}
                      placeholder={"Colombo"}
                      size="md"
                      {...form.getInputProps("district")}
                    />

                    <TextInput
                      mt={20}
                      required
                      label={formdata.divisionalsecretariat}
                      size="md"
                      placeholder={"Piliyandala"}
                      {...form.getInputProps("DivisionalSecretariat")}
                    />

                    <TextInput
                      mt={20}
                      required
                      label={formdata.villageofficerdomain}
                      size="md"
                      placeholder={"Western"}
                      {...form.getInputProps("VillageOfficerDomain")}
                    />
                  </SimpleGrid>

                  <Group position="right" mt={30}>
                    <Button
                      type="submit"
                      size="md"
                      fullWidth
                      variant="gradient"
                      color="dark"
                      gradient={{
                        from: Appconfig.lightcolor,
                        to: "yellow",
                      }}
                      style={{
                        color: "black",
                      }}
                    >
                      Submit
                    </Button>
                  </Group>
                </form>
              </>
            )}
          </Paper>
        </Container>
      </Container>
    </>
  );
};
