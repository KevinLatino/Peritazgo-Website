import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { MagicMotion } from "react-magic-motion";
import './cardStyles.css'


const CardComponent = ({title, route, description, icons}) => {

  return (
    <>
      <MagicMotion>
        <Link to={route}>
          <motion.article
            whileHover={{ scale: 1.1}}
            className='card'
          >
            <header className="card-header">{title}</header>
            <hr className="card-divider" />
            <section className="card-content">
              <p>{description}</p>
              <div className='icon-box'>
                {icons}
              </div>
            </section>
          </motion.article>
        </Link>
      </MagicMotion>
    </>

  );
}

export { CardComponent };