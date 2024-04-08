import React from 'react';
import './Search-Bar.css';
import { Search } from 'lucide-react';

const SearchBar = ({ search, setSearch }) => {
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <>
            <div className='search-container'>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    className='search-input'
                    placeholder='Busca un tema... '
                />
                <Search className='icon-search' />
            </div>

        </>
    );

};

export { SearchBar }

