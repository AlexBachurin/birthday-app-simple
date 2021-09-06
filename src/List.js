import React from 'react'

export default function List(props) {
    const { peoples } = props;
    return (
        <>
            {peoples.map(person => {
                return (
                    <article key={person.id} className="person">
                        <img src={person.image} alt={person.name}></img>
                        <div>
                            <h2>{person.name}</h2>
                            <p>{person.age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}
