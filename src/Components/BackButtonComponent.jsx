import React from 'react'
import { Link } from 'react-router-dom'
import { Undo2 } from 'lucide-react';
import { motion } from 'framer-motion'

const BackButton = ({link}) => {
    return (
        <>
            <Link to={'/'}>
                <motion.div 
                whileHover={{scale:1.2}}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    backgroundColor: '#5cafad58',
                    width: '55px',
                    height: '55px',
                    borderRadius: '30px',
                    top: '88vh',
                    left: '93.5%',
                }}>
                    <Undo2 size={38} color='white'/>
                </motion.div>
            </Link>
        </>
    )
}

export { BackButton }
