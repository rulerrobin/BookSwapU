import axiosInstance from "./axiosInstance"

// Fetch all books associated with the currently logged-in user
export async function getUserBooks() {
  try {
    const response = await axiosInstance.get('/books');
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user's books: ${error.message}`);
  }
}

// Fetch details of a specific book using its ID
export async function getOneBook(bookId, token) {
  try {
    const headers = {};

    // If a token is provided, add it to the request headers
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await axiosInstance.get(`/books/${bookId}`, {
      headers: headers
    });

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching one book: ${error.message}`);
  }
}

// Function to get all books from users
export async function getAllBooks(title, author, token) {
  try {
    const params = {}
    if (title) params.title = title;
    if (author) params.author = author;
    const response = await axiosInstance.post('/user_inventory/search', params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request was unsuccessful. Status code: ${response.status}`);
    }
    
  } catch (error) {
    throw new Error(`Error fetching all books: ${error.message}`);
  }
}

// Function to add a new book for the logged-in user
export async function addBookForUser(token, bookData) {
    try {
      const response = await axiosInstance.post("/books", bookData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 201) {
        // Book was successfully added to the backend
        return response.data;
      } else {
        throw new Error("Failed to add book");
      }
    } catch (error) {
      throw new Error(`Error adding book: ${error.message}`);
    }
  }

// Function to remove a book for the logged-in user
export async function removeBookForUser(token, bookId) {
  console.log("Attempting to remove book with ID:", bookId);
  try {
    const response = await axiosInstance.delete(`/books/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response after delete:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error removing book: ${error.message}`);
    throw new Error(`Error removing book: ${error.message}`);
  }
}

// Function to update book details for the logged-in user
export async function updateBook(bookId, updatedBookData, token) {
  try {
      const response = await axiosInstance.put(`/books/${bookId}`, updatedBookData, {
          headers: {
              Authorization: `Bearer ${token}`,
          }
      });
      if (response.status !== 201) {
          throw new Error('Failed to update book');
      }
      return response.data;
  } catch (error) {
      throw new Error(`Error updating book: ${error.message}`);
  }
}


