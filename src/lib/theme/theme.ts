"use client";

import { createTheme } from "@mui/material/styles";
import { Lora, Roboto } from "next/font/google";
//font import

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin-ext"],
});

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

//custom palette types
declare module "@mui/material/styles" {
  // interface Palette {
  //   bg: {
  //     aliceBlue: string;
  //     tertiary: string;
  //   };
  // }
  interface PaletteOptions {
    bg?: {
      aliceBlue?: string;
      tertiary?: string;
    };
  }
  interface TypeText {
    blue: string;
    textWhite: string;
  }
}

//custom typography varient types
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3?: true;
    caption1?: true;
    caption2?: true;
  }
}

//custom button variant types
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    btnSecondary?: true;
    btnTertiary?: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },

  //by default the font will be got
  typography: {
    fontFamily: roboto.style.fontFamily,
  },

  palette: {
    primary: {
      main: "#031D36",
    },
    secondary: {
      main: "#061729",
    },

    bg: {
      aliceBlue: "#ECF6FF",
      tertiary: "#080f58",
    },

    text: {
      primary: "#000",
      secondary: "#fff",
      blue: "#0900a1",
      textWhite: "#fff",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#fff",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",

          // Set core root defaults
          "& html:focus-within": { scrollBehavior: "smooth" },
          "h1,h2,h3,h4,h5,h6,p": {
            margin: "0 !important",
          },

          // scrollbar
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            background: "#fff",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            background: "#000334",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-track:hover, & *::-webkit-scrollbar-track:hover":
            {
              background: "#fff",
            },
          "&::-selection, & *::-selection": {
            backgroundColor: "gray",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h1: ({ theme }) => ({
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "74px",
          lineHeight: "65px",
          [theme.breakpoints.down("md")]: {
            fontSize: "60px",
          },
        }),
        h2: ({ theme }) => ({
          fontStyle: "normal",
          fontFamily: lora.style.fontFamily,
          fontWeight: "700",
          fontSize: "60px",
          lineHeight: "52px",
          color: "#000",
          [theme.breakpoints.down("md")]: {
            fontSize: "50px",
          },
        }),
        h3: ({ theme }) => ({
          fontStyle: "normal",
          fontFamily: lora.style.fontFamily,
          fontWeight: "700",
          fontSize: "45px",
          lineHeight: "55px",
          color: "#000",
          [theme.breakpoints.down("md")]: {
            fontSize: "50px",
          },
        }),
        h4: ({ theme }) => ({
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "34px",
          lineHeight: "45px",

          [theme.breakpoints.down("md")]: {
            fontSize: "25px",
          },
        }),
        h5: ({ theme }) => ({
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "20px",

          lineHeight: "30px",

          [theme.breakpoints.down("md")]: {
            fontSize: "20px",
          },
        }),
        body2: ({ theme }) => ({
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "25px",
          fontFamily: lora.style.fontFamily,

          color: "#000",
          [theme.breakpoints.down("md")]: {
            fontSize: "16px",
          },
        }),
      },
      variants: [
        {
          props: { variant: "body3" },
          style: ({ theme }) => ({
            fontFamily: lora.style.fontFamily,
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
            },
          }),
        },
        {
          props: { variant: "caption1" },
          style: ({ theme }) => ({
            fontFamily: lora.style.fontFamily,
            fontStyle: "normal",
            fontWeight: "400",
            display: "inline-block",
            fontSize: "25px",
            lineHeight: "35px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
            },
          }),
        },
      ],
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          backgroundColor: "#080f58",
          color: "#fff",
          fontWeight: 500,
          borderRadius: "20px",
        },
      },
      variants: [
        {
          props: { variant: "btnSecondary" },
          style: {
            backgroundColor: "#8686ff",
            color: "#fff",
            border: "1px solid #8686ff",
            "&:hover": {
              backgroundColor: "#6767c8",
            },
          },
        },
        {
          props: { variant: "btnTertiary" },
          style: {
            backgroundColor: "#080f58",
            color: "#fff",
            borderRadius: "2px",
            border: "1px solid tarnsparent",
            "&:hover": {
              backgroundColor: "#080f58",
            },
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "0px !important",
          [theme.breakpoints.up("xs")]: {
            maxWidth: "96%",
          },
          [theme.breakpoints.up("md")]: {
            maxWidth: "93%",
          },
          [theme.breakpoints.up("xl")]: {
            maxWidth: "93%",
          },
        }),
      },
    },
  },
});
