import React from 'react'

const ViewNewMovies = ({ text, url }) => {
    return (
        <>
            <a href={url} >
                <p>{text}</p>
            </a>
        </>
    )
}
