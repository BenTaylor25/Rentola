import { KeyboardEvent, useState } from 'react';
import { serverRoute } from '../routes';
import { IItem } from './Item';
import './SearchBar.scss';

interface SearchBarProps {
    appendItemIfUnique: (newItem: IItem) => boolean,
    errorList: {
        appendError: (newError: string) => void,
        resetErrors: () => void
    }
}

export default function SearchBar(props: SearchBarProps) {
    const [searchText, setSearchText] = useState("");

    function search() {
        props.errorList.resetErrors();

        fetch(`${serverRoute}/item/${searchText}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw Error(res.statusText);
            })
            .then(body => {
                const wasUnique = props.appendItemIfUnique(body);

                if (!wasUnique) {
                    throw new Error("Item of this name has already been displayed");
                }
            })
            .catch(() => {
                props.errorList.appendError(`Item '${searchText}' could not be found.`);
            });

        // Clear search bar.
        setSearchText("");
    }

    function detectEnterKey(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            search();
        }
    }

    return (
        <div id="search-bar">
            <input
                id="search-bar-text"
                type="text"
                placeholder="Search Items"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                onKeyDown={detectEnterKey} />

            <button
                id="search-bar-button"
                onClick={search}>
                Search
            </button>
        </div>
    );
}
