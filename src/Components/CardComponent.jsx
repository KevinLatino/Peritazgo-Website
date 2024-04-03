import React from 'react';
import '../Styles/cardStyles.css';



const CardComponent = (props) => {

  return (
    <article className="card">
      <header className="card-header">{props.title}</header>
      <hr className="card-divider" />
      <section className="card-content">
        <p>{props.description}</p>
      </section>
    </article>
  );
}

export {CardComponent};