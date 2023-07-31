import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Login from '@/pages/home'
import Dashboard from '@/pages/homedash'
import { Spinner } from '@/components/ui'
import Prevision from '@/pages/previsoes'
import Product from '@/pages/produtos'
import DetailsCard from '@/pages/DetailsCard'
import DetailsProduct from '@/pages/DetailsProduct'
import ClientDetails from '@/pages/clientdetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Dashboard />
  },
  {
    path: '/previsoes',
    element: <Prevision />
  },
  {
    path: '/product',
    element: <Product />
  },
  {
    path: '/cardpredicoes/:id',
    element: <DetailsCard />
  },
  {
    path: '/produtos/:id',
    element: <DetailsProduct />
  },
  {
    path: '/clientes/:id',
    element: <ClientDetails />
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
