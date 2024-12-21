import { css, createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const styles = css`
  *:where(
      :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)
    ) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a,
  button {
    cursor: revert;
  }

  ol,
  ul,
  menu {
    list-style: none;
  }

  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  table {
    border-collapse: collapse;
  }

  input,
  textarea {
    -webkit-user-select: auto;
  }

  textarea {
    white-space: revert;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  pre {
    all: revert;
  }

  ::placeholder {
    color: unset;
  }

  ::marker {
    content: initial;
  }

  :where([hidden]) {
    display: none;
  }

  :where([contenteditable]:not([contenteditable='false'])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  :where([draggable='true']) {
    -webkit-user-drag: element;
  }

  :where(dialog:modal) {
    all: revert;
  }

  html,
  body {
    font-size: 16px;
    height: 100%;
  }

  body {
    line-height: 1.4;
    margin: 0;
    text-rendering: optimizeLegibility;
    word-wrap: break-word;
  }

  #root {
    height: 100%;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const AppStyle = createGlobalStyle`
  ${styles}

  body {
    font-family: ${theme.fontFamily.primary};
  }
`
