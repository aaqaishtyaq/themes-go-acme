export interface BasicColor {
  primary: string
  editor: string
  selection: string
  text: string
  shadow: string
  inactive: string
  hint: string
  error: string
}

export const goPlaygroundColors: BasicColor = {
  primary: "#eaffff",
  editor: "#FFFFDD",
  selection: "#B2D7F0",
  text: "#000000",
  shadow: "#99994c",
  inactive: "#D4D4C6",
  hint: "#8888cc",
  error: "#db6165",
}

export const goSourceColors: BasicColor = {
  primary: "#EFEFEF",
  editor: "#EFEFEF",
  selection: "#B2D7F0",
  text: "#000000",
  shadow: "#D4D4C6",
  inactive: "#D4D4C6",
  hint: "#8888cc",
  error: "#db6165",
}

export const acmeColors: BasicColor = {
  primary: "#eaffff",
  editor: "#ffffea",
  selection: "#eeee9e",
  text: "#000000",
  shadow: "#99994c",
  inactive: "#eeee9e",
  hint: "#8888cc",
  error: "#db6165",
}

export function getColors(theme): BasicColor {
  switch (theme) {
    case "acme":
      return acmeColors;
    case "go-playground":
      return goPlaygroundColors;
    case "go-source":
      return goSourceColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}
