import React from 'react'
import SearchbarIcon from './SearchbarIcon'
import Search from './Search'
import '../../index.css'

export default function Searchbar() {
    return (
        <div className='searchBar'>
            <SearchbarIcon title={'Filters'} icon={'filter_alt'} />
            <Search />
            <SearchbarIcon title={'Sort'} icon={'filter_list'} />
        </div>
    )
}
