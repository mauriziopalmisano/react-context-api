import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Prodotti from './pages/Prodotti'
import ChiSiamo from './pages/ChiSiamo'
import MainLayout from './layout/mainLayout'
import Prodotto from './pages/Prodotto'
import { BudgetProvider } from './contexts/BudgetContext'


function App() {


  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path='prodotti' element={<Prodotti />} />
              <Route path='chi_siamo' element={<ChiSiamo />} />
              <Route path='prodotti/:idProdotto' element={<Prodotto />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App
