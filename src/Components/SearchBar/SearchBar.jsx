import React from 'react';
import './Search-Bar.css';
import { Search } from 'lucide-react';
import {motion} from 'framer-motion'

const SearchBar = ({ search, setSearch }) => {
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <>
            <motion.div 
            whileHover={{
                scale:1.1,
            }}
            className='search-container'>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    className='search-input'
                    placeholder='Busca un tema... '
                />
                <Search className='icon-search' />
            </motion.div>

        </>
    );

};

export { SearchBar }

