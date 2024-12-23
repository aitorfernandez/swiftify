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

type FontWeight = {
  light: number
  regular: number
  bold: number
  extrabold: number
}

const fontWeight: FontWeight = {
  light: 400,
  regular: 600,
  bold: 700,
  extrabold: 800,
}

type FontSize = string[]

const fontSize: FontSize = [
  '10px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '32px',
  '40px',
  '48px',
  '56px',
  '84px',
]

type Radii = string[]

const radii: Radii = ['0', '8px', '16px', '24px', '100px']

type Color = {
  primary: string[]
  background: string[]
  white: string[]
}

const color: Color = {
  primary: ['#797bff'],
  background: ['#212148', '#252651'],
  white: [
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.25)',
    'rgba(255, 255, 255, 0.5)',
    'rgba(255, 255, 255, 0.75)',
    'rgba(255, 255, 255, 1)',
  ],
}

type Theme = {
  fontFamily: FontFamily
  fontWeight: FontWeight
  fontSize: FontSize
  color: Color
  radii: Radii
}

export const theme: Theme = {
  fontFamily,
  fontWeight,
  fontSize,
  color,
  radii,
}
