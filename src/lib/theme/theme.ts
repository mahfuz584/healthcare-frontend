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
      bgGray?: string;
      tertiary?: string;
      semiBlue?: string;
    };
  }
  interface TypeText {
    semiBlue: string;
    blue: string;
    textWhite: string;
    textGray: string;
  }
}

//custom typography varient types
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3?: true;
    caption1?: true;
    caption2?: true;
    caption3?: true;
    caption4?: true;
    caption5?: true;
  }
}

//custom button variant types
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    btnSecondary?: true;
    btnTertiary?: true;
    btnOutline?: true;
    actionBtn?: true;
    removeBtn?: true;
    acceptBtn?: true;
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
      bgGray: "#f5f5f5",
      semiBlue: "#3f51b5",
    },

    text: {
      primary: "#000",
      secondary: "#fff",
      blue: "#0900a1",
      semiBlue: "#3f51b5",
      textWhite: "#fff",
      textGray: "#0000008a",
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
        {
          props: { variant: "caption2" },
          style: ({ theme }) => ({
            fontFamily: lora.style.fontFamily,
            fontStyle: "normal",
            fontWeight: "600",
            display: "inline-block",
            fontSize: "18px",
            lineHeight: "35px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
            },
          }),
        },
        {
          props: { variant: "caption3" },
          style: ({ theme }) => ({
            fontStyle: "normal",
            fontWeight: "600",
            display: "inline-block",
            fontSize: "18px",
            // lineHeight: "35px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
            },
          }),
        },
        {
          props: { variant: "caption4" },
          style: ({ theme }) => ({
            fontStyle: "normal",
            fontWeight: "400",
            display: "inline-block",
            fontSize: "14px",
            // lineHeight: "35px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
            },
          }),
        },
        {
          props: { variant: "caption5" },
          style: ({ theme }) => ({
            fontStyle: "normal",
            fontWeight: "400",
            display: "inline-block",
            fontSize: "12px",
            // lineHeight: "35px",
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
            borderRadius: "4px",
            border: "1px solid tarnsparent",
            "&:hover": {
              backgroundColor: "#080f58",
            },
          },
        },
        {
          props: { variant: "btnOutline" },
          style: {
            backgroundColor: "#fff",
            color: "#080f58",
            borderRadius: "4px",
            border: "1px solid #080f58",
          },
        },
        {
          props: { variant: "actionBtn" },
          style: {
            color: "#fff",

            backgroundColor: "#062a4d",
            borderRadius: "5px",
            border: "1px solid #062a4d",
            boxShadow: "0px 6px 20px 20px rgba(0, 0, 0, 0.05)",
          },
        },
        {
          props: { variant: "removeBtn" },
          style: {
            color: "#fff",

            backgroundColor: "#da1818",
            borderRadius: "5px",
            border: "1px solid #da1818",
            boxShadow: "0px 6px 20px 20px rgba(0, 0, 0, 0.05)",
          },
        },
        {
          props: { variant: "acceptBtn" },
          style: {
            color: "#fff",

            backgroundColor: "#00c700",
            borderRadius: "5px",
            border: "1px solid #00c700",
            boxShadow: "0px 6px 20px 20px rgba(0, 0, 0, 0.05)",
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            backgroundColor: "#fff",
            color: "#080f58",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 0, 0, 0.12)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid rgba(0, 0, 0, 0.12)", // Border color when focused
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.12)", // Default border color
          },
          "& .MuiInputLabel-root": {
            color: "#080f58", // Default label color
            "&.Mui-focused": {
              color: "#080f58", // Label color when focused
            },
          },
          "& .MuiOutlinedInput-input": {
            padding: "10px",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#080f58",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-notchedOutline": {
            border: "1px solid rgba(0, 0, 0, 0.12)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid rgba(0, 0, 0, 0.12)", // Change hover border color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid rgba(0, 0, 0, 0.12)", // Change focused border color
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#f5f5f5", // Change hover background color for options
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#080f58",
        },
      },
    },
  },
});
