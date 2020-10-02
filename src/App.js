import React from 'react'
import { Home } from './Components/Home'
import { SectionRoute } from './Routes/SectionRoute'
import { AdminRoute } from './Routes/AdminRoute'
import { Switch } from 'react-router-dom'
import './app.scss'
import { PedidoWithContext } from './Components/PedidoCombo'
import { Carrito } from './Components/Carrito'
// ADMIN
import { Combos as ComboAdmin } from './Components/Admin/Combos'
import { Pedidos } from './Components/Admin/Pedidos'
import { Productos } from './Components/Admin/Producto'
import { Login } from './Components/Admin/Login'
import { Edit } from './Components/Admin/Producto/Edit'
import { Combos } from './Components/Combo/'
import { EditCombo } from './Components/Admin/Combos/Edit'
function App() {
	return (
		<div className='App'>
			<Switch>
				<AdminRoute path='/admin' exact component={Login}></AdminRoute>
				<AdminRoute path='/admin/combos/:slug' exact component={EditCombo} />
				<AdminRoute path='/admin/combos' exact component={ComboAdmin} />
				<AdminRoute path='/admin/pedidos' exact component={Pedidos} />
				<SectionRoute path='/combo/:id' exact component={PedidoWithContext} />
				<SectionRoute
					path='/combos'
					exact
					component={Combos}
					title='Nuestros Combos'
				/>
				<SectionRoute path='/carrito' exact component={Carrito} />
				<SectionRoute path='/carrito/:state' exact component={Carrito} />
				<SectionRoute path='/' exact component={Home} />
				<AdminRoute path='/admin/productos/:slug' exacts component={Edit} />
				<AdminRoute path='/admin/productos' exacts component={Productos} />
			</Switch>
		</div>
	)
}

export default App
