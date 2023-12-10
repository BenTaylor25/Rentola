import { useState } from 'react';
import { serverRoute } from '../routes';
import { IItem } from './Item';
import './SearchBar.scss';

interface SearchBarProps {
    appendItem: (newItem: IItem) => void
}

export default function SearchBar(props: SearchBarProps) {
    const [searchText, setSearchText] = useState("");

    function search() {
        fetch(`${serverRoute}/item/${searchText}`)
            .then(res => res.json())
            .then(data => console.log(data));

        const newTestItem: IItem = {
            name: "foo",
            qty: 1
        };

        props.appendItem(newTestItem);
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
