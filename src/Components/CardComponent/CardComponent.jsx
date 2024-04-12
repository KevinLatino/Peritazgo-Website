import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { MagicMotion } from "react-magic-motion";
import './cardStyles.css'


const CardComponent = (props) => {

  return (
    <>
      <MagicMotion>
        <Link to={props.route}>
          <motion.article
            whileHover={{ scale: 1.1}}
            className='card'
          >
            <header className="card-header">{props.title}</header>
            <hr className="card-divider" />
            <section className="card-content">
              <p>{props.description}</p>
              <div className='icon-box'>
                {props.icon}
                {props.icon2}
                {props.icon3}
              </div>
            </section>
          </motion.article>
        </Link>
      </MagicMotion>
    </>

  );
}

export { CardComponent };