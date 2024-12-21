function fontStack(fonts: string[]) {
  return fonts.map((f: string) => (f.includes(' ') ? `"${f}"` : f)).join(', ')
}

type FontFamily = {
  primary: string
  secondary: string
}

const fontFamily: FontFamily = {
  primary: fontStack(['Open Sans', 'sans-serif']),
  secondary: fontStack(['Roboto', 'sans-serif']),
}

type Theme = {
  fontFamily: FontFamily
}

export const theme: Theme = {
  fontFamily,
}
