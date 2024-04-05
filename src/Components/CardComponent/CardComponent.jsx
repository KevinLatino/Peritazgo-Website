import React from 'react';
import { Link } from 'react-router-dom';
import './cardStyles.css'


const CardComponent = (props) => {

  return (
    <>
      <Link to={props.route}>
          <article className='card'>
            <header className="card-header">{props.title}</header>
            <hr className="card-divider" />
            <section className="card-content">
              <p>{props.description}</p>
            </section>
          </article>
      </Link>
    </>

  );
}

export { CardComponent };