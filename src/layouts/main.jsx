import React, { useState, useContext } from "react";

import {
  Stack,
  Anchor,
  Select,
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
import { getLinks } from "../lib/links";
import { ChevronDown } from "tabler-icons-react";
import { LanguageContext } from "../context/userLangctx";
import { getData } from "../data/getData";
import { AppHero } from "../components/Hero/hero";

// Layout content
import { AppFooter } from "./footer";

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

export function AppLayout({ children, showHero = false }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const { language, setLanguage } = useContext(LanguageContext);
  const pdata = getData(language);

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

  const itemsMobile = links.map((link) => {
    return (
      <Link key={link.label} to={`${link.link}`} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  const HeaderComponent = () => {
    return (
      <>
        <Header
          height={70}
          p="md"
          style={{
            position: "sticky",
          }}
        >
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
                  style={{
                    zIndex: 999,
                  }}
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
                <Text weight={1000} component={Link} to="/home">
                  {pdata?.SecondaryTitle}
                </Text>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Group spacing={5}>
                    {items}
                    <Select
                      size="xs"
                      value={language}
                      onChange={setLanguage}
                      style={{
                        width: 80,
                      }}
                      data={[
                        { value: "en", label: "English" },
                        { value: "si", label: "සිංහල" },
                        { value: "tm", label: "தமிழ்" },
                      ]}
                    />
                  </Group>
                </MediaQuery>
              </Group>
            </div>
          </Container>
        </Header>
      </>
    );
  };

  return (
    <AppShell
      padding={0}
      navbar={
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            fixed
            width={{ sm: 200, lg: 300 }}
          >
            {/*  Mobile Nav Bar Items */}
            <Stack>
              {itemsMobile}
              <Select
                size="xs"
                value={language}
                onChange={setLanguage}
                style={{
                  width: 80,
                }}
                data={[
                  { value: "en", label: "English" },
                  { value: "si", label: "සිංහල" },
                  { value: "tm", label: "தமிழ்" },
                ]}
              />
            </Stack>
          </Navbar>
        </MediaQuery>
      }
      header={
        <>
          {showHero ? <AppHero /> : null}
          <HeaderComponent />
        </>
      }
      footer={
        <>
          <AppFooter />
        </>
      }
    >
      {children}
    </AppShell>
  );
}
