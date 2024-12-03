import { Container, Grid2 } from "@mui/material";
import LeftPart from "./Hero/LeftPart";
import RightPart from "./Hero/RightPart";

const Hero = () => {
  return (
    <Container>
      <Grid2 justifyContent={"space-between"} alignItems={"end"} container>
        <LeftPart />
        <RightPart />
      </Grid2>
    </Container>
  );
};

export default Hero;
