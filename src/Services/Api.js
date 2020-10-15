import axios from "axios"
if (localStorage.getItem("token")) {
  const token = localStorage.getItem("token")
  axios.defaults.headers.common["Authorization"] = token
}
const url = "http://192.168.0.75:4000/api/v1"
// PRODUCTOS----------------------------------->
export const getProductos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/producto`)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.body)
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
          resolve(response.data.body)
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
      method: "POST",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.body)
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
      .patch(`${url}/producto`, {
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
      method: "DELETE",
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
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.body)
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
          resolve(response.data.body)
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
          resolve(response.data.body)
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
      .patch(`${url}/combo`, {
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
      method: "DELETE",
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
// PEDIDOS-------------------------------------->
export const addPedido = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/payment`,
      method: "POST",
      data: { ...data.combo, dataUser: data.dataUser },
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.body)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const getAllPedidos = () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/pedido`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.body)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${url}/auth/login`,
      data: {
        ...data,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export const lostpass = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      data: {
        ...data,
      },
      url: `${url}/auth/lostpass`,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => reject(err))
  })
}
