import React from 'react'
import '../styling/reviews.scss'

const Reviews = props => {

    return (
        <div className='reviews-container'>
            {props.reviews.length === 0 ? `No reviews yet :(` : null}
            {props.reviews.map(item => (
                <div className='card' key={item.id}>
                    <section />
                    <div className='container'>
                        <main>
                            <h2>{item.author}</h2>
                            <div>{item.content.slice(0, 300)}...</div>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                See full review
                            </a>
                        </main>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Reviews