import React from 'react'
import { Route } from 'react-router-dom'
import { Admin } from '../Page/Admin'

export const AdminRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (
				<Admin>
					<Component {...props}></Component>
				</Admin>
			)}
		></Route>
	)
}
