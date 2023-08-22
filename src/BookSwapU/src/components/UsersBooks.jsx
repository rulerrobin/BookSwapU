import React, { useState } from 'react'
import { Link } from "react-router-dom"
import NewEntry from "./NewEntry"

const UsersBooks = ({ entries, addEntry }) => {
    return (
        <>
        <h2>Users books</h2>
        <ul>
            {entries.map((entry, index) => (
                <li key={index}>
                    <Link to={`/entry/${index}`}>{entry.title} by {entry.author}</Link>
                </li>
            ))}
        </ul>
        <NewEntry addEntry={addEntry} />
        </>
    )
}

export default UsersBooks