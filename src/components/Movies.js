import React from 'react'
import { Link } from 'react-router-dom'
import './Movies.scss'

const frontPath = 'https://image.tmdb.org/t/p/w400'

const Movies = props => {

    return (
        <div className='movies'>
            {props.movies.map(item => (
                <Link to={`/id/${item.id}`} key={item.id} className='link'>
                    <div className='card'>
                        <div className='image-container'><img src={frontPath + item.poster_path} alt="poster" /></div>
                        <div className='body'>
                            <h3>{item.title ? item.title : item.name}</h3>
                            <h4>{localStorage.getItem(`${item.genre_ids[0]}`)} {localStorage.getItem(`${item.genre_ids[1]}`) ? `/` : null} {localStorage.getItem(`${item.genre_ids[1]}`)}</h4>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )

}

export default Movies