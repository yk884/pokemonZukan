import React from 'react'
import "./Card.css"

const Card = ({pokemon}) => {
  return (
    <div className='card'>
        <div className="cardImg">
            <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <h3 className='cardName'>{pokemon.name}</h3>
        <div className="cardType">
            <h4>Type</h4>
            {pokemon.types.map((type)=>{
                return (
                    <div key={type.type.name}>
                        <span className='typeName'>{type.type.name}</span>
                    </div>
                )
            })}
        </div>
        <div className="cardInfo">
            <div className="cardData">
                <p className='title'>Weight：{parseFloat(pokemon.weight)/10}kg</p>
            </div>
            <div className="cardData">
                <p className='title'>Height：{parseFloat(pokemon.height)/10}m</p>
            </div>
            <div className="cardData">
                <p className='title'>Ability：{pokemon.abilities[0].ability.name}</p>
            </div>
        </div>
    </div>
  )
}

export default Card