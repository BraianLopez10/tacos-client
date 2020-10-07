import React from "react"
import { Home } from "./Page/Home"
import { SectionRoute } from "./Routes/SectionRoute"
import { AdminRoute } from "./Routes/AdminRoute"
import { Switch } from "react-router-dom"
import "./app.scss"
import { PedidoWithContext } from "./Page/Pedido-combo"
import { Carrito } from "./Page/Carrito"
// ADMIN
import { Combos as ComboAdmin } from "./Page/Combos-admin"
import { Pedidos } from "./Page/Pedido-admin"
import { Productos } from "./Page/Producto-admin"
import { Login } from "./Page/Login"
import { Edit } from "./Page/Edit-producto"
import { PageCombos } from "./Page/Combos"
import { EditCombo } from "./Page/Edit-combo"
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
          component={PageCombos}
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
