import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router'
import RootLayout from './layouts/PrimaryLayout'
import Home from './pages/Home'
import Shop from './Pages/Shop'
import {Provider} from 'react-redux'
import Store from './Redux/Store'
import ProductDetails from './pages/ProductDetails'

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {index: true, Component: Home},
            {path: 'Shop', Component: Shop},
            {path: "product-details/:id", Component: ProductDetails},
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <RouterProvider router={router}/>
    </Provider>
)