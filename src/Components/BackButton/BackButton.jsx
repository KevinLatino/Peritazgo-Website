import React from 'react'
import { Link } from 'react-router-dom'
import { Undo2 } from 'lucide-react';
import { motion } from 'framer-motion'
import './BackButton.css'

const BackButton = () => {
    return (
        <>
            <Link to={'/'}>
                <motion.div 
                whileHover={{scale:1.2}}
                className='container-icon'>
                    <Undo2 size={38} color='white'/>
                </motion.div>
            </Link>
        </>
    )
}

export { BackButton }
