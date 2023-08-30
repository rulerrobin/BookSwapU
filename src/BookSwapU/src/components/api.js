import axiosInstance from "./axiosInstance"

// Function to get books of a specific user
export async function getUserBooks() {
  try {
    const response = await axiosInstance.get('/books');
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user's books: ${error.message}`);
  }
}

// Function to get all books from all users
export async function getAllBooks() {
  try {
    const response = await axiosInstance.get('/user_inventory/search');
    return response.data;
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
export async function updateBook(bookId, updatedBookData) {
  try {
    const response = await axiosInstance.put(`/books/${bookId}`, updatedBookData);
    return response.data;
  } catch (error) {
    throw new Error(`Error updating book: ${error.message}`);
  }
}
