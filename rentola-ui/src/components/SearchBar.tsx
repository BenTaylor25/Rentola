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
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw Error(res.statusText);
            })
            .then(body => {
                props.appendItem(body);
            })
            .catch(err => {
                // To do: add to UI Error List.
                console.log(`Failed to load; ${err.message}`);
            });
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
