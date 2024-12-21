"use client";
import { TChooseUsProps } from "@/types/pageProps";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import Child from "./Child";

const WhyChooseUs: React.FC<TChooseUsProps> = ({ chooseUsContent }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <Container
      ref={ref}
      sx={{
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box>
        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderRightWidth: "3px",
              borderColor: "text.blue",
            }}
          />
          <Typography
            className="top-doctors-title"
            variant="caption1"
            sx={{
              fontWeight: "bold",
              pl: 1,
            }}
          >
            Why Choose Us
          </Typography>
        </Stack>
      </Box>
      {chooseUsContent?.map((content, idx) => {
        const targetScale = 1 - (chooseUsContent?.length - idx) * 0.02;
        return (
          <Child
            key={idx}
            content={content}
            idx={idx}
            target={targetScale}
            progress={scrollYProgress}
            range={[idx * 0.25, 1]}
          />
        );
      })}
    </Container>
  );
};

export default WhyChooseUs;
