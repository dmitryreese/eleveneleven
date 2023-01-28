const BASE_URL = 'https://api.npoint.io'

const apiFactory = (baseUrl: string) => ({
  get: async (url: string) => {
    const response = await fetch(`${baseUrl}${url}`)
    return await response.json()
  }
})

export const api = apiFactory(BASE_URL)
