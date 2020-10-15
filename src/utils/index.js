import jwt from "jsonwebtoken"
export const checktoken = () => {
  const itemToken = localStorage.getItem("token")
  if (!itemToken) return false
  let token = itemToken.split(" ")[1]
  let tokenDecode = jwt.decode(token, process.env.SECRET_JWT)
  if (tokenDecode.iat < Date.now()) {
    return false
  } else {
    let user = {
      username: tokenDecode.username,
    }
    return user
  }
}
