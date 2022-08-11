import React from "react";
import {
  createStyles,
  ThemeIcon,
  Text,
  Group,
  SimpleGrid,
  Box,
} from "@mantine/core";
import {
  Sun,
  Phone,
  MapPin,
  At,
  BrandFacebook,
  BrandInstagram,
} from "tabler-icons-react";
import { Appconfig } from "../config";
import socials from "../data/socials.json";

const useStyles = createStyles((theme, { variant }) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundColor: Appconfig.lightcolor,
  },

  title: {
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white,
  },
}));

function ContactIcon({
  icon: Icon,
  title,
  description,
  link,
  variant = "gradient",
  className,
  ...others
}) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} color={"black"} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description} component={"a"} href={link}>
          {description}
        </Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  {
    title: "Email",
    description: socials.email,
    icon: At,
    link: `mailto:${socials.email}`,
  },
  {
    title: "Address",
    description: "No. 19/1A, Kolamunna Medapatha Road, Piliyandala",
    icon: MapPin,
    link: "#",
  },

  {
    title: "Facebook",
    description: "/NationalDemocraticFront.lk",
    icon: BrandFacebook,

    link: socials.fb,
  },
  {
    title: "Instagram",
    description: "/nationaldemocraticfront.lk",
    icon: BrandInstagram,
    link: socials.ig,
  },
];

export function ContactIconsList({ data = MOCKDATA, variant }) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Group direction="column">{items}</Group>;
}

export function ContactIcons() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}
