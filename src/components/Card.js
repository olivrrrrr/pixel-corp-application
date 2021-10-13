import React from 'react'

function Card(props) {
    return (
        <div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://avatars.dicebear.com/api/human/${props.name}.svg?size=200`} alt="" />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default Card

