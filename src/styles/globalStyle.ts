import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
  }
`;

export default GlobalStyles;
