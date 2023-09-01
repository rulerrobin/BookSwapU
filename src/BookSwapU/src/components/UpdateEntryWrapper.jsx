import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneBook } from './api';
import UpdateEntry from "./UpdateEntry";

function UpdateEntryWrapper(props) {
    const nav = useNavigate()
    const { id } = useParams()
    const [entry, setEntry] = useState({})
    console.log('ID from useParams:', id);

    const userToken = JSON.parse(localStorage.getItem('userInfo'))?.token;

    useEffect(() => { 
      async function fetchEntry() {
        try {
        const fetchedEntry = await getOneBook(id, userToken);
          setEntry(fetchedEntry);
        } catch (error) {
          console.error('Error fetching book details:', error);
        }
      }
      // Invoke the async function
      fetchEntry();
    }, [id, userToken]);

    if (!entry._id) {
      return <div>Error: Entry not found</div>;
  }

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