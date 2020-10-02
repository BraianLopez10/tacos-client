import axios from 'axios'

const url = 'http://localhost:4000/api/v1'
// PRODUCTOS----------------------------------->
export const getProductos = () => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/producto`)
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export const getProduct = (slug) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/producto/${slug}`)
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export const addProducto = (data) => {
	return new Promise((resolve, reject) => {
		axios({
			url: `${url}/producto`,
			method: 'POST',
			data: data,
			headers: { 'Content-Type': 'multipart/form-data' },
		})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export const updateProducto = (slug, datos) => {
	return new Promise((resolve, reject) => {
		axios
			.put(`${url}/producto`, {
				slug,
				...datos,
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.status)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export const deleteProd = (slug) => {
	return new Promise((resolve, reject) => {
		axios({
			method: 'DELETE',
			url: `${url}/producto`,
			data: {
				slug,
			},
		})
			.then((res) => {
				if (res.status === 200) {
					resolve(res)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}

// COMBOS-------------------------------------->
export const addCombo = (data) => {
	return new Promise((resolve, reject) => {
		axios({
			url: `${url}/combo`,
			data,
			method: 'POST',
			headers: { 'Content-Type': 'multipart/form-data' },
		})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export const getCombos = () => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/combo`)
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export const getCombosBySlug = (slug) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${url}/combo/${slug}`)
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export const updateCombo = (slug, datos) => {
	return new Promise((resolve, reject) => {
		axios
			.put(`${url}/combo`, {
				slug,
				...datos,
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.status)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export const deleteCombo = (slug) => {
	return new Promise((resolve, reject) => {
		axios({
			method: 'DELETE',
			url: `${url}/combo`,
			data: {
				slug,
			},
		})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.status)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export const addPedido = (data) => {
	return new Promise((resolve, reject) => {
		axios({
			url: `${url}/mp`,
			method: 'POST',
			data: { ...data.combo, dataUser: data.dataUser },
			headers: { 'Content-Type': 'application/json' },
		})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data)
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}
