import React from 'react';
import './Search-Bar.css';
import { Search } from 'lucide-react'
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
            className='flex items-center border-2 rounded-3xl bg-[#161b22] border-solid border-[#444d5c] px-2.5  '>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    className='flex justify-center items-center rounded-3xl border-none bg-[#161b22] text-white w-80 h-8 outline-none placeholder:text-white'
                    placeholder='Busca un tema... '
                />
                <Search className='text-[#ffdfb6]' />
            </motion.div>

        </>
    );

};

export { SearchBar }

