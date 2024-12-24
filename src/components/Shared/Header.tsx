"use client";
import { navItems } from "@helper/navOptions";
import { Container, Divider, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const AuthBtn = dynamic(() => import("@/components/ui/lazyBtn"), {
    ssr: false,
  });
  return (
    <Container
      sx={{
        mb: 5,
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
          px: 4,
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          component={Link}
          href="/"
          sx={{
            mt: 1,
            position: "relative",
          }}
        >
          <Image
            width={90}
            height={90}
            style={{
              objectFit: "cover",
              borderRadius: "100%",
            }}
            src="/images/brandlogo.png"
            alt="brand-logo"
            priority
          />
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              position: "absolute",
              left: "90%",
              top: "20%",
            }}
          >
            MEDIFAX
          </Typography>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={3}
        >
          {navItems?.map(({ url, title }, idx) => {
            return (
              <Typography
                variant="body3"
                component={Link}
                href={url}
                key={idx}
                sx={{
                  fontWeight: 600,
                }}
              >
                {title}
              </Typography>
            );
          })}
        </Stack>
        <AuthBtn />
      </Stack>
    </Container>
  );
};

export default Header;
