import { server_route } from '../routes';
import './SearchBar.scss';

export default function SearchBar() {

    function search() {
        fetch(`${server_route}/item/box`)
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div id="search-bar">
            <input
                id="search-bar-text"
                type="text"
                placeholder="Search Items" />

            <button
                id="search-bar-button"
                onClick={search}>
                Search
            </button>
        </div>
    );
}
