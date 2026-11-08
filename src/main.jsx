import { createRoot } from 'react-dom/client'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'

import Catalog from './pages/catalog'
import Cart from './pages/cart'
import Contact from './pages/contact'
import About from './pages/about'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
	<CartProvider>
		<Router>
			<Routes>
				<Route path='/' element={<Navigate to='/catalog' replace />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</Router>
	</CartProvider>
)
