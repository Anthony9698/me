import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "portfolioGreen",

  colors: {
    portfolioGreen: [
      "#edf7f3",
      "#d7eee6",
      "#afdccc",
      "#85c7b0",
      "#63b595",
      "#4E937A",
      "#3f806a",
      "#316654",
      "#234c3f",
      "#143329",
    ],

    terracotta: [
      "#fff4ed",
      "#fce4d6",
      "#f5c5aa",
      "#eca37a",
      "#e58654",
      "#D88C60",
      "#bd6d43",
      "#975434",
      "#713d25",
      "#4d2717",
    ],

    warmGray: [
      "#f8f6f2",
      "#eeeae3",
      "#ddd6ca",
      "#c9beb0",
      "#b3a495",
      "#978878",
      "#776a5e",
      "#5d534a",
      "#433c36",
      "#2b2723",
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
