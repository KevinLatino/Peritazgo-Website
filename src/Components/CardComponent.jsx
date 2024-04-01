import React from 'react';
import '../Styles/cardStyles.css';
import { CircleArrowRight } from 'lucide-react';



const CardComponent = (props) => {
  return (
    <article className="card">
      <header className="card-header">{props.title}</header>
      <hr className="card-divider" />
      <section className="card-content">
        <p>{props.description}</p>
      </section>
      <CircleArrowRight className='icon-book'/>
    </article>
  );
}

export {CardComponent};