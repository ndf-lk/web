import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

export const IndexPage = () => {
  return (
    <>
      <Button component={Link} to={"/home/en"}>
        {" "}
        English
      </Button>
      <Button component={Link} to={"/home/si"}>
        {" "}
        Sinhala
      </Button>
      <Button component={Link} to={"/home/tm"}>
        {" "}
        Taiml
      </Button>
    </>
  );
};
