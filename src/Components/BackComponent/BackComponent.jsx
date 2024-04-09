import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Undo2 } from 'lucide-react';
import './back-style.css';

const BackComponent = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`back-container ${isSticky ? 'sticky' : ''}`}>
            <Link to={'/'}>
                <Undo2 className='back-style' size={45} />
            </Link>
        </div>
    );
}

export { BackComponent };
