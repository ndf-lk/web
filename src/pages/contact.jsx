import React from "react";
import {
  createStyles,
  Container,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
} from "@mantine/core";
import { ContactIconsList } from "../components/ContactIcons";
import { JoinusSection } from "../components/joinUs";
import { useParams } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  description: {
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    border: "1px solid black",
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
  const { classes } = useStyles();
  let { lang } = useParams();

  return (
    <>
      <Container mt={50} mb={90}>
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>

            <ContactIconsList />
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to talk about..."
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button variant="default" radius="md" size="md">
                Send message
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </Container>
      <JoinusSection lang={lang} />
    </>
  );
}
