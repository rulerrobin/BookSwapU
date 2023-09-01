import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBookForUser } from './api';

const NewEntry = () => {
  // Using navigate to programmatically change routes
  const navigate = useNavigate();

  // State variables for holding form input values
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [condition, setCondition] = useState('');
  const [status, setStatus] = useState('');
  const [edition, setEdition] = useState('');
  const [year, setYear] = useState('');

  // Function to handle the form submission
  const submit = async (e) => {
    e.preventDefault();

    try {
      const token = JSON.parse(localStorage.getItem("userInfo")).token;

      // Check if token exists
      if (!token) {
        throw new Error("User not authenticated");
      }

      // Constructing the book data object from state values
      const newBookData = {
        title,
        author,
        condition,
        status,
        edition,
        year,
      };

      // Making an API call to add the book for the user
      await addBookForUser(token, newBookData);

      // Clear form fields
      setTitle('');
      setAuthor('');
      setCondition('');
      setStatus('');
      setEdition('');
      setYear('');

      // Navigate to the user's books page
      navigate('/usersbooks');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };


    return (
        <>
          <h5>Add New Book</h5>
          <form className="container" onSubmit={submit}>
            <div>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div>
          <input
            type="text"
            placeholder="Condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Edition"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Save
        </button>
          </form>
        </>
      )
    }

export default NewEntry