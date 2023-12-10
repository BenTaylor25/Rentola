import { useState } from 'react';
import { serverRoute } from '../routes';
import './SearchBar.scss';

export default function SearchBar() {
    const [searchText, setSearchText] = useState("");

    function search() {
        fetch(`${serverRoute}/item/${searchText}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div id="search-bar">
            <input
                id="search-bar-text"
                type="text"
                placeholder="Search Items"
                onChange={e => setSearchText(e.target.value)} />

            <button
                id="search-bar-button"
                onClick={search}>
                Search
            </button>
        </div>
    );
}
