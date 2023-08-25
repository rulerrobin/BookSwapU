export async function getAllBooksByCriteria(title, author) {
    try {
      const response = await fetch(
        `http://localhost:3000/user_inventory/search?title=${title}&author=${author}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(`Error searching books" ${errorResponse.error}`)
      }
  
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error(`Error fetching data from the server: ${error.message}`)
    }
  }