import React, { useState, useContext } from "react";
import {
  AppShell,
  createStyles,
  Container,
  Group,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  Menu,
  Center,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { ApplicationFooter } from "../components/footer/Footer";
import { getLinks } from "../lib/links";
import { ChevronDown } from "tabler-icons-react";
import { LanguageContext } from "../context/userLangctx";

const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      color: "black",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export function AppLayout({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const { language, setLanguage } = useContext(LanguageContext);

  const links = getLinks(language);

  const items = links.map((link) => {
    const menuItems = link?.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <Link to={link.link} onClick={(event) => event.preventDefault()}>
              <Center>
                <span>{link.label}</span>
                <ChevronDown size={12} />
              </Center>
            </Link>
          }
        >
          {menuItems}
        </Menu>
      );
    }
    return (
      <Link key={link.label} to={`${link.link}`} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <AppShell
      padding={0}
      navbar={
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Navbar
            fixed
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Text>Application navbar</Text>
          </Navbar>
        </MediaQuery>
      }
      header={
        <Header height={70} p="md">
          <Container>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Group
                position="apart"
                style={{
                  width: "100%",
                }}
              >
                <Text>Application header</Text>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Group spacing={5}>{items}</Group>
                </MediaQuery>
              </Group>
            </div>
          </Container>
        </Header>
      }
    >
      {children}
      <ApplicationFooter />
    </AppShell>
  );
}
