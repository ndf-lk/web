import {
  Title,
  Navbar,
  Container,
  Grid,
  Anchor,
  MediaQuery,
} from "@mantine/core";
import Marquee from "react-fast-marquee";
import { usePosts } from "../hooks/useNews";
import { LanguageContext } from "../context/userLangctx";
import { useContext } from "react";

export const NewsBar = () => {
  const { language } = useContext(LanguageContext);
  const posts = usePosts(language);

  const ShowPosts = ({ speed }) => {
    return (
      <Marquee speed={speed} gradientWidth={100}>
        {posts.isLoading && <>Loading Posts...</>}
        {posts.isError && <>{posts.error.message}</>}
        {posts.isSuccess && (
          <>
            {posts.data ? (
              <>
                {posts.data.map((post) => {
                  return (
                    <>
                      <Anchor
                        href={`/post/${post?.slug}`}
                        ml={50}
                        mr={50}
                        key={post?.ID}
                      >
                        {post?.title}
                      </Anchor>
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
      <Navbar height={40} p="xs">
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
              width: 900,
            }}
          >
            <Grid columns={24}>
              <Grid.Col span={4}>
                <Title order={4}>News</Title>
              </Grid.Col>
              <Grid.Col span={20}>
                <ShowPosts speed={50} />
              </Grid.Col>
            </Grid>
          </Container>
        </MediaQuery>
      </Navbar>
    </>
  );
};
