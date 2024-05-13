import { useState } from 'react'

const useAPI = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (url, method, body) => {
    try {
      setLoading(true)
      console.log('Intentando hacer la solicitud...')
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }

      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const result = await response.json()
      setData(result)
      setLoading(false)
      console.log('Datos obtenidos:', result)
    } catch (error) {
      setError(error) // Aquí se establece el error capturado
      setLoading(false)
      console.log('Error:', error)
    }
  }

  return { data, loading, error, fetchData }
}

export default useAPI
