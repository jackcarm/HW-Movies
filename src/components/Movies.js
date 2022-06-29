import React from 'react'

const Movies = ({ name, url }) => {
    return (
        <>
            <a href={url} >
                <p>{name}</p>
            </a>
        </>
    )
}


export default Movies;