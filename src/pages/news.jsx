import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/userLangctx";
import { usePosts } from "../hooks/useNews";
import { Container, Title, Center } from "@mantine/core";
import { IconShare } from "@tabler/icons";
import { stripHtml } from "string-strip-html";
import { useClipboard } from "@mantine/hooks";
import { getData } from "../data/getData";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Group,
  createStyles,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { Appconfig } from "../config";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

export const News = () => {
  const { classes, cx, theme } = useStyles();
  const { language, setLanguage } = useContext(LanguageContext);
  const posts = usePosts(language);
  const pdata = getData(language);
  const clipboard = useClipboard({ timeout: 500 });

  const BREAKPOINT = "@media (maxWidth: 800px)";

  useEffect(() => {
    posts.refetch(language);
  }, [language]);

  return (
    <>
      <Container size="lg" mt={30}>
        <Center>
          <Title
            weight={900}
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
            {pdata?.newstitle}
          </Title>
        </Center>

        <Container size="sm" mt={50}>
          {posts.isLoading && <p>Loading Posts...</p>}
          {posts.isError && <p>{posts.error.message}</p>}
          {posts.isSuccess && (
            <>
              {posts.data ? (
                <>
                  {posts?.data.length > 0 ? (
                    <>
                      {posts.data.map((post) => {
                        return (
                          <>
                            <Card withBorder radius="md" mb={30} key={post?.ID}>
                              <Card.Section>
                                <Image
                                  src={post?.header}
                                  height={120}
                                  alt={post?.title}
                                />
                              </Card.Section>

                              <Text
                                className={classes.title}
                                weight={900}
                                size="xl"
                                component={Link}
                                to={`/post/${post?.slug}`}
                              >
                                {post?.title}
                              </Text>

                              <Text size="sm" color="dimmed" lineClamp={4}>
                                {stripHtml(post?.body).result}
                              </Text>

                              <Group
                                position="right"
                                className={classes.footer}
                              >
                                <Group spacing={8} mr={0}>
                                  <ActionIcon
                                    color={clipboard.copied ? "teal" : "blue"}
                                    className={classes.action}
                                    onClick={() =>
                                      clipboard.copy(
                                        `${Appconfig.frontendUrl}post/${post?.slug}`
                                      )
                                    }
                                  >
                                    <IconShare size={16} />
                                  </ActionIcon>
                                </Group>
                              </Group>
                            </Card>
                          </>
                        );
                      })}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          )}
        </Container>
      </Container>
    </>
  );
};
