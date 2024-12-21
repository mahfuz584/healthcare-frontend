"use client";
import { TChooseUsObjProps } from "@/types/pageProps";
import { Box, Grid2, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
type TProps = {
  content: TChooseUsObjProps;
  idx: number;
  range: [number, number];
  target: number;
  progress: any;
};

const Child: React.FC<TProps> = ({ content, idx, range, target, progress }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale2 = useTransform(progress, range, [1, target]);

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        position: "sticky",
        top: `calc(4% + ${idx * 20}px)`,
        py: 8,
      }}
    >
      <motion.div style={{ scale: scale2 }}>
        <Grid2
          container
          sx={{
            justifyContent: "space-between",
            alignItems: "stretch",
            px: 8,
            py: 6,
            bgcolor: "#fff",
            borderRadius: "10px",
            border: "1px solid #E5E5E5",
          }}
        >
          <Grid2
            size={{
              lg: 5.8,
              md: 6,
              xs: 12,
            }}
            sx={{
              bgcolor: "#fff",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h5">{content.title}</Typography>
            <Typography variant="body1">{content.description}</Typography>
          </Grid2>
          <Grid2
            size={{
              lg: 5.8,
              md: 6,
              xs: 12,
            }}
          >
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "10px",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <motion.div
                style={{
                  scale: scale,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={content.img}
                  alt={content.title}
                  height={1000}
                  width={1000}
                  priority
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </motion.div>
            </Box>
          </Grid2>
        </Grid2>
      </motion.div>
    </Box>
  );
};

export default Child;
