import React from 'react';
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
            className='flex items-center border-2 rounded-3xl bg-[#03071231] border-solid border-[#444d5c]  '>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    className='flex justify-center items-center rounded-3xl border-none bg-inherit text-white w-80 h-8 outline-none px-2.5 placeholder:text-white text-[15px] font-sans text-base'
                    placeholder='Busca un tema... '
                />
            </motion.div>

        </>
    );

};

export { SearchBar }

