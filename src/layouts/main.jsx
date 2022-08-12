import React, { useState, useContext } from "react";
import {
  Stack,
  Select,
  AppShell,
  Button,
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
import { ChevronDown, HeartHandshake } from "tabler-icons-react";
import { LanguageContext } from "../context/userLangctx";
import { getData } from "../data/getData";
import { AppHero } from "../components/Hero/hero";
import Logo from "../assets/logo.svg";
import BlacandWhiteLogo from "../assets/bandwlogo.svg";

// Layout content
import { AppFooter } from "./footer";
import { NewsBar } from "../components/newsBar";

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
          transitionDuration={1}
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

  const HeaderBtnStuff = () => {
    return (
      <>
        <Button
          size="sm"
          component={Link}
          variant="default"
          to="/join"
          leftIcon={<HeartHandshake size={15} />}
        >
          {pdata?.joinusbtn}
        </Button>
      </>
    );
  };

  const itemsMobile = links.map((link) => {
    return (
      <Link key={link.label} to={`${link.link}`} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  const HeaderComponent = () => {
    // NOTE: removed header padding
    return (
      <>
        <Header
          height={70}
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
                    zIndex: 1000,

                    transitionDelay: 1,
                    transition: "ease-in-out",
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
                <img
                  src={BlacandWhiteLogo}
                  className="App-logo"
                  alt={pdata?.SecondaryTitle}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />

                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Group spacing={5}>
                    {items}
                    <HeaderBtnStuff />
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
            width={{ sm: 200, lg: 300 }}
          >
            <Stack>
              {itemsMobile}

              <HeaderBtnStuff />
            </Stack>
          </Navbar>
        </MediaQuery>
      }
      header={
        <>
          <NewsBar isColor={!showHero} />
          {showHero ? (
            <>
              <AppHero />
            </>
          ) : null}
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
