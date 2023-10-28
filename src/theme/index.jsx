const colors = {
  lowBlack: "#4e5860",
  black: "#202020",
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#264653",
  primary: "#2a398f",
  secondary: "#ec1c22",
  green: "green",
  success: "#33CCBB",
  red: "#E76F51",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
  loginLine: "#E9C46A",
}

const spacing = {
  xxs: "0.25rem",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1.25rem",
  lg: "2rem",
  xl: "3.25rem",
  xxl: "5.25rem",
}

const fonts = {
  size: {
    XXXS: "0.5rem",
    XXS: "0.625rem",
    XS: "0.75rem",
    SM: "0.9375rem",
    P0: "1rem",
    P1: "1.125rem",
    P2: "1.25rem",
    P3: "1.5rem",
    P4: "2.25rem",
    P5: "3rem",
    P6: "3.75rem",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  },
  family: {
    stylish: `"Amatic SC", cursive`,
    title: `"BagelFatOne-Regular", cursive`,
    inter: `"Inter-VariableFont", cursive`,
  }
}
const gridUnit = 8
const borderRadius = {
  subtle: 1,
  round: "5px",
  midRound: "10px",
  extraRound: "15px",
  circle: "50%",
}

const shadows = {
  subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.1)",
  medium: "-8px 8px 20px 0px rgb(0 0 0 / 20%)",
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
  orangeHighlight: "0 0 8px 0 rgb(255 154 35 / 100%)",
  leftColumn: "inset 0 0 20px rgba(0, 0, 0, 0.2)",
  cardBasket: "-4px 4px 15px 0 rgba(0 0 0 / 20%)",
  veryStrongWhite: "0px 15px 30px 15px rgba(255, 255, 255, 0.2) inset",
}

const animation = {
  speed: {
    quick: "100ms",
    medium: "300ms",
    slow: "500ms",
    verySlow: "1s",
  }
}

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  spacing,
  animation,
}


