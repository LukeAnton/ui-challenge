// Netfront Colors
export const $white = "#ffffff";
export const $grey = "#E1E1E1";
export const $black = "#000000";
export const $offBlack = "#2A2E2F";
export const $starYellow = "#D8E022";
export const $published = "#50BD9C";
export const $unpublished = "#E25169";
export const $gradient1 = "#50BD9C";
export const $gradient2 = "#D8E022";

// Device sizes
const deviceSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(max-width: ${deviceSize.mobileS})`,
  mobileM: `(max-width: ${deviceSize.mobileM})`,
  mobileL: `(max-width: ${deviceSize.mobileL})`,
  tablet: `(max-width: ${deviceSize.tablet})`,
  laptop: `(min-width: ${deviceSize.laptop})`,
  laptopL: `(min-width: ${deviceSize.laptopL})`,
  desktop: `(min-width: ${deviceSize.desktop})`,
  desktopL: `(min-width: ${deviceSize.desktop})`,
};

// App grid breakpoints
const gridSize = {
  oneBox: "653px",
  twoBox: "960px",
  threeBox: "1270px",
  fourBox: "1575px",
  fiveBox: "1890px",
};

export const grid = {
  oneBox: `(max-width: ${gridSize.oneBox})`,
  twoBox: `(max-width: ${gridSize.twoBox})`,
  threeBox: `(max-width: ${gridSize.threeBox})`,
  fourBox: `(max-width: ${gridSize.fourBox})`,
  fiveBox: `(min-width: ${gridSize.fiveBox})`,
};
