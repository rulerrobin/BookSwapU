import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneBook } from './api';
import UpdateEntry from "./UpdateEntry";

// This is a wrapper component for `UpdateEntry` to fetch data and handle 
// navigation based on the provided entry ID from the URL.
function UpdateEntryWrapper(props) {
  // `useNavigate` hook from react-router-dom to programmatically navigate
    const nav = useNavigate()

    // `useParams` hook to get the ID from the URL 
    const { id } = useParams()

    // State to store the fetched book entry
    const [entry, setEntry] = useState({})

    // Retrieve the user token from local storage
    const userToken = JSON.parse(localStorage.getItem('userInfo'))?.token;

    // Using `useEffect` to trigger side effect: Fetching book details when 
    // component mounts or when `id` or `userToken` changes
    useEffect(() => { 

      // Declaring an async function inside the effect to fetch book details
      async function fetchEntry() {
        try {
          // Using the provided API method to fetch a book by its ID
        const fetchedEntry = await getOneBook(id, userToken);
        // Set the fetched data to the state
          setEntry(fetchedEntry);
        } catch (error) {
          console.error('Error fetching book details:', error);
        }
      }
      // Invoke the async function
      fetchEntry();
    }, [id, userToken]);

    // If the entry hasn't been successfully loaded (i.e., no _id field),
    // show an error message
    if (!entry._id) {
      return <div>Error: Entry not found</div>;
  }

    // Render the `UpdateEntry` component and pass the fetched entry as props.
    // Also, pass a callback to handle the updating of the entry.
    return (
      <UpdateEntry
        entry={entry}
        updateEntry={(updatedInfo) => {
          props.updateEntry(entry._id, updatedInfo)
          nav("/usersbooks")
        }}
      />
    )
  }

  export default UpdateEntryWrapper