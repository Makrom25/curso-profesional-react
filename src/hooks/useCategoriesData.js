import { useState, useEffect } from 'react'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [covers, setCovers] = useState([])

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-24iykciv5.now.sh/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
        setCovers(data)
      })
  }, [])
  return {
    categories,
    loading,
    covers
  }
}

export { useCategoriesData }
