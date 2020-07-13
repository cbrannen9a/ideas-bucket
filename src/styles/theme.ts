import { DefaultTheme } from "styled-components";

const theme: Theme = {
  main: {
    primary: { bg: "#ffdd57", fg: "black" },
    secondary: { bg: "#23d160", fg: "white" },
  },
  alert: {
    info: { bg: "#209cee", fg: "white" },
    warn: { bg: "#ffdd57", fg: "black" },
    error: { bg: "#ff3860", fg: "white" },
    success: { bg: "#23d160", fg: "white" },
  },
};

interface Theme extends DefaultTheme {
  main: Record<string, Colour>;
  alert: Record<string, Colour>;
}

type Colour = {
  fg: string;
  bg: string;
};

export const themeColourHelper = ({
  type,
  value,
}: {
  type: keyof Theme;
  value: string;
}) => {
  return theme[type][value.toLowerCase()];
};

export default theme;
