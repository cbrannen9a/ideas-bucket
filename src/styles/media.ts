const customMediaMaxQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;
const customMediaMinQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

/**
 * Media
 */
export const media = {
  minXXSmall: customMediaMinQuery(0),
  minXSmall: customMediaMinQuery(320),
  minSmall: customMediaMinQuery(480),
  minMedium: customMediaMinQuery(768),
  minLarge: customMediaMinQuery(900),
  minXLarge: customMediaMinQuery(1024),
  minXXLarge: customMediaMinQuery(1200),

  maxXXSmall: customMediaMaxQuery(319),
  maxXSmall: customMediaMaxQuery(479),
  maxSmall: customMediaMaxQuery(767),
  maxMedium: customMediaMaxQuery(899),
  maxLarge: customMediaMaxQuery(1023),
  maxXLarge: customMediaMaxQuery(1199),
};

export default media;
