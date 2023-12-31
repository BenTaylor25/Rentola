import { KeyboardEvent, useState } from 'react';
import { serverRoute } from '../routes';
import { IItem } from './Item';
import './SearchBar.scss';
import { ERR_ITEM_TO_SEARCH_NOT_FOUND_FMT, ERR_ITEM_TO_SEARCH_ALREADY_DISPLAYED_FMT, constInterpolate } from '../errorMessages';

interface SearchBarProps {
    appendItemIfUnique: (newItem: IItem) => Promise<boolean>,
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

                throw Error(constInterpolate(
                    ERR_ITEM_TO_SEARCH_NOT_FOUND_FMT,
                    [searchText]
                ));
            })
            .then(body => {
                const wasUnique = props.appendItemIfUnique(body);

                if (!wasUnique) {
                    throw new Error(constInterpolate(
                        ERR_ITEM_TO_SEARCH_ALREADY_DISPLAYED_FMT,
                        [searchText]
                    ));
                }
            })
            .catch(err => {
                props.errorList.appendError(err.message);
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
