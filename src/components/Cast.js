import React from 'react'
import '../styling/cast.scss'

const frontPath = 'https://image.tmdb.org/t/p/w185'

const Cast = props => {

    return (
        <div className='cast-container'>
            {props.cast.map(item => (
                <div className='card' key={item.id}>
                    <div className='image-container'><img src={frontPath + item.profile_path} alt="profile" /></div>
                    <div className='body'>
                        <div>{item.name}</div>
                        <section>{item.character}</section>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cast