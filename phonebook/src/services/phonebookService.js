import axios from "axios"
const baseURL = "http://localhost:3001/persons"

const getALL = () =>{
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseURL, newObject)
  return request.then(response => response.data)
}

const removeNumber = id =>{
  const request = axios.delete(`${baseURL}/${id}`)
  return request.then(response => response.data)
}

const replace = (id, data) =>{
  const request = axios.put(`${baseURL}/${id}`, data)
  return request.then(response => response.data)
}

export default {getALL, create, removeNumber, replace}