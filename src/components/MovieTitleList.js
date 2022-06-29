import React from 'react';
import Movies from './Movies';


const MovieTitleList = ({ movies }) => {

    const movieNodes = movies.map(movies => {
        return (
            <li>
                <Movies key={movies.id} name={movies.name} url={movies.url}></Movies>
            </li>
        )
    })

    return (
        <ul>
            {movieNodes}
        </ul>
    )
}







export default MovieTitleList