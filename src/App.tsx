import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Router } from './Router'
import { CartContextProvider } from './contexts/Cart'
import { AddressContextProvider } from './contexts/Address'
import { ToastContainer } from 'react-toastify'
import { PaymentContextProvider } from './contexts/Payment'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <AddressContextProvider>
            <PaymentContextProvider>
              <ToastContainer />
              <Router />
            </PaymentContextProvider>
          </AddressContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
