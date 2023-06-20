import React from 'react';

function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <a href='/reservations' className="action-button">Reserve a table</a>
                </section>

                <section className="hero-image">
                    <img src={require('../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}

export default Heading;