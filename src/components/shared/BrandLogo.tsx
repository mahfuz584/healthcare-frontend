import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BrandLogo = ({ color, text }: { color: string; text: boolean }) => {
  return (
    <Stack
      component={Link}
      href="/"
      alignItems="center"
      direction="row"
      sx={{
        py: 2,
        "& img": {
          width: "80px",
          height: "80px",
          objectFit: "cover",
        },
      }}
    >
      <Image
        src="/images/brandlogo.png"
        alt="brand-logo"
        width={1000}
        height={1000}
        priority
        sizes="max-width: 100% min-width: 100%"
      />
      <Typography
        variant="h4"
        sx={{
          color: color,
          pb: 2,
        }}
      >
        {text && "MEDIFAX"}
      </Typography>
    </Stack>
    // </Link>
  );
};

export default BrandLogo;
