import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { PageCheckout } from './pages/Checkout'
import { PageHome } from './pages/Home'
import { PageSuccess } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PageHome />} />
        <Route path="/checkout" element={<PageCheckout />} />
        <Route path="/success" element={<PageSuccess />} />
      </Route>
    </Routes>
  )
}
