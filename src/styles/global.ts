import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: ${(props) => props.theme['purple-light']};
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme['purple-medium']};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['purple-light']};
}

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme['base-backgroud']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
