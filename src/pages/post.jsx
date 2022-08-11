import { useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import { Container, Center, Title } from "@mantine/core";
import { TypographyStylesProvider } from "@mantine/core";

const BREAKPOINT = "@media (max-width: 800px)";

export const Post = () => {
  const { slug } = useParams();
  const post = usePost(slug);
  return (
    <>
      {post.isSuccess && (
        <div>
          <img
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              maxWidth: "100%",
            }}
            srcSet={post?.data.header}
            alt="Unable to load the Image"
          />
        </div>
      )}

      <Container size="lg" mt={50}>
        {post.isLoading && (
          <>
            <Center mt={200} mb={200}>
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
                Loading Post...
              </Title>
            </Center>
          </>
        )}
        {post.isError && (
          <>
            <Center mt={200} mb={200}>
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
                {post.error.message}
              </Title>
            </Center>
          </>
        )}
        {post.isSuccess && (
          <>
            <Center>
              <Title
                weight={900}
                mt={10}
                mb={10}
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
                {post.data?.title}
              </Title>
            </Center>

            <Container size="sm" mt={50} mb={180}>
              <TypographyStylesProvider>
                <div dangerouslySetInnerHTML={{ __html: post.data?.body }} />
              </TypographyStylesProvider>
            </Container>
          </>
        )}
      </Container>
    </>
  );
};
