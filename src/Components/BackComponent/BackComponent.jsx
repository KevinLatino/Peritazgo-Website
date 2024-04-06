import React from 'react'
import { Link } from 'react-router-dom';
import { Undo2 } from 'lucide-react'

const BackComponent = () => {
    return (
        <>
            <Link to={'/'}>
                <Undo2 />
            </Link>
        </>
    )
}

export { BackComponent }
