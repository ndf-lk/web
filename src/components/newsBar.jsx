import {
  Title,
  Text,
  Navbar,
  Container,
  Grid,
  MediaQuery,
} from "@mantine/core";
import Marquee from "react-fast-marquee";
import { usePosts } from "../hooks/useNews";
import { LanguageContext } from "../context/userLangctx";
import { useContext, useEffect } from "react";
import { Appconfig } from "../config";
import { Link } from "react-router-dom";

export const NewsBar = ({ isColor = false }) => {
  const { language } = useContext(LanguageContext);
  const posts = usePosts(language);

  let headerColor = isColor ? Appconfig.lightcolor : "#FFFFFF";
  let header_rbg = isColor ? Appconfig.lightcolor_rgb : [255, 255, 255];

  useEffect(() => {
    posts.refetch(language);
  }, [language]);

  const ShowPosts = ({ speed }) => {
    return (
      <Marquee
        speed={speed}
        gradientWidth={100}
        gradientColor={header_rbg}
        pauseOnHover
      >
        {posts.isLoading && <>Loading Posts...</>}
        {posts.isError && <>{posts.error.message}</>}
        {posts.isSuccess && (
          <>
            {posts.data ? (
              <>
                {posts.data.map((post) => {
                  return (
                    <>
                      <Text
                        key={post.slug}
                        component={Link}
                        to={`/post/${post?.slug}`}
                        ml={50}
                        mr={50}
                      >
                        {post?.title}
                      </Text>
                    </>
                  );
                })}
              </>
            ) : (
              <> No posts found.</>
            )}
          </>
        )}
      </Marquee>
    );
  };

  return (
    <>
      <Navbar
        height={40}
        p="xs"
        style={{
          backgroundColor: headerColor,
        }}
      >
        {/* Mobile */}
        <MediaQuery largerThan="lg" styles={{ display: "none" }}>
          <Grid columns={24}>
            <Grid.Col span={3}>
              <Title order={4}>News</Title>
            </Grid.Col>
            <Grid.Col span={20}>
              <ShowPosts speed={30} />
            </Grid.Col>
          </Grid>
        </MediaQuery>

        {/* PC */}
        <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
          <Container
            size="xl"
            style={{
              width: 960,
            }}
          >
            <Grid columns={24}>
              <Grid.Col span={2}>
                <Title order={4}>News</Title>
              </Grid.Col>
              <Grid.Col span={22}>
                <ShowPosts speed={50} />
              </Grid.Col>
            </Grid>
          </Container>
        </MediaQuery>
      </Navbar>
    </>
  );
};
