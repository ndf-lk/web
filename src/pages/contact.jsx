import React from "react";
import {
  createStyles,
  Container,
  Text,
  Title,
  TextInput,
  Textarea,
  Button,
  Group,
} from "@mantine/core";
import { ContactIconsList } from "../components/ContactIcons";
import { LanguageContext } from "../context/userLangctx";
import { useContext } from "react";
import { getData } from "../data/getData";
import { useLocalStorage } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (maxWidth: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  description: {
    maxWidth: 300,

    [`@media (maxWidth: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.sm,
    borderRadius: theme.radius.md,
    border: "1px solid black",
    marginTop: 50,
  },

  social: {
    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

export function ContactUs() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { classes } = useStyles();
  const pdata = getData(language);
  const [formSubmitted, setFromSubmitted] = useLocalStorage({
    key: "from-submitted",
    defaultValue: false,
  });

  const submitFrom = () => {
    setFromSubmitted(true);
  };

  return (
    <>
      <Container mt={50} mb={90}>
        <div>
          <Title className={classes.title}>{pdata?.contactus}</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            {pdata?.contactdescription}
          </Text>

          <ContactIconsList />
        </div>
        <div className={classes.form}>
          {formSubmitted ? (
            <>
              <Title className={classes.title} mb={20}>
                {pdata?.submitform}
              </Title>

              <Text className={classes.description} mt="sm" mb={30}>
                {pdata?.submitformdesc}
              </Text>

              <Button variant="default" onClick={() => setFromSubmitted(false)}>
                submit abother respose
              </Button>
            </>
          ) : (
            <>
              <Title className={classes.title} mb={20}>
                {pdata?.sendamessage}
              </Title>
              <TextInput
                label={pdata?.msgform[0]}
                placeholder="your@email.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label={pdata?.msgform[1]}
                placeholder="John Doe"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                required
                label={pdata?.msgform[2]}
                placeholder="I want to talk about..."
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />

              <Group position="right" mt="md">
                <Button
                  variant="default"
                  radius="md"
                  size="md"
                  onClick={() => setFromSubmitted(true)}
                >
                  {pdata?.sendmsg}
                </Button>
              </Group>
            </>
          )}
        </div>
      </Container>
    </>
  );
}

{
  /* 
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >

        </SimpleGrid>
*/
}
