import * as axios from 'axios'

const instance = axios.create({
  baseURL: `https://api.thecatapi.com/v1/images/search`,
  headers: {
    'x-api-key': 'cf4f9bc6-242b-45ad-bb93-b920df9277f4',
  },
})

export const catApi = {
  getCat() {
    return instance.get().then(response => {
      return response.data
    })
  },
}
