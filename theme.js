import { createTheme, virtualColor } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "brand",

  primaryShade: {
    light: 5,
    dark: 4,
  },

  colors: {
    brand: virtualColor({
      name: "brand",
      light: "portfolioGreen",
      dark: "portfolioMint",
    }),

    portfolioGreen: [
      "#edf7f3",
      "#d7eee6",
      "#afdccc",
      "#85c7b0",
      "#63b595",
      "#4e937a",
      "#3f806a",
      "#316654",
      "#234c3f",
      "#143329",
    ],

    portfolioMint: [
      "#effaf6",
      "#d8f3e8",
      "#b4e6d3",
      "#8ed8bd",
      "#6fcdaa",
      "#57c49b",
      "#43a982",
      "#338767",
      "#24644d",
      "#164234",
    ],

    terracotta: [
      "#fff4ed",
      "#fce4d6",
      "#f5c5aa",
      "#eca37a",
      "#e58654",
      "#d88c60",
      "#bd6d43",
      "#975434",
      "#713d25",
      "#4d2717",
    ],
  },

  fontFamily: "Geist, Inter, system-ui, sans-serif",

  headings: {
    fontFamily: "Geist, Inter, system-ui, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: {
        fontSize: "clamp(2.5rem, 6vw, 5rem)",
        lineHeight: "1",
      },
      h2: {
        fontSize: "clamp(2rem, 4vw, 3rem)",
        lineHeight: "1.1",
      },
    },
  },

  defaultRadius: "md",
  autoContrast: true,

  components: {
    Button: {
      defaultProps: {
        radius: "md",
      },
    },

    Card: {
      defaultProps: {
        radius: "lg",
        shadow: "sm",
      },
    },
  },
});
